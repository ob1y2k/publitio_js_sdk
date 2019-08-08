import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('<API key>', '<API secret>')

publitio.call('/players/create', 'POST', {
  name: 'player',
  adtag_id: 'x', // Adtag must already exist
  skin: 'blue'
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
