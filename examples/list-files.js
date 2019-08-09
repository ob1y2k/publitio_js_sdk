import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('<API key>', '<API secret>')

publitio.call('/files/list', 'GET', { offset: '0', limit: '10' })
  .then(data => { console.log(data) })
  .catch(error => { console.log(error) })
