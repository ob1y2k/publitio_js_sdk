import SHA1 from 'crypto-js/sha1'
import { MIN, MAX, API } from './constants'
import { fetchService } from './fetch'
import BadResponseJSON from './BadResponseJSON'

const uint32Max = Math.pow(2, 32)

export const runningInNode = (typeof window === 'undefined')

const FormData = (runningInNode) ? require('form-data') : window.FormData

export default class Helper {
  serialize (obj) {
    const str = []
    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        str.push(`${encodeURIComponent(property)}=${encodeURIComponent(obj[property])}`)
      }
    }
    return str.join('&')
  }

  mtRand (min, max) {
    const hasCrypto = (typeof crypto !== 'undefined')

    function r() {
      return new Promise((resolve, reject) => {
        if (runningInNode) {
          import('crypto').then(
            crypto => resolve(crypto.randomBytes(8).readUInt32BE() / uint32Max)
          )
        } else if (hasCrypto) {
          resolve(crypto.getRandomValues(new Uint32Array(1))[0] / uint32Max)
        } else {
          resolve(Math.random())
        }
      })
    }

    return r().then(x => Math.floor(x * (max - min + 1)) + min)
  }

  pad (number, str) {
    return (str + Array(number).join('0')).slice(0, number)
  }

  timestamp () {
    if (!Date.now) {
      Date.now = () => { return Math.floor(new Date().getTime() / 1000) }
    }
    return Math.floor(Date.now() / 1000)
  }

  apiNonce () {
    return this.pad(8, this.mtRand(MIN, MAX))
  }

  createUrl (call, args = [], url, key, secret, version) {
    args = this.appendArguments(args, key, secret, version)
    return `${url}${call}?${this.serialize(args)}`
  }

  callApi (url, method) {
    return fetchService.callApi(url, method)
      .then(res => {
        if (typeof res !== 'object') {
          throw new BadResponseJSON(res, url)
        }

        return res
      })
  }

  appendArguments (args, key, secret) {
    args['api_nonce'] = this.apiNonce()
    args['api_timestamp'] = this.timestamp()
    args['api_key'] = key
    args['api_signature'] = this.sign(args, secret)
    args['api_kit'] = `js-${API.VERSION}`

    return args
  }

  sign (args, secret) {
    return SHA1(`${args.api_timestamp}${args.api_nonce}${secret}`)
  }

  getUrlForFileCreation (action, args, url, key, secret, version) {
    if (action === 'file') {
      url = this.createUrl('/files/create', args, url, key, secret, version)
    } else if (action === 'watermark') {
      url = this.createUrl('/watermarks/create', args, url, key, secret, version)
    }
    return url
  }

  // dataOrStream can be a Node Buffer, stream, or a string or Blob (or Blob subclasses such as File) in the browser.
  uploadFile (dataOrStream, url) {
    return this.getDataFrom(dataOrStream).then(data => {
      const formData = new FormData()
      formData.append('file', data, 'file')
      return fetchService.uploadFile(formData, url)
    })
  }

  getDataFrom (dataOrStream) {
    return new Promise((resolve, reject) => {
      if (!runningInNode || dataOrStream instanceof Buffer || typeof dataOrStream === 'string') {
        resolve(dataOrStream)
      } else {
        let data = Buffer.from([])
        dataOrStream.on('data', chunk => { data = Buffer.concat([data, chunk]) })
        dataOrStream.on('end', () => resolve(Buffer.from(data)))
        dataOrStream.on('error', err => reject(err))
      }
    })
  }
}

export const helper = new Helper()
