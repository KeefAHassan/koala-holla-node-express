console.log( 'js' );

function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios({
    method: 'GET',
    url: 'koalas'
  }).then(response => {
    console.log('GET response is good', response);
    renderKoalas(response.data);
  }).catch(error => {
    console.log('GET response went wrong', error);
  });
  
} // end getKoalas

function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to save koalas
  // TODO: fill in this function
 
}

getKoalas();

function renderKoalas(koalas) {
  document.getElementById('viewKoalas').innerHTML = '';
  for (let koala in koalas) {
    let ready = "Y";
    let transferButton = '';
    if (!koala.ready_to_transfer) {
      transferButton = `<button onclick="markReady(${koala.id})">Ready for Transfer</button>`;
      ready = "N";
    }
    document.getElementById('viewKoalas').innerHTML = `
      <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.favorite_color}</td>
        <td>${ready}</td>
        <td>${koala.notes}</td>
        <td>${transferButton}</td>
      </tr>
    `;
  }
}

function markReady(id) {
  console.log('in markReady function');
  // TODO: fill in this function
}
