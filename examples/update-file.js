import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('<API key>', '<API secret>')

publitio.call('/files/update/<file ID>', 'PUT', {
  title: '<file title>',
  description: '<file description>',
  tags: '<file tags separated by spaces or commas>',
  privacy: '<0 - private, 1 - public>',
  option_download: '<0 - disable downloads, 1 - enable downloads>'
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
