const customURLs = {
  "2baf70d1-42bb-4437-b551-e5fed5a87abe": "https://www.google.com/search?q=el+castillo+en+el+cielo+ver+pelicula&sca_esv=589734753&sxsrf=AM9HkKndhAJldsNXry4N4rFJMUULKkDTDA%3A1702286755566&source=hp&ei=o9V2ZZThH9eJkdUPpcSlgAc&iflsig=AO6bgOgAAAAAZXbjs7OJ4flp_vyDLCepq_EcxXkw8I7o&ved=0ahUKEwjUvvmqiIeDAxXXRKQEHSViCXAQ4dUDCAw&uact=5&oq=el+castillo+en+el+cielo+ver+pelicula&gs_lp=Egdnd3Mtd2l6IiRlbCBjYXN0aWxsbyBlbiBlbCBjaWVsbyB2ZXIgcGVsaWN1bGFI1WpQAFjeaHABeACQAQCYAaUBoAHcHqoBBTE1LjIyuAEDyAEA-AEBwgIEECMYJ8ICChAuGIAEGIoFGEPCAgsQABiABBixAxiDAcICChAjGIAEGIoFGCfCAhAQLhjHARjRAxiABBiKBRgnwgIKEC4YQxiABBiKBcICChAuGIAEGIoFGCfCAgoQABiABBiKBRhDwgIFEC4YgATCAhAQLhhDGIMBGLEDGIAEGIoFwgITEC4YgAQYigUYQxixAxiDARjUAsICCBAuGIAEGLEDwgIOEAAYgAQYigUYsQMYgwHCAggQLhixAxiABMICCxAuGIAEGLEDGIMBwgIREC4YgAQYigUYsQMYgwEY1ALCAgsQLhiABBjHARivAcICBRAAGIAEwgIIEAAYgAQYsQPCAhEQLhiABBjHARivARiYBRiZBcICCxAuGK8BGMcBGIAE&sclient=gws-wiz",
  "12cfb892-aac0-4c5b-94af-521852e46d6a": "https://www.facebook.com/watch/?v=499980588024440",
  "58611129-2dbc-4a81-a72f-77ddfc1b1b49": "https://www.google.com/search?q=ver+totoro&sca_esv=589476392&sxsrf=AM9HkKkxKmD5A_RMxaaopevLFbnUwGyCYw%3A1702170897088&ei=ERF1ZYf-BLaE9u8P6PycyAg&ved=0ahUKEwjHyqvd2IODAxU2gv0HHWg-B4kQ4dUDCBA&uact=5&oq=ver+totoro&gs_lp=Egxnd3Mtd2l6LXNlcnAiCnZlciB0b3Rvcm8yChAjGIAEGIoFGCcyBRAAGIAESOAZUIcKWOAQcAF4AZABAJgBrAGgAa8FqgEDMi40uAEDyAEA-AEBwgIQEAAYgAQYigUYQxixAxiDAcICChAAGIAEGIoFGEPCAhMQLhiABBixAxiDARjHARivARgKwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICDhAAGIAEGIoFGLEDGIMBwgIKEAAYgAQYFBiHAuIDBBgAIEGIBgE&sclient=gws-wiz-serp",
  // Añade más URLs para las demás películas
};
const sinopsis = {
  "2baf70d1-42bb-4437-b551-e5fed5a87abe": "mivecinototoro.html",
  "58611129-2dbc-4a81-a72f-77ddfc1b1b49": "mivecinototoro.html"
};

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
        <h5 class="card-title">${film.original_title}</h5>
        <p class="card-text">${film.description}</p>
        <p class="card-text"><strong>Director:</strong> ${film.director}</p>
        <p class="card-text"><strong>Release Date:</strong> ${film.release_date}</p>
        
       <a href="${customURLs[film.id]}" class="btn btn-primary">Ver Película</a><br>

       <a href="${sinopsis[film.id]}" class="masinfo">+Info</a>
      </div>
    </div>
  `;


    container.innerHTML += filmHTML;
  };
});

