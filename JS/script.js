const loadPhoneData = () => {
    const searchFeild = document.getElementById('input-field');
    const searchText = searchFeild.value;
    // console.log(searchText);
    // clear data 
    searchFeild.value = '';
    // load data 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}

const displaySearchResult = phones => {
    const searchREsult = document.getElementById('search-result');
    searchREsult.textContent = '';
    const alert = document.getElementById('alert');
    if(phones.length == 0){
        // console.log('no result found');
        alert.style.display = 'block';
    }
    else{
        alert.style.display = 'none';
    }
    phones.forEach(phone =>{
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 border border-1 shadow rounded">
                <img class="w-50 mx-auto pt-3" src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title fw-bold fs-4 text-primary">${phone.phone_name}</h5>
                  <p class="card-text text-secondary"><span class="fw-bold">Brand: </span> ${ phone.brand}</p>
                  <button onclick="loadPhoneDetail('${phone.slug}')" type="button" class="btn btn-outline-primary">Explore</button>
                </div>
        </div>
        `;
        searchREsult.appendChild(div);
    })
}

const loadPhoneDetail = phoneId => {
    // console.log(phoneID);
    const url = ` https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data));
}

const displayPhoneDetail = phone => {
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
                <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
    `;
    phoneDetails.appendChild(div);
}