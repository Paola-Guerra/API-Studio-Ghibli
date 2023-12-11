document.addEventListener('DOMContentLoaded', function () {


    const url = 'https://ghibliapi.vercel.app/films';
    const main = document.getElementById("main");
    const container = document.querySelector(".container");
  
  
    fetch(url)
      .then(response => response.json())
      .then(films => {
        
        films.forEach(film => printData(film));
      })
      .catch(error => {
        console.log('Error', error);
      });
  
  
    const printData = (film) => {
      
      const app = document.getElementsByClassName('container')
  
      const filmHTML = `
      <div class="card">
        <img src="${film.image}" class="card-img-top" alt="${film.title}"> 
        <div class="card-body">
          <h5 class="card-title">${film.title}</h5>
          <p class="card-text">${film.description}</p>
          <p class="card-text"><strong>Director:</strong> ${film.director}</p>
          <p class="card-text"><strong>Release Date:</strong> ${film.release_date}</p>
          <a href="${film.url}" class="btn btn-primary">Learn More</a>
        </div>
      </div>
    `;
  
  
      container.innerHTML += filmHTML; 
    };
  });