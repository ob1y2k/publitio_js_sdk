const { default: PublitioAPI, BadResponseJSON } = require('../build/publitio-api')

console.log(BadResponseJSON)
const publitio = new PublitioAPI('oP82yaAMmMPfJAJ77743', 'cWBqbGafr6jaTMlnNyjpJvBmj9gNeiTA')
publitio.call('files/list', 'GET', {limit: 1})
  .then(r => console.log('OK', typeof r, r))
  .catch(e => console.log('Reject', e instanceof BadResponseJSON, e))
