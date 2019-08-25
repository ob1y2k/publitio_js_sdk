import { helper } from './helper'
import { API, ACTIONS } from './constants'

export { default as BadResponseJSON } from './BadResponseJSON'

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

  call (call, method = 'GET', args = {}) {
    if (typeof call !== 'string') {
      throw new Error('First parameter to call must be a string')
    }

    if (typeof method !== 'string') {
      throw new Error('Second parameter to call must be a string')
    }

    const url = helper.createUrl(call, args, this.url, this.key, this.secret, this.version)
    return helper.callApi(url, method)
  }

  uploadFile (file, action = 'file', args = {}) {
    this.checkAction(action)

    const url = helper.getUrlForFileCreation(action, args, this.url, this.key, this.secret, this.version)
    return helper.uploadFile(file, url)
  }

  uploadRemoteFile (action = 'file', args = {}) {
    this.checkAction(action)

    const url = helper.getUrlForFileCreation(action, args, this.url, this.key, this.secret, this.version)
    return helper.callApi(url, 'POST')
  }

  checkAction (action) {
    if (!Object.values(ACTIONS).includes(action)) {
      throw new Error(`Second parameter to uploadFile must be one of ${Object.values(ACTIONS)}`)
    }
  }
}

export function publitioApi (key, secret) {
  return new PublitioAPI(key, secret)
}
