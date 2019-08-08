import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('<API key>', '<API secret>')

publitio.call('/files/versions/create/<file ID>', 'POST', {
  extension: '<version extension>',
  options: '<custom options, e.g. w_200>'
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
