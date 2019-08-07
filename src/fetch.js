import axios from 'axios'
import { KNOWN_ERROR_CODES } from './constants'
import { runningInNode } from './helper';

class FetchService {
  checkResponseStatus (response) {
    if ((response.status >= 200 && response.status < 300) || KNOWN_ERROR_CODES.includes(response.status)) {
      return response
    }

    const error = new Error(response.statusText)
    error.response = response
    throw error
  }

  callApi (url, method) {
    return axios({
      method,
      url
    })
      .then(res => this.checkResponseStatus(res))
      .then(res => res.data)
  }

  uploadFile (formData, url) {
    let req

    const validateStatus = () => true

    if (runningInNode) {
      req = axios.post(url, formData.getBuffer(), {
        validateStatus,
        headers: formData.getHeaders(),
      })
    } else {
      req = axios.post(url, formData, {validateStatus})
    }

    return req
      .then(res => this.checkResponseStatus(res))
      .then(res => res.data)
  }
}

export const fetchService = new FetchService()
