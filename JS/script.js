const loadPhoneData = () => {
    const searchFeild = document.getElementById('input-field');
    const searchText = searchFeild.value;
    const alert2 = document.getElementById('alert2');
    // console.log(searchText);
    // clear data 
    searchFeild.value = '';
    if(searchText == ''){
        alert2.style.display = 'block';
    }
    else{
        alert2.style.display = 'none';
    }
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
                <img class="w-50 mx-auto pt-3" src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title fw-bold fs-4 text-primary">${phone.name}</h5>
                <p class="card-text text-secondary"><span class="fw-bold">Brand: </span> ${ phone.brand}</p>
                <p class="card-text text-success"><span class="fw-bold"></span> ${ phone.releaseDate}</p>
                <div>
                    <h4 class="bg-dark text-white">Main Features</h4>
                    <p class="card-text text-secondary"><span class="fw-bold">Storage: </span> ${ phone.mainFeatures.storage}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">Display Size: </span> ${ phone.mainFeatures.displaySize}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">Chipset: </span> ${ phone.mainFeatures.chipSet}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">Memory: </span> ${ phone.mainFeatures.memory}</p>
                </div>
                <h4 class="bg-dark text-white">Sensors</h4>
                <p class="card-text text-secondary"><span class="fw-bold"></span> ${ phone.mainFeatures.sensors}</p>
                <div>
                    <h4 class="bg-dark text-white">Others</h4>
                    <p class="card-text text-secondary"><span class="fw-bold">Bluetooth: </span> ${ phone.others.Bluetooth}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">GPS: </span> ${ phone.others.GPS}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">NFC: </span> ${ phone.others.NFC}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">Radio: </span> ${ phone.others.Radio}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">USB: </span> ${ phone.others.USB}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">WLAN: </span> ${ phone.others.WLAN}</p>
                </div>
            </div>
    `;
    if(!phone.releaseDate){
        div.innerHTML = `
                <img class="w-50 mx-auto pt-3" src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title fw-bold fs-4 text-primary">${phone.name}</h5>
                <p class="card-text text-secondary"><span class="fw-bold">Brand: </span> ${ phone.brand}</p>
                <p class="card-text text-success"><span class="fw-bold"></span>No Release Date Found</p>
                <div>
                    <h4 class="bg-dark text-white">Main Features</h4>
                    <p class="card-text text-secondary"><span class="fw-bold">Storage: </span> ${ phone.mainFeatures.storage}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">Display Size: </span> ${ phone.mainFeatures.displaySize}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">Chipset: </span> ${ phone.mainFeatures.chipSet}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">Memory: </span> ${ phone.mainFeatures.memory}</p>
                </div>
                <h4 class="bg-dark text-white">Sensors</h4>
                <p class="card-text text-secondary"><span class="fw-bold"></span> ${ phone.mainFeatures.sensors}</p>
                <div>
                    <h4 class="bg-dark text-white">Others</h4>
                    <p class="card-text text-secondary"><span class="fw-bold">Bluetooth: </span> ${ phone.others.Bluetooth}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">GPS: </span> ${ phone.others.GPS}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">NFC: </span> ${ phone.others.NFC}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">Radio: </span> ${ phone.others.Radio}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">USB: </span> ${ phone.others.USB}</p>
                    <p class="card-text text-secondary"><span class="fw-bold">WLAN: </span> ${ phone.others.WLAN}</p>
                </div>
            </div>
    `;
    }
    phoneDetails.appendChild(div);
}