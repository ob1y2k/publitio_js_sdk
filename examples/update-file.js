import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('API key', 'API secret')

publitio.call('/files/update/0M08pwHk', 'PUT', {
  title: 'xxxx',
  description: 'wwww',
  tags: 'tag1 tag2',
  privacy: '1',
  option_download: '1',
  option_ad: '1'
}).then((data) => { console.log(data) })
  .catch((error) => { console.log(error) })
