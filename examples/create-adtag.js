import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('<API key>', '<API secret>')

publitio.call('/players/adtags/create', 'POST', {
  name: '<adtag name>',
  tag: '<adtag URL>'
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
