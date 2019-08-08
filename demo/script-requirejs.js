requirejs(['publitio-api.min.js'], PublitioAPI => {
  const publitio = new PublitioAPI('ktuZkDrpfA3M7t3txAp0', 'RWnZpAdRa8olrNaDjsZp1Q5VbWgznwy8')
  publitio.call('/files/list', 'GET', { offset: '0', limit: '10' })
    .then((data) => { console.log(data) })
    .catch((error) => { console.log(error) })
})
