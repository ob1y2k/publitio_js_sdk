import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('<API key>', '<API secret>')

publitio.call('/watermarks/update/<watermark ID>', 'PUT', {
  position: 'top-right',
  padding: '10'
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
