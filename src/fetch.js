import axios from 'axios'
import { KNOWN_ERROR_CODES } from './constants'

class FetchService {
  checkResponseStatus (response) {
    if ((response.status >= 200 && response.status < 300) || KNOWN_ERROR_CODES.includes(response.status))
      return response

    let error = new Error(response.statusText)
    error.response = response
    throw error
  }

  callApi (url, method) {
    return axios({
      method,
      url,
    })
    .then(res => this.checkResponseStatus(res))
    .then(res => res.data)
  }

  uploadFile (data, url) {
    return axios({
      url,
      data,
      method: 'POST',
    })
    .then(res => this.checkResponseStatus(res))
    .then(res => res.data)
  }
}

export const fetchService = new FetchService()
