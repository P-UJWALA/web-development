const moviename = document.querySelector('.container');
const container = document.querySelector('.container--details');

document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault();
    let nameOfMovie = moviename.value;
    getDetails(nameOfMovie);
});

function viewContent({ Title, Poster ,Actors,Released,Year,Language}) {
    const content = `
        <h1>${Title}</h1>
        <img src="${Poster}" alt="${Title}">
        <h2>${Actors}</h2>
        <h3>${Released}</h3>
        <h3>${Year}</h3>
        <h3>${Language}</h3>
       
    `;
    container.innerHTML = content;
}

async function getDetails(nameOfMovie) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=25bf92b0&t=${nameOfMovie}`);
    const data = await response.json();
    console.log(data);
    viewContent(data);
}