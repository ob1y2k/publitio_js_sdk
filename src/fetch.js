import Promise from 'promise-polyfill'
import 'whatwg-fetch'
import { ERROR_CODES } from './constants'

class FetchService {
  checkResponseStatus (response) {
    if ((response.status >= 200 && response.status < 300) || ERROR_CODES.includes(response.status))  {
      return response
    } else {
      let error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  parseJSON (data) {
    return data.json()
  }

  callApi (url, method) {
    return fetch(url, { method })
      .then(this.checkResponseStatus)
      .then(this.parseJSON)
      .catch((error) => { throw error })
  }

  uploadFile (data, url) {
    return fetch(url, { method: 'POST', body: data })
      .then(this.checkResponseStatus)
      .then(this.parseJSON)
      .catch((error) => { throw error })
  }
}

export const fetchService = new FetchService()
