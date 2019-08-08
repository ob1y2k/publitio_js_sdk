import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('API key', 'API secret')

publitio.call('/files/show/0M08pwHk', 'GET')
  .then(data => { console.log(data) })
  .catch(error => { console.log(error) })
