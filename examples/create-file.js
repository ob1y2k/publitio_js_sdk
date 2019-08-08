import PublitioAPI from 'publitio_js_sdk'
import { readFileSync } from 'fs'

const publitio = new PublitioAPI('API key', 'API secret')

// This could also be a Readablestream in Node, a File in the browser or a string
const file = readFileSync('image.png')

publitio.uploadFile(file, 'file')
  .then(data => { console.log(data) })
  .catch(error => { console.log(error) })

// A more realistic example
publitio.uploadFile(file, 'file', {
  title: 'zzz',
  description: 'yyyyyy',
  tags: 'tag1 tag2',
  privacy: '1',
  option_download: '1',
  option_ad: '1'
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
