const loadPhoneData = () => {
    const searchFeild = document.getElementById('input-field');
    const searchText = searchFeild.value;
    console.log(searchText);
    searchFeild.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    console.log(url);
}