import PublitioAPI from 'publitio_js_sdk'
import { readFileSync } from 'fs'

const publitio = new PublitioAPI('<API key>', '<API secret>')

// This could also be a ReadableStream in Node, a File in the browser or a string
const file = readFileSync('image.png')

publitio.uploadFile(file, 'file')
  .then(data => { console.log(data) })
  .catch(error => { console.log(error) })

// A more realistic example
publitio.uploadFile(file, 'file', {
  title: '<file title>',
  description: '<file description>',
  tags: '<file tags separated by spaces or commas>',
  privacy: '<0 - private, 1 - public>',
  option_download: '<0 - disable downloads, 1 - enable downloads>'
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
