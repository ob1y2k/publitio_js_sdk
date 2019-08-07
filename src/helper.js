import SHA1 from 'crypto-js/sha1'
import { ACTIONS, MIN, MAX } from './constants'
import { fetchService } from './fetch'

const uint32Max = Math.pow(2, 32)

export const runningInNode = (typeof window === 'undefined')

if (runningInNode) {
  var FormData = require('form-data')
}

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
    let r

    if (runningInNode) {
      const crypto = require('crypto')
      r = crypto.randomBytes(8).readUInt32BE() / uint32Max
    } else if (hasCrypto) {
      r = crypto.getRandomValues(new Uint32Array(1))[0] / uint32Max
    } else {
      r = Math.random()
    }

    return Math.floor(r * (max - min + 1)) + min
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
      .catch((error) => { throw error })
  }

  appendArguments (args, key, secret) {
    args.api_nonce = this.apiNonce()
    args.api_timestamp = this.timestamp()
    args.api_key = key
    args.api_signature = this.sign(args, secret)

    return args
  }

  sign (args, secret) {
    return SHA1(`${args.api_timestamp}${args.api_nonce}${secret}`)
  }

  getUrlForFileCreation (action, args, url, key, secret, version) {
    if (action === ACTIONS.FILE) {
      url = this.createUrl('/files/create', args, url, key, secret, version)
    } else if (action === ACTIONS.WATERMARK) {
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
        if (dataOrStream instanceof Buffer || typeof dataOrStream === 'string') {
          resolve(dataOrStream)
        } else {
          let data = Buffer.from([])
          dataOrStream.on('data', chunk => data = Buffer.concat([data, chunk]))
          dataOrStream.on('end', () => resolve(Buffer.from(data)))
          dataOrStream.on('error', err => reject(err))
        }
      }
    )
  }
}

export const helper = new Helper()
