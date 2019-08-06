import axios from 'axios'
import { KNOWN_ERROR_CODES } from './constants'
import { runningInNode } from './helper';

class FetchService {
  checkResponseStatus (response) {
    if ((response.status >= 200 && response.status < 300) || KNOWN_ERROR_CODES.includes(response.status)) { return response }

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

    // Use form.submit and XMLHttpRequest here instead of axios
    if (runningInNode) {
      return axios.post(url, formData.getBuffer(), {
        method: 'POST',
        headers: formData.getHeaders(),
        validateStatus: () => true,
      }).then(r => r.data)
    } else {
      req = axios({
        url,
        data: formData, // I don't think this would work
        method: 'POST',
      })
    }

    return req
      .then(res => this.checkResponseStatus(res))
      .then(res => res.data)
  }
}

export const fetchService = new FetchService()
