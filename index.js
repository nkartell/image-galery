const imageGalery = document.querySelector('.img-gallery');
const inputSearch = document.querySelector('.input-search');
const searchButton = document.querySelector('.search-button');
const crossButton = document.querySelector('.cross-button');


let url = 'https://api.unsplash.com/search/photos?query=spring&per_page=12&client_id=7HbkUhtiabMZnL57WP0vyqBXjDfs5DvlA2LB6wtYHww';

inputSearch.focus(); //при открытии приложения курсор находится в поле ввода


async function getData() {

    const res = await fetch(url);
    const data = await res.json();

    showData(data);

}

window.addEventListener('load', () => getData());



function showData(data) {

    data.results.map(el => {
        const img = document.createElement('img');
        img.classList.add('img')
        img.src = `${el.urls.regular}`;
        img.alt = `image`;
        imageGalery.append(img);

    })
}



inputSearch.addEventListener('change', () => {
    if (inputSearch.value != '') {
        imageGalery.innerHTML = '';
        const value = inputSearch.value;
        url = `https://api.unsplash.com/search/photos?query=${value}&per_page=12&client_id=7HbkUhtiabMZnL57WP0vyqBXjDfs5DvlA2LB6wtYHww`;
        getData();

    }
})


crossButton.addEventListener('click', () => {
    inputSearch.value = '';
});


