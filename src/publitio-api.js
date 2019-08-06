import { helper } from './helper'
import { API } from './constants'

export default class PublitioAPI {
  constructor (key, secret) {
    this.version = API.VERSION
    this.url = API.URL
    this.key = key
    this.secret = secret
  }

  version () {
    return this.version
  }

  call (call, method = 'GET', args = []) {
    const url = helper.createUrl(call, args, this.url, this.key, this.secret, this.version)
    return helper.callApi(url, method)
      .catch((error) => { throw error })
  }

  uploadFile (file, action = 'file', args = []) {
    const url = helper.getUrlForFileCreation(action, args, this.url, this.key, this.secret, this.version)
    return helper.uploadFile(file, url)
      .catch((error) => { throw error })
  }

  uploadRemoteFile (action = 'file', args = []) {
    const url = helper.getUrlForFileCreation(action, args, this.url, this.key, this.secret, this.version)
    return helper.callApi(url, 'POST')
      .catch((error) => { throw error })
  }
}

export function publitioApi (key, secret) {
  return new PublitioAPI(key, secret)
}
