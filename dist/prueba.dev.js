"use strict";

var carrouselRight = function carrouselRight() {
  var place = "trending-carrousel";
  var trending = document.getElementById("trending-carrousel");
  trending.innerHTML = "";
  offset += 3;
  url = "https://api.giphy.com/v1/gifs/trending?api_key=".concat(apiKey, "&limit=3&offset=").concat(offset);
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response.data.forEach(function (gif) {
      return render(gif, place);
    });
  });
};

var carrouselLeft = function carrouselLeft() {
  var place = "trending-carrousel";
  offset -= 3;
  var trending = document.getElementById("trending-carrousel");
  trending.innerHTML = "";
  url = "https://api.giphy.com/v1/gifs/trending?api_key=".concat(apiKey, "&limit=3&offset=").concat(offset);
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response.data.forEach(function (gif) {
      return render(gif, place);
    });
  });
};

var getTrendingGifs = function getTrendingGifs() {
  var place = "trending-carrousel";
  url = "https://api.giphy.com/v1/gifs/trending?api_key=".concat(apiKey, "&limit=3&offset=").concat(offset);
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response.data.forEach(function (gif) {
      return render(gif, place);
    });
  });
};

var key = 'joFupoiQktQU0zTJUUPaAVM5zUgXIyWU';
var offset = 0;
var counter = 12;
var popId = 1; //Darkmode button

var boton = document.getElementById('changeMode');
boton.addEventListener('click', change);
var botonDesktop = document.getElementById('changeModeDesktop');
botonDesktop.addEventListener('click', change); //Hover boton nuevo gifos

crearButton.addEventListener('mouseover', function () {
  return document.getElementById('crearButton').src = 'assets/CTA-crear-gifo-hover.svg';
});
crearButton.addEventListener('mouseout', function () {
  return document.getElementById('crearButton').src = 'assets/button-crear-gifo.svg';
}); //Hover social-media

facebook.addEventListener('mouseover', function () {
  return document.getElementById('facebook').src = 'assets/icon_facebook_hover.svg';
});
facebook.addEventListener('mouseout', function () {
  return document.getElementById('facebook').src = 'assets/icon_facebook.svg';
});
twitter.addEventListener('mouseover', function () {
  return document.getElementById('twitter').src = 'assets/icon-twitter-hover.svg';
});
twitter.addEventListener('mouseout', function () {
  return document.getElementById('twitter').src = 'assets/icon-twitter.svg';
});
instagram.addEventListener('mouseover', function () {
  return document.getElementById('instagram').src = 'assets/icon_instagram-hover.svg';
});
instagram.addEventListener('mouseout', function () {
  return document.getElementById('instagram').src = 'assets/icon_instagram.svg';
});
var cont = 0; // Utilizar variables USAR CONST!!!!!!!!

function change() {
  if (cont % 2 === 0) {
    document.getElementById('estilos').href = 'styles/night-style.css';
    document.getElementById('mobile').src = 'assets/logo-mobile-modo-noct.svg';
    document.getElementById('desktop').src = 'assets/Logo-modo-noc.svg';
    document.getElementById('bars').src = 'assets/burger-modo-noct.svg';
    document.getElementById('times').src = 'assets/close-modo-noct.svg';
    document.getElementById('lupa').src = 'assets/icon-search-modo-noct.svg';
    document.getElementById('crearButton').src = 'assets/CTA-crear-gifo-modo-noc.svg';
    document.getElementById('changeModeDesktop').innerText = 'MODO DIURNO';
    document.getElementById('changeMode').innerText = 'Modo Diurno'; //Hover boton nuevo gifos

    crearButton.addEventListener('mouseover', function () {
      return document.getElementById('crearButton').src = 'assets/CTA-crear-gifo-hover-modo-noc.svg';
    });
    crearButton.addEventListener('mouseout', function () {
      return document.getElementById('crearButton').src = 'assets/CTA-crear-gifo-modo-noc.svg';
    }); //Hover social-media

    facebook.addEventListener('mouseover', function () {
      return document.getElementById('facebook').src = 'assets/icon_facebook_noc.svg';
    });
    facebook.addEventListener('mouseout', function () {
      return document.getElementById('facebook').src = 'assets/icon_facebook.svg';
    });
    twitter.addEventListener('mouseover', function () {
      return document.getElementById('twitter').src = 'assets/icon_twitter_noc.svg';
    });
    twitter.addEventListener('mouseout', function () {
      return document.getElementById('twitter').src = 'assets/icon-twitter.svg';
    });
    instagram.addEventListener('mouseover', function () {
      return document.getElementById('instagram').src = 'assets/icon_instagram_noc.svg';
    });
    instagram.addEventListener('mouseout', function () {
      return document.getElementById('instagram').src = 'assets/icon_instagram.svg';
    });
    cont = cont + 1;
  } else if (cont % 2 === 1) {
    document.getElementById('estilos').href = 'styles/style.css';
    document.getElementById('mobile').src = 'assets/logo-mobile.svg';
    document.getElementById('desktop').src = 'assets/logo-desktop.svg';
    document.getElementById('bars').src = 'assets/burger.svg';
    document.getElementById('times').src = 'assets/close.svg';
    document.getElementById('lupa').src = 'assets/icon-search.svg';
    document.getElementById('crearButton').src = 'assets/button-crear-gifo.svg';
    document.getElementById('changeModeDesktop').innerText = 'MODO NOCTURNO';
    document.getElementById('changeMode').innerText = 'Modo Nocturno'; //Hover boton nuevo gifos

    crearButton.addEventListener('mouseover', function () {
      return document.getElementById('crearButton').src = 'assets/CTA-crear-gifo-hover.svg';
    });
    crearButton.addEventListener('mouseout', function () {
      return document.getElementById('crearButton').src = 'assets/button-crear-gifo.svg';
    }); //Hover social-media

    facebook.addEventListener('mouseover', function () {
      return document.getElementById('facebook').src = 'assets/icon_facebook_hover.svg';
    });
    facebook.addEventListener('mouseout', function () {
      return document.getElementById('facebook').src = 'assets/icon_facebook.svg';
    });
    twitter.addEventListener('mouseover', function () {
      return document.getElementById('twitter').src = 'assets/icon-twitter-hover.svg';
    });
    twitter.addEventListener('mouseout', function () {
      return document.getElementById('twitter').src = 'assets/icon-twitter.svg';
    });
    instagram.addEventListener('mouseover', function () {
      return document.getElementById('instagram').src = 'assets/icon_instagram-hover.svg';
    });
    instagram.addEventListener('mouseout', function () {
      return document.getElementById('instagram').src = 'assets/icon_instagram.svg';
    });
    cont = cont + 1;
  }
} //Favourites button


