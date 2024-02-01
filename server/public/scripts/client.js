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
  // {name: ,
  //  favorite_color
  //  age:  ,
  //  ready_to_transfer: ,
  //  notes   ,
  // }
  let name = document.getElementById('nameIn').value;
  let favorite_color = document.getElementById('colorIn').value;
  let age = document.getElementById('ageIn').value;
  let ready_to_transfer = document.getElementById('readyForTransferIn').value;
  let notes = document.getElementById('notesIn').value;
  let newKoala = {
    name: name,
    favorite_color: favorite_color,
    age: age,
    ready_to_transfer: ready_to_transfer,
    notes: notes
  };
  // axios call to server to save koala
  axios({
    method: 'POST',
    url: '/koalas',
    data: newKoala
  }).then(response => {
    console.log('POST request successful', response);
    getKoalas();
    document.getElementById('nameIn').value = '';
    document.getElementById('colorIn').value = '';
    document.getElementById('ageIn').value = '';
    document.getElementById('readyForTransferIn').value = '';
    document.getElementById('notesIn').value = '';
  }).catch(error => {
    console.log('Error in POST request', error);
  });

}

getKoalas();

function renderKoalas(koalas) {
  document.getElementById('viewKoalas').innerHTML = '';
  for (let koala of koalas) {
    //console.log(koala);
    // console.log(koala.ready_to_transfer);
    let ready = "Y";
    let transferButton = '';
    if (!koala.ready_to_transfer) {
      transferButton = `<button onclick="markReady(${koala.id})">Ready for Transfer</button>`;
      ready = "N";
    } // end if
    document.getElementById('viewKoalas').innerHTML += `
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
