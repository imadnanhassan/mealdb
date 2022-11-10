const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchtext = searchField.value;
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`;

    fetch(url)
    .then(res =>res.json())
    .then(data=>console.log(data));

}