var boton2 = document.getElementById('favouriteGifs');
boton2.addEventListener('click', favourites);
var botonDesktop2 = document.getElementById('favouriteGifsDesktop');
botonDesktop2.addEventListener('click', favourites);
document.getElementById('favourites').style.display = 'none';

function favourites() {
  if (document.getElementById('favourites').style.display === "none") {
    document.getElementById('favourites').style.display = "block";
    document.getElementById('text-header').style.display = 'none';
    document.getElementById('myGifos').style.display = "none";
  } else {
    document.getElementById('favourites').style.display = "none";
    document.getElementById('text-header').style.display = 'block';
  }
} //GIFOS button


var boton3 = document.getElementById('Gifos');
boton3.addEventListener('click', myGifos);
var botonDesktop3 = document.getElementById('GifosDesktop');
botonDesktop3.addEventListener('click', myGifos);
document.getElementById('myGifos').style.display = 'none';

function myGifos() {
  if (document.getElementById('myGifos').style.display === "none") {
    document.getElementById('myGifos').style.display = "block";
    document.getElementById('text-header').style.display = 'none';
    document.getElementById('favourites').style.display = "none";
  } else {
    document.getElementById('myGifos').style.display = "none";
    document.getElementById('text-header').style.display = 'block';
  }
} //HOME button


var boton4 = document.getElementById('containerImagesNavbar');
boton4.addEventListener('click', mainPage);

function mainPage() {
  if (document.getElementById('text-header').style.display === "none") {
    document.getElementById('myGifos').style.display = "none";
    document.getElementById('text-header').style.display = 'block';
    document.getElementById('favourites').style.display = "none";
  } else {
    document.getElementById('myGifos').style.display = "none";
    document.getElementById('text-header').style.display = 'block';
  }
} //IMPORTAR CON API
// BUSCAR


var list = document.getElementById('list');
var form = document.getElementById('search');
var input = document.getElementById('searchText');
form.addEventListener('submit', showResult);

var getUrl = function getUrl(title, limit) {
  var key = 'joFupoiQktQU0zTJUUPaAVM5zUgXIyWU';
  return "http://api.giphy.com/v1/gifs/search?api_key=".concat(key, "&q=").concat(title, "&limit=").concat(limit);
};

var limit = 12;

function showResult(event) {
  var url, response, result;
  return regeneratorRuntime.async(function showResult$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          url = getUrl(input.value, limit);
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(url));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          result = _context.sent;
          console.log(result);
          result.data.forEach(renderResult);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}

function renderResult(result) {
  var li = document.createElement('li');
  var figure = document.createElement('figure');
  var img = document.createElement('img');
  var figcaption = document.createElement('figcaption');
  var plot = document.createElement('p');
  li.className = 'result';
  img.src = result.images.original.url;
  img.alt = result.Title;
  figcaption.textContent = result.Title;
  plot.textContent = result.Plot;
  figure.appendChild(img);
  figure.appendChild(figcaption);
  li.appendChild(figure);
  li.appendChild(plot);
  list.appendChild(li);
}
/*
// Variables
const imagenes = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg'
];
let posicionActual = 0;
let botonRetroceder = document.getElementById('backButton');
let botonAvanzar = document.getElementById('forwardButton');
let imagen = document.getElementById('imagen');
*/
// Funciones

/* Funcion que cambia la foto en la siguiente posicion*/

/*function pasarFoto() {
    if(posicionActual >= imagenes.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    renderizarImagen();
}
*/

/*Funcion que cambia la foto en la anterior posicion*/

/*function retrocederFoto() {
    if(posicionActual <= 0) {
        posicionActual = imagenes.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}
*/

/*Funcion que actualiza la imagen de imagen dependiendo de posicionActual*/

/*function renderizarImagen () {
    imagen.style.backgroundImage = `url({imagenes[posicionActual]})`;
}

// Eventos
botonAvanzar.addEventListener('click', pasarFoto);
botonRetroceder.addEventListener('click', retrocederFoto);
botonPlay.addEventListener('click', playIntervalo);
botonStop.addEventListener('click', stopIntervalo);
// Iniciar
renderizarImagen();
*/