const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchtext = searchField.value;
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));

}
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 ">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="">
                <div class="card-body">
                     <h5 class="card-title">${meal.strMeal}</h5>
                     <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                </div>
        </div>
     `;
     searchResult.appendChild(div);

    })
}