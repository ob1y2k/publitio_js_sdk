const { publitioApi } = require('../build/publitio-api')

const publitio = publitioApi('ktuZkDrpfA3M7t3txAp0', 'RWnZpAdRa8olrNaDjsZp1Q5VbWgznwy8')
publitio.call('/files/list')
  .then(r => console.log(r))
  .catch(e => console.log(e))
