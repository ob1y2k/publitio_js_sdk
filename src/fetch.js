import Promise from 'promise-polyfill'
import 'whatwg-fetch'

class FetchService {
  checkResponseStatus (response) {
    console.log('hERE')
    if (response.status >= 200 && response.status < 300) {
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
