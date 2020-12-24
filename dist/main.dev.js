"use strict";

var key = 'joFupoiQktQU0zTJUUPaAVM5zUgXIyWU';
var varMax = 'cp'; // Navbar sticky

var header = document.querySelector('header');
var searchNav = document.getElementById('searchNav');
var createGifo = document.getElementById('createGifo');
document.getElementById('searchNav').style.display = 'none';

window.onscroll = function () {
  var y = window.scrollY;

  if (y !== 0 && screen.width > 800) {
    header.classList.add('header-shadow');
    searchNav.style.display = 'flex';
    createGifo.style.display = 'none';
  } else {
    header.classList.remove('header-shadow');
    searchNav.style.display = 'none';
    createGifo.style.display = 'block';
  }
}; // Hovers


var prev = document.getElementById('prev');
var next = document.getElementById('next');
var facebook = document.getElementById('facebook');
var twitter = document.getElementById('twitter');
var instagram = document.getElementById('instagram');

function hoverModoDiurno() {
  createGifo.addEventListener('mouseover', function () {
    createGifo.src = 'assets/CTA-crear-gifo-hover.svg';
  });
  createGifo.addEventListener('mouseout', function () {
    createGifo.src = 'assets/button-crear-gifo.svg';
  });
  prev.addEventListener('mouseover', function () {
    prev.src = 'assets/button-slider-left-hover.svg';
  });
  prev.addEventListener('mouseout', function () {
    prev.src = 'assets/button-slider-left.svg';
  });
  twitter.addEventListener('mouseover', function () {
    twitter.src = 'assets/icon-twitter-hover.svg';
  });
  twitter.addEventListener('mouseout', function () {
    twitter.src = 'assets/icon-twitter.svg';
  });
  facebook.addEventListener('mouseover', function () {
    facebook.src = 'assets/icon_facebook_hover.svg';
  });
  facebook.addEventListener('mouseout', function () {
    facebook.src = 'assets/icon_facebook.svg';
  });
  instagram.addEventListener('mouseover', function () {
    instagram.src = 'assets/icon_instagram-hover.svg';
  });
  instagram.addEventListener('mouseout', function () {
    instagram.src = 'assets/icon_instagram.svg';
  });
  next.addEventListener('mouseover', function () {
    next.src = 'assets/button-slider-right-hover.svg';
  });
  next.addEventListener('mouseout', function () {
    next.src = 'assets/Button-slider-right.svg';
  });
}

function hoverModoNocturno() {
  createGifo.addEventListener('mouseover', function () {
    createGifo.src = 'assets/CTA-crear-gifo-hover-modo-noc.svg';
  });
  createGifo.addEventListener('mouseout', function () {
    createGifo.src = 'assets/CTA-crear-gifo-modo-noc.svg';
  });
  prev.addEventListener('mouseover', function () {
    prev.src = 'assets/button-slider-left-md-noct-hover.svg';
  });
  prev.addEventListener('mouseout', function () {
    prev.src = 'assets/button-slider-left-md-noct.svg';
  });
  twitter.addEventListener('mouseover', function () {
    twitter.src = 'assets/icon_twitter_noc.svg';
  });
  twitter.addEventListener('mouseout', function () {
    twitter.src = 'assets/icon-tw-normal.svg';
  });
  facebook.addEventListener('mouseover', function () {
    facebook.src = 'assets/icon_facebook_noc.svg';
  });
  facebook.addEventListener('mouseout', function () {
    facebook.src = 'assets/icon_facebook.svg';
  });
  instagram.addEventListener('mouseover', function () {
    instagram.src = 'assets/icon_instagram_noc.svg';
  });
  instagram.addEventListener('mouseout', function () {
    instagram.src = 'assets/icon_instagram.svg';
  });
  next.addEventListener('mouseover', function () {
    next.src = 'assets/button-slider-right-md-noct-hover.svg';
  });
  next.addEventListener('mouseout', function () {
    next.src = 'assets/button-slider-right-md-noct.svg';
  });
} // Change mode


var darkMode = localStorage.getItem('darkMode');
var darkModeToggle = document.getElementById('changeModeDesktop');
var darkModeToggleMobile = document.getElementById('changeMode');
var estilos = document.getElementById('estilos');
var mobile = document.getElementById('mobile');
var desktop = document.getElementById('desktop');
var bars = document.getElementById('bars');
var times = document.getElementById('times');
var lupa = document.getElementById('lupa');
var changeModeDesktop = document.getElementById('changeModeDesktop');
var changeMode = document.getElementById('changeMode');
var closeImage = document.getElementById('closeImage');
var searchImageNav = document.getElementById('searchImageNav');
var camera = document.getElementById('camera');
var film = document.getElementById('film');
var closeGifo = document.getElementById('closeGifo');

var enableDarkMode = function enableDarkMode() {
  estilos.href = 'styles/night-style.css';
  mobile.src = 'assets/logo-mobile-modo-noct.svg';
  desktop.src = 'assets/Logo-modo-noc.svg';
  bars.src = 'assets/burger-modo-noct.svg';
  times.src = 'assets/close-modo-noct.svg';
  lupa.src = 'assets/icon-search-modo-noct.svg';
  searchImageNav.src = 'assets/icon-search-modo-noct.svg';
  createGifo.src = 'assets/CTA-crear-gifo-modo-noc.svg';
  closeImage.src = 'assets/close-modo-noct.svg';
  prev.src = 'assets/button-slider-left-md-noct.svg';
  next.src = 'assets/button-slider-right-md-noct.svg';
  camera.src = 'assets/camara-modo-noc.svg';
  film.src = 'assets/pelicula-modo-noc.svg';
  closeGifo.src = 'assets/close-modo-noct.svg';
  changeModeDesktop.innerText = 'MODO DIURNO';
  changeMode.innerText = 'Modo Diurno';
  localStorage.setItem('darkMode', 'enabled');
  hoverModoNocturno();
};

var disableDarkMode = function disableDarkMode() {
  estilos.href = 'styles/style.css';
  mobile.src = 'assets/logo-mobile.svg';
  desktop.src = 'assets/logo-desktop.svg';
  bars.src = 'assets/burger.svg';
  times.src = 'assets/close.svg';
  lupa.src = 'assets/icon-search.svg';
  searchImageNav.src = 'assets/icon-search.svg';
  createGifo.src = 'assets/button-crear-gifo.svg';
  closeImage.src = 'assets/close.svg';
  prev.src = 'assets/button-slider-left.svg';
  next.src = 'assets/button-slider-right.svg';
  camera.src = 'assets/camara.svg';
  film.src = 'assets/pelicula.svg';
  closeGifo.src = 'assets/close.svg';
  changeModeDesktop.innerText = 'MODO NOCTURNO';
  changeMode.innerText = 'Modo Nocturno';
  localStorage.setItem('darkMode', null);
  hoverModoDiurno();
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', function () {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
darkModeToggleMobile.addEventListener('click', function () {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}); // Click logo

mobile.addEventListener('click', function () {
  window.location.reload();
});
desktop.addEventListener('click', function () {
  window.location.reload();
}); // Click favourites

var favouriteSection = document.getElementById('favourites');
var textHeader = document.getElementById('text-header');
var myGifosSection = document.getElementById('myGifos');
var createGifosSection = document.getElementById('createGifosSection');
var favouriteGifsDesktop = document.getElementById('favouriteGifsDesktop');
var favouriteGifs = document.getElementById('favouriteGifs'); // Click GIFOS

var gifos = document.getElementById('gifos');
gifos.addEventListener('click', myGifos);
var gifosDesktop = document.getElementById('gifosDesktop');
gifosDesktop.addEventListener('click', myGifos);
myGifosSection.style.display = 'none'; // Create gifo

var trending = document.getElementById('trending');
createGifo.addEventListener('click', function () {
  createGifosSection.style.display = 'block';
  favouriteSection.style.display = 'none';
  myGifosSection.style.display = 'none';
  textHeader.style.display = 'none';
  trending.style.display = 'none';
  document.getElementById('containerCreate').style.display = 'grid';
  document.getElementById('containerCamera').style.display = 'flex';
  document.getElementById('box').style.display = 'block';
  document.getElementById('containerControl').style.display = 'block';
  document.getElementById('timing').style.display = 'none';
  document.getElementById('repeat').style.display = 'none';
  document.getElementById('recording').style.display = 'none';
  document.getElementById('finishing').style.display = 'none';
  document.getElementById('uploading').style.display = 'none';
  createGifo.src = 'assets/CTA-crear-gifo-active.svg';
  createGifo.addEventListener('mouseout', function () {
    createGifo.src = 'assets/CTA-crear-gifo-active.svg';
  });
});
var stream;
var video = document.getElementById('video');
var starting = document.getElementById('starting');
var recording = document.getElementById('recording');
var finishing = document.getElementById('finishing');
var timing = document.getElementById('timing');
var repeat = document.getElementById('repeat');
var uploading = document.getElementById('uploading');
var textInsideCreate = document.getElementById('textInsideCreate');
var textInsideCreateStepOne = document.getElementById('textInsideCreateStepOne');
var step1 = document.getElementById('step1');
var step2 = document.getElementById('step2');
var step3 = document.getElementById('step3');
var previewImage = document.getElementById('previewImage');
textInsideCreateStepOne.style.display = 'none';
step1.style.display = 'block';
previewImage.style.display = 'none';
starting.addEventListener('click', startingRecord);
recording.addEventListener('click', record);
finishing.addEventListener('click', finalize);
repeat.addEventListener("click", stepTwo);
uploading.addEventListener('click', uploadGifo);

function startingRecord() {
  step1.style.display = 'block';
  step1.classList.add('step-active');
  starting.style.display = 'none';
  textInsideCreate.style.display = 'none';
  textInsideCreateStepOne.style.display = 'block';
  stream = navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true
  }).then(function _callee(mediaStream) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            video.srcObject = mediaStream;
            video.play();
            recording.style.display = 'flex';
            video.style.display = 'flex';
            step1.classList.remove('step-active');
            step1.style.display = 'none';
            step2.style.display = 'block';
            step2.classList.add('step-active');
            textInsideCreateStepOne.style.display = 'none';
            stream = mediaStream;

          case 10:
          case "end":
            return _context.stop();
        }
      }
    });
  }).then(setTimeout(function () {
    stepTwo();
  }, 3000));
}

function stepTwo() {
  step1.style.display = 'block';
  previewImage.style.display = 'none';
  uploading.style.display = 'none';
  repeat.style.display = 'none';
  finishing.style.display = 'none';
  textInsideCreateStepOne.style.display = 'none';
  step2.classList.add('step-active');
  step1.classList.remove('step-active');
  recording.style.display = 'flex';
  video.style.display = 'flex';
}

function record() {
  timer();
  recording.style.display = 'none';
  recorder = RecordRTC(stream, {
    type: 'gif',
    frameRate: 1,
    quality: 10,
    height: 370,
    width: 430,
    hidden: 240,
    onGifRecordingStarted: function onGifRecordingStarted() {
      console.log('recording started');
    }
  });
  recorder.startRecording();
  recording.style.display = 'none';
  finishing.style.display = 'flex';
  timing.style.display = 'flex';
}

seconds = 0;
minutes = 0;
hours = 0;
var t;

function addTheChronometer() {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;

    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  timing.textContent = (hours ? hours > 9 ? hours : "0" + hours : "00") + ":" + (minutes ? minutes > 9 ? minutes : "0" + minutes : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
  timer();
}

var timer = function timer() {
  return t = setTimeout(addTheChronometer, 1000);
};

function finalize() {
  finishing.style.display = 'none';
  timing.style.display = 'none';
  repeat.style.display = 'flex';
  uploading.style.display = 'flex';
  clearTimeout(t);
  timing.textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
  recorder.stopRecording();
  blob = recorder.getBlob();
  var urlCreator = window.URL || window.webkitURL;
  var imageURL = urlCreator.createObjectURL(blob);
  video.style.display = 'none';
  previewImage.src = imageURL;
  previewImage.style.display = 'block';
}

function uploadGifo() {
  uploading.style.display = 'none';
  repeat.style.display = 'none';
  step2.classList.remove('step-active');
  step3.style.display = 'block';
  step2.style.display = 'block';
  step3.classList.add('step-active');
  step1.style.display = 'block';
  var containerVideo = document.getElementById('containerVideo');
  var cardLoad = document.createElement('div');
  cardLoad.id = 'videoCardLoading';
  cardLoad.className = 'video-card';
  cardLoad.innerHTML = "<img class=\"loader\" src=\"assets/loader.svg\" alt=\"loader\"><br>\n                          <h3 class=\"uploading-title\">Estamos subiendo tu GIFO</h3>";
  containerVideo.appendChild(cardLoad);
  stream.getTracks().forEach(function (track) {
    track.stop();
  });
  var form = new FormData();
  form.append("file", blob, "myGif.gif");
  form.append("tags", "gif, person, funny");
  fetch("https://upload.giphy.com/v1/gifs?api_key=".concat(key), {
    method: "POST",
    body: form
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return saveMyGifo(response.data.id);
  });
}

var saveMyGifo = function saveMyGifo(id) {
  var cardLoad, figDownloadCamera, imgDownloadCamera, resp, objInfo, link;
  return regeneratorRuntime.async(function saveMyGifo$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          cardLoad = document.getElementById('videoCardLoading');
          cardLoad.innerHTML = "<img class=\"success\" src=\"assets/ok.svg\" alt=\"loader\"><br>\n                            <h3 class=\"success-title\">GIFO subido con \xE9xito</h3>\n                            <figure id=\"figDownloadCamera\" class=\"fig-download\">\n                                <img id=\"imgDownloadCamera\" class=\"download\" src=\"assets/icon-download-hover.svg\" alt=\"loader\">\n                            </figure>\n                            <a id=\"link\" target=\"_blank\">\n                                <img class=\"link\" src=\"assets/icon-link-hover.svg\" alt=\"loader\">\n                            </a>";
          figDownloadCamera = document.getElementById('figDownloadCamera');
          imgDownloadCamera = document.getElementById('imgDownloadCamera');
          _context3.next = 6;
          return regeneratorRuntime.awrap(searchId(id));

        case 6:
          resp = _context3.sent;
          objInfo = getInfoMyGifos(resp.data);
          imgDownloadCamera.addEventListener('click', function _callee2() {
            return regeneratorRuntime.async(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    downloadGif(objInfo, figDownloadCamera);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          });
          link = document.getElementById('link');
          link.href = resp.data.url;
          url = "https://api.giphy.com/v1/gifs/".concat(id, "?api_key=").concat(key);
          fetch(url).then(function (response) {
            return response.json();
          }).then(function (gif) {
            return addGifToMyList(gif.data);
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var addGifToMyList = function addGifToMyList(gif) {
  var myGifoList = JSON.parse(localStorage.getItem("MyGifs")) || [];
  localStorage.setItem("MyGifs", JSON.stringify(myGifoList.concat(gif.id)));
}; // API autocomplete


var searchActive = document.getElementById('searchActive');
var input = document.getElementById('searchText');
var inputNav = document.getElementById('searchTextNav');
input.addEventListener('keyup', function (event) {
  return getSuggestions(event);
});

function getSuggestions(event) {
  var response, arraySuggestions;
  return regeneratorRuntime.async(function getSuggestions$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (input.value !== '') {
            closeImage.style.display = 'block';
            lupa.style.display = 'none';
            searchActive.style.display = 'block';
          } else {
            closeImage.style.display = 'none';
            lupa.style.display = 'none';
            searchActive.style.display = 'none';
          }

          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(fetch("https://api.giphy.com/v1/gifs/search/tags?api_key=".concat(key, "&q=").concat(input.value.toLowerCase())));

        case 4:
          response = _context4.sent;
          _context4.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          arraySuggestions = _context4.sent;

          if (event.key !== 'Enter') {
            renderSuggestions(arraySuggestions.data);
          }

          _context4.next = 14;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          return _context4.abrupt("return", _context4.t0);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 11]]);
}

var listAutocomplete = document.getElementById('listAutocomplete');

function renderSuggestions(array) {
  listAutocomplete.innerHTML = '';

  if (array[0]) {
    listAutocomplete.innerHTML = "<li class=\"dividing-line\"></li>";
  } else {
    listAutocomplete.innerHTML = '';
  }

  array.forEach(function (element) {
    var item = document.createElement('li');
    item.classList.add('suggestions');
    item.innerHTML = "<img class=\"search-suggestions\" src=\"assets/icon-search-grey.svg\" alt=\"\">".concat(element.name);
    listAutocomplete.classList.add('listAutocomplete');
    listAutocomplete.appendChild(item);
  });
  clickSuggestion();
}

var number;
var results = document.getElementById('list');
var noResult = document.getElementById('noResult');

function clickSuggestion() {
  var selection = document.querySelectorAll('.suggestions');
  selection.forEach(function (li) {
    return li.addEventListener('click', function (event) {
      number = 0;
      var wordSelected = event.target.innerText;
      input.value = wordSelected;
      listAutocomplete.innerHTML = '';
      search(wordSelected);
      results.innerHTML = '';
      noResult.innerHTML = '';
    });
  });
}

input.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    listAutocomplete.innerHTML = '';
    number = 0;
    search(input.value);
    results.innerHTML = '';
    noResult.innerHTML = '';
  }
});
searchActive.addEventListener('click', function () {
  number = 0;
  listAutocomplete.innerHTML = '';
  search(input.value);
  results.innerHTML = '';
  noResult.innerHTML = '';
});
inputNav.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    number = 0;
    search(inputNav.value);
    results.innerHTML = '';
    noResult.innerHTML = '';
  }
});
searchImageNav.addEventListener('click', function () {
  number = 0;
  search(inputNav.value);
  results.innerHTML = '';
  noResult.innerHTML = '';
}); // Delete query

closeImage.addEventListener('click', function () {
  input.value = '';
  listAutocomplete.innerHTML = '';
  closeImage.style.display = 'none';
  lupa.style.display = 'block';
  searchActive.style.display = 'none';
}); //API Search

var resultLine = document.getElementById('resultLine');

function renderResult(result, globalContainer) {
  var container = document.createElement('div');
  var card = document.createElement('img');
  card.src = result.url;
  card.alt = result.title;
  card.classList.add('imageResult');
  container.classList.add('container');
  container.appendChild(card);
  globalContainer.appendChild(container);
  addElements(result, container, card);
}

function paintedHeart(result, imgFav, figFav) {
  arrayFavs = JSON.parse(localStorage.getItem('userFavourites')) || [];

  if (arrayFavs.some(function (item) {
    return item.id === result.id;
  })) {
    imgFav.src = 'assets/icon-fav-active.svg';
    imgFav.classList = 'img-fav-active';
    figFav.classList.add('fig-fav-active');
    figFav.classList.remove('fig-fav');
  } else {
    imgFav.src = 'assets/icon-fav-hover.svg';
    imgFav.classList = 'img-fav';
    figFav.classList.remove('fig-fav-active');
    figFav.classList.add('fig-fav');
  }
}

function addElements(result, container, card) {
  if (screen.width < 768) {
    card.addEventListener('click', function () {
      maxGif(result);
    });
  } else {
    var figMax = document.createElement('figure');
    var imgMax = document.createElement('img');
    var figDownload = document.createElement('figure');
    var imgDownload = document.createElement('img');
    var figFav = document.createElement('figure');
    var imgFav = document.createElement('img');
    var user = document.createElement('p');
    var title = document.createElement('p');
    var containerElements = document.createElement('div');
    var buttonsH = document.createElement('div');
    var utH = document.createElement('div');
    var elemH = document.createElement('div');
    user.textContent = result.user || 'User';
    title.textContent = result.title;
    var id = result.id;
    imgMax.src = 'assets/icon-max-hover.svg';
    imgDownload.src = 'assets/icon-download-hover.svg';
    imgFav.src = 'assets/icon-fav-hover.svg';
    figMax.classList = 'fig-max icons-gif';
    imgMax.classList = 'img-max';
    figDownload.classList = 'fig-download icons-gif';
    imgDownload.classList = 'img-download';
    figFav.classList = 'fig-fav icons-gif';
    imgFav.classList = 'img-fav';
    user.classList = 'user';
    title.classList = 'title';
    containerElements.style.display = 'none';
    elemH.classList.add('elem-h');
    utH.classList.add('ut-h');
    buttonsH.classList.add('buttons-h');
    figFav.appendChild(imgFav);
    figDownload.appendChild(imgDownload);
    figMax.appendChild(imgMax);
    buttonsH.appendChild(figFav);
    buttonsH.appendChild(figDownload);
    buttonsH.appendChild(figMax);
    utH.appendChild(user);
    utH.appendChild(title);
    elemH.appendChild(buttonsH);
    elemH.appendChild(utH);
    containerElements.appendChild(elemH);
    container.appendChild(containerElements);
    container.addEventListener('mouseover', function () {
      return mouseinContainer(containerElements, card);
    });
    container.addEventListener('mouseout', function () {
      return mouseoutContainer(containerElements, card);
    });
    figFav.addEventListener('click', function () {
      return favouritesFunction(result, imgFav, figFav);
    });
    paintedHeart(result, imgFav, figFav);
    imgDownload.addEventListener('click', function () {
      return downloadGif(result, figDownload);
    });
    figMax.addEventListener('click', function () {
      return maxGif(result);
    });
  }
}

function mouseinContainer(containerElements, card) {
  card.style = 'opacity: 0.4';
  containerElements.style.display = 'block';
}

function mouseoutContainer(containerElements, card) {
  card.style = 'opacity: 1';
  containerElements.style.display = 'none';
}

function firstUppercase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getInfo(element, object, container) {
  var infoGif = {
    url: object.data[element].images.original.url,
    user: object.data[element].username,
    title: object.data[element].title,
    id: object.data[element].id
  };
  renderResult(infoGif, container);
  return infoGif;
}

function search(word) {
  resultLine.style.display = 'flex';
  searchActive.style.display = 'none';
  searchTitle.textContent = firstUppercase(word);
  fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat(key, "&q=").concat(word.toLowerCase(), "&offset=").concat(number, "&limit=12")).then(function (resp) {
    return resp.json();
  }).then(function (object) {
    if (number === 0 && object.data.length == 0) {
      noResults();
      results.style.display = 'none';
    } else {
      textHeader.style.display = 'flex';
      favouriteSection.style.display = 'none';
      favouriteGifsDesktop.style.display = 'flex';
      favouriteGifs.style.display = 'flex';
      myGifosSection.style.display = 'none';
      createGifosSection.style.display = 'none';
      createGifo.classList.add('img-create-gifo');
      createGifo.classList.remove('img-create-gifo-active');
      searchTitle.style.display = 'flex';
      results.style.display = 'grid';
      trending.style.display = 'block';
      var min = Math.min(object.data.length, 12);
      createArraySearch(object, min);
      showMore(word);
    }
  })["catch"](function (error) {
    return console.error(error);
  });
}

function createArraySearch(object, min) {
  var indexes = Array.from(Array(min).keys());
  indexes.map(function (element) {
    return getInfo(element, object, results);
  });
}

var showMoreButton = document.getElementById('showMore');

function showMore(word) {
  var response, result;
  return regeneratorRuntime.async(function showMore$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat(key, "&q=").concat(word.toLowerCase(), "&offset=").concat(number + 12)));

        case 3:
          response = _context5.sent;
          _context5.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          result = _context5.sent;

          if (result.data[0]) {
            showMoreButton.style.display = 'block';
          } else {
            showMoreButton.style.display = 'none';
          }

          return _context5.abrupt("return", result);

        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", _context5.t0);

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

var searchTitle = document.getElementById('searchTitle');
showMoreButton.addEventListener('click', function (event) {
  event.preventDefault();

  if (input.value === '') {
    number += 12;
    showMore(searchTitle.innerText);
    search(searchTitle.innerText);
  } else {
    number += 12;
    showMore(input.value);
    search(input.value);
  }
});
var figOuch = document.createElement('figure');
var imgOuch = document.createElement('img');
var captionOuch = document.createElement('figcaption');

function noResults() {
  document.getElementById('searchTitle').style.display = 'block';
  imgOuch.src = 'assets/icon-busqueda-sin-resultado.svg';
  captionOuch.textContent = 'Intenta con otra búsqueda.';
  imgOuch.classList = 'img-ouch';
  captionOuch.classList = 'caption-ouch';
  figOuch.classList = 'fig-ouch';
  showMoreButton.style.display = 'none';
  figOuch.appendChild(imgOuch);
  figOuch.appendChild(captionOuch);
  noResult.appendChild(figOuch);
} // Download button


function downloadGif(item, container) {
  var a, response, file;
  return regeneratorRuntime.async(function downloadGif$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          a = document.createElement('a');
          _context6.next = 4;
          return regeneratorRuntime.awrap(fetch(item.url));

        case 4:
          response = _context6.sent;
          _context6.next = 7;
          return regeneratorRuntime.awrap(response.blob());

        case 7:
          file = _context6.sent;
          a.download = item.title;
          a.href = window.URL.createObjectURL(file);
          a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
          container.appendChild(a);
          a.click();
          _context6.next = 18;
          break;

        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", _context6.t0);

        case 18:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 15]]);
} // Max Gif


var nav = document.getElementById('navbar');
var trendingGifos = document.getElementById('trending');
var footer = document.querySelector('footer');
var maxGifo = document.getElementById('maxGifo');

function maxGif(result) {
  var gifoMax = document.createElement('img');
  var userMax = document.createElement('p');
  var titleMax = document.createElement('p');
  var figFavMax = document.createElement('figure');
  var imgFavMax = document.createElement('img');
  var figDownloadMax = document.createElement('figure');
  var imgDownloadMax = document.createElement('img');
  var containerMax = document.createElement('div');
  var buttons = document.createElement('div');
  var ut = document.createElement('div');
  var elem = document.createElement('div');
  gifoMax.src = result.url;
  userMax.textContent = result.user || 'User';
  titleMax.textContent = result.title;
  imgFavMax.src = 'assets/icon-fav-hover.svg';
  imgDownloadMax.src = 'assets/icon-download-hover.svg';
  gifoMax.classList.add('gifo-max');
  userMax.classList.add('user-max');
  titleMax.classList.add('title-max');
  imgFavMax.classList.add('img-fav-gif');
  imgDownloadMax.classList.add('img-download-gif');
  figFavMax.classList = 'fig-fav-max icons-max';
  figDownloadMax.classList = 'fig-download-max icons-max';
  containerMax.classList.add('container-max');
  elem.classList.add('elem');
  ut.classList.add('ut');
  buttons.classList.add('buttons');
  maxGifo.style.display = 'flex';
  nav.classList.add('none');
  textHeader.classList.add('none');
  trendingGifos.style.display = 'none';
  footer.classList.add('none');
  favouriteSection.style.display = 'none';
  myGifosSection.classList.add('none');
  header.classList.add('none');
  results.classList.add('none');
  showMoreButton.style.display = 'none';
  figFavMax.appendChild(imgFavMax);
  figDownloadMax.appendChild(imgDownloadMax);
  ut.appendChild(userMax);
  ut.appendChild(titleMax);
  buttons.appendChild(figFavMax);
  buttons.appendChild(figDownloadMax);
  elem.appendChild(ut);
  elem.appendChild(buttons);
  containerMax.appendChild(gifoMax);
  containerMax.appendChild(elem);
  maxGifo.appendChild(containerMax);
  figFavMax.addEventListener('click', function () {
    return favouritesFunction(result, imgFavMax, figFavMax);
  });
  paintedHeart(result, imgFavMax, figFavMax);
  imgDownloadMax.addEventListener('click', function () {
    return downloadGif(result, figDownloadMax);
  });
}

closeGifo.addEventListener('click', function () {
  return closeGif();
});

function closeGif() {
  var containerMax = document.querySelector('.container-max');
  containerMax.remove();
  header.classList.remove('none');
  maxGifo.style.display = 'none';
  nav.style.display = 'flex';
  footer.classList.remove('none');
  results.classList.remove('none');
  trendingGifos.style.display = 'block';

  if (varMax === 'cp') {
    textHeader.style.display = 'flex';
  } else if (varMax === 'fav') {
    favouriteSection.style.display = 'block';
  } else if (varMax === 'mg') {
    myGifosSection.style.display = 'block';
    myGifs = JSON.parse(localStorage.getItem('MyGifs')) || [];

    if (myGifs.length === 0) {
      gifosSinContenido.classList.remove('none');
    }
  }
} // API trending - carousell


trendings();

function trendings() {
  fetch("https://api.giphy.com/v1/gifs/trending?api_key=".concat(key)).then(function (resp) {
    return resp.json();
  }).then(function (object) {
    return createArray(object);
  })["catch"](function (error) {
    return console.error(error);
  });
}

var carousel = document.getElementById('carousel');
var nCarousel = 20;

function createArray(object) {
  var indexes = Array.from(Array(nCarousel).keys());
  indexes.map(function (element) {
    getInfo(element, object, carousel);
  });
}

var position = 0;
var width = 26.74;
var count = 1;
var listElems = carousel.querySelectorAll('container');
prev.addEventListener('click', function () {
  position = Math.min(position + width * count, 0);
  carousel.style.marginLeft = position + 'vw';
});
next.addEventListener('click', function () {
  position = Math.max(position - width * count, width * (listElems.length - (nCarousel - 3)));
  carousel.style.marginLeft = position + 'vw';
}); // API trending terms
// CON ESTA FUNCIÓN PONGO LA PRIMERA LETRA EN MAYÚSCULA

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function listTrendingWords() {
  var apiTrendingWords, response, results, trendingFive, capitalizedTrendingFive, capitalizedTrendingWords, capitalizedTrendingFiveSplit, trending1, trending2, trending3, trending4, trending5, title, firstUppercase;
  return regeneratorRuntime.async(function listTrendingWords$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          firstUppercase = function _ref(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          };

          apiTrendingWords = "https://api.giphy.com/v1/trending/searches?api_key=".concat(key);
          _context7.next = 4;
          return regeneratorRuntime.awrap(fetch(apiTrendingWords));

        case 4:
          response = _context7.sent;
          _context7.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          results = _context7.sent;
          trendingFive = results.data.splice(0, 5); // LE PONGO MAYÚSCULA A LA PRIMERA LETRA DE LA PALABRA

          capitalizedTrendingFive = [];
          trendingFive.forEach(function (element) {
            capitalizedTrendingFive = capitalizedTrendingFive + ',' + capitalize(element);
          });
          capitalizedTrendingWords = [];
          capitalizedTrendingWords = capitalizedTrendingFive.slice(1);
          capitalizedTrendingFiveSplit = [];
          capitalizedTrendingFiveSplit = capitalizedTrendingWords.split(',');
          trending1 = document.createElement('p');
          trending1.innerText = capitalizedTrendingFiveSplit[0] + ', ';
          trending1.className = 'trendingWord';
          trending2 = document.createElement('p');
          trending2.innerText = capitalizedTrendingFiveSplit[1] + ', ';
          trending2.className = 'trendingWord';
          trending3 = document.createElement('p');
          trending3.innerText = capitalizedTrendingFiveSplit[2] + ', ';
          trending3.className = 'trendingWord';
          trending4 = document.createElement('p');
          trending4.innerText = capitalizedTrendingFiveSplit[3] + ', ';
          trending4.className = 'trendingWord';
          trending5 = document.createElement('p');
          trending5.innerText = capitalizedTrendingFiveSplit[4];
          trending5.className = 'trendingWord';
          title = document.getElementById('wordList');
          title.appendChild(trending1);
          title.appendChild(trending2);
          title.appendChild(trending3);
          title.appendChild(trending4);
          title.appendChild(trending5);
          trending1.addEventListener('click', function (event) {
            results.innerHTML = '';
            input.value = '';
            var word = event.target.textContent.slice(0, -2);
            number = 0;
            searchTitle.textContent = firstUppercase(word);
            search(word);
          });
          trending2.addEventListener('click', function (event) {
            results.innerHTML = '';
            input.value = '';
            var word = event.target.textContent.slice(0, -2);
            number = 0;
            searchTitle.textContent = firstUppercase(word);
            search(word);
          });
          trending3.addEventListener('click', function (event) {
            results.innerHTML = '';
            input.value = '';
            var word = event.target.textContent.slice(0, -2);
            number = 0;
            searchTitle.textContent = firstUppercase(word);
            search(word);
          });
          trending4.addEventListener('click', function (event) {
            results.innerHTML = '';
            input.value = '';
            var word = event.target.textContent.slice(0, -2);
            number = 0;
            searchTitle.textContent = firstUppercase(word);
            search(word);
          });
          trending5.addEventListener('click', function (event) {
            results.innerHTML = '';
            input.value = '';
            var word = event.target.textContent.slice(0, -2);
            number = 0;
            searchTitle.textContent = firstUppercase(word);
            search(word);
          });

        case 41:
        case "end":
          return _context7.stop();
      }
    }
  });
}

listTrendingWords(); // Section Favourites

var numberFav;
var showMoreFav = document.getElementById('seeMore');

function showMoreFavButton(numberFav) {
  arrayFavs = JSON.parse(localStorage.getItem('FavouritesList')) || [];

  if (arrayFavs[numberFav + 12]) {
    showMoreFav.classList.remove('none');
  } else {
    showMoreFav.classList.add('none');
  }
}

showMoreFav.addEventListener('click', function (event) {
  event.preventDefault();
  showMoreFavFunction();
});

function showMoreFavFunction() {
  arrayFavs = JSON.parse(localStorage.getItem('FavouritesList')) || [];
  numberFav += 12;
  arrayFavsRender = arrayFavs.slice(numberFav, numberFav + 12);
  arrayFavsRender.forEach(function (item) {
    return renderResult(item, favoritosConContenido);
  });
  showMoreFavButton(numberFav);
}

var arrayFavs = [];

function favouritesFunction(result, imgFav, figFav) {
  arrayFavs = JSON.parse(localStorage.getItem('FavouritesList')) || [];
  favoritosConContenido.innerHTML = '';

  if (arrayFavs.some(function (item) {
    return item.id === result.id;
  })) {
    arrayFavs = arrayFavs.filter(function (item) {
      return item.id !== result.id;
    });
    localStorage.setItem('FavouritesList', JSON.stringify(arrayFavs));
    imgFav.src = 'assets/icon-fav-hover.svg';
    imgFav.classList = 'img-fav-gif';
    figFav.classList.remove('fig-fav-active');
    figFav.classList.add('fig-fav');

    var _arrayFavsRender = arrayFavs.slice(0, 12);

    numberFav = 0;

    _arrayFavsRender.forEach(function (item) {
      return renderResult(item, favoritosConContenido);
    });

    showMoreFavButton(numberFav);
  } else {
    arrayFavs = arrayFavs.concat(result);
    localStorage.setItem('FavouritesList', JSON.stringify(arrayFavs));
    imgFav.src = 'assets/icon-fav-active.svg';
    imgFav.classList = 'img-fav-active';
    figFav.classList.add('fig-fav-active');
    figFav.classList.remove('fig-fav');

    var _arrayFavsRender2 = arrayFavs.slice(0, 12);

    numberFav = 0;

    _arrayFavsRender2.forEach(function (item) {
      return renderResult(item, favoritosConContenido);
    });

    showMoreFavButton(numberFav);
  }
}

var favoritosSinContenido = document.getElementById('favoritosSinContenido');
var favoritosConContenido = document.getElementById('favoritosConContenido');
favouriteGifsDesktop.addEventListener('click', function () {
  createGifo.classList.remove('img-create-gifo-active');
  createGifo.classList.add('img-create-gifo');
  textHeader.style.display = 'none';
  myGifosSection.style.display = 'none';
  createGifosSection.style.display = 'none';
  favouriteSection.style.display = 'block';
  trendingGifos.style.display = 'block';
  favoritosSinContenido.style.display = 'none';
  favouriteGifsDesktop.classList.add('active');
  varMax = 'fav';
  favoritosConContenido.innerHTML = '';
  arrayFavs = JSON.parse(localStorage.getItem('FavouritesList')) || [];

  if (arrayFavs.length === 0) {
    favoritosSinContenido.style.display = 'block';
    favoritosConContenido.style.display = 'none';
  } else {
    favoritosConContenido.style.display = 'grid';

    var _arrayFavsRender3 = arrayFavs.slice(0, 12);

    numberFav = 0;

    _arrayFavsRender3.forEach(function (item) {
      return renderResult(item, favoritosConContenido);
    });

    showMoreFavButton(numberFav);
  }
});
favouriteGifs.addEventListener('click', function () {
  createGifo.classList.remove('img-create-gifo-active');
  createGifo.classList.add('img-create-gifo');
  textHeader.style.display = 'none';
  myGifosSection.style.display = 'none';
  createGifosSection.style.display = 'none';
  favouriteSection.style.display = 'block';
  trendingGifos.style.display = 'block';
  favoritosSinContenido.style.display = 'none';
  favouriteGifs.classList.add('active');
  varMax = 'fav';
  favoritosConContenido.innerHTML = '';
  arrayFavs = JSON.parse(localStorage.getItem('FavouritesList')) || [];

  if (arrayFavs.length === 0) {
    favoritosSinContenido.style.display = 'block';
    favoritosConContenido.style.display = 'none';
  } else {
    favoritosConContenido.style.display = 'grid';

    var _arrayFavsRender4 = arrayFavs.slice(0, 12);

    numberFav = 0;

    _arrayFavsRender4.forEach(function (item) {
      return renderResult(item, favoritosConContenido);
    });

    showMoreFavButton(numberFav);
  }
}); // Section MyGifos

var numberMyGifos;
var gifosConContenido = document.getElementById('gifosConContenido');
var gifosSinContenido = document.getElementById('gifosSinContenido');
var myGifsInfo = [];
gifosDesktop.addEventListener('click', function _callee3() {
  var myGifs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, iterator, resp, _arrayMyGifosRender;

  return regeneratorRuntime.async(function _callee3$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          myGifsInfo = [];
          myGifs = [];
          varMax = 'mg';
          gifosConContenido.innerHTML = '';
          favouriteSection.style.display = 'none';
          createGifo.classList.remove('img-create-gifo-active');
          createGifo.classList.add('img-create-gifo');
          textHeader.classList.add('none');
          favouriteSection.classList.add('none');
          createGifosSection.style.display = 'none';
          trendingGifos.style.display = 'block';
          myGifosSection.style.display = 'block';
          favouriteSection.classList.remove('active');
          gifosDesktop.classList.add('active');
          myGifs = JSON.parse(localStorage.getItem('MyGifs')) || [];

          if (!(myGifs.length === 0)) {
            _context8.next = 21;
            break;
          }

          gifosSinContenido.style.display = 'block';
          gifosConContenido.classList.add('none');
          showMoreMyGifos.style.display = 'none';
          _context8.next = 57;
          break;

        case 21:
          gifosSinContenido.style.display = 'none';
          gifosConContenido.classList.remove('none');
          showMoreMyGifos.classList.remove('none');
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context8.prev = 27;
          _iterator = myGifs[Symbol.iterator]();

        case 29:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context8.next = 38;
            break;
          }

          iterator = _step.value;
          _context8.next = 33;
          return regeneratorRuntime.awrap(searchId(iterator));

        case 33:
          resp = _context8.sent;
          myGifsInfo = myGifsInfo.concat(resp.data);

        case 35:
          _iteratorNormalCompletion = true;
          _context8.next = 29;
          break;

        case 38:
          _context8.next = 44;
          break;

        case 40:
          _context8.prev = 40;
          _context8.t0 = _context8["catch"](27);
          _didIteratorError = true;
          _iteratorError = _context8.t0;

        case 44:
          _context8.prev = 44;
          _context8.prev = 45;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 47:
          _context8.prev = 47;

          if (!_didIteratorError) {
            _context8.next = 50;
            break;
          }

          throw _iteratorError;

        case 50:
          return _context8.finish(47);

        case 51:
          return _context8.finish(44);

        case 52:
          myGifsInfo = myGifsInfo.map(function (object) {
            return getInfoMyGifos(object);
          });
          _arrayMyGifosRender = myGifsInfo.slice(0, 12);
          numberMyGifos = 0;

          _arrayMyGifosRender.forEach(function (item) {
            return renderMyGifos(item, gifosConContenido);
          });

          showMoreMyGifosButton(numberMyGifos);

        case 57:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[27, 40, 44, 52], [45,, 47, 51]]);
});
gifos.addEventListener('click', function _callee4() {
  var myGifs, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, iterator, resp, _arrayMyGifosRender2;

  return regeneratorRuntime.async(function _callee4$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          myGifsInfo = [];
          myGifs = [];
          varMax = 'mg';
          gifosConContenido.innerHTML = '';
          favouriteSection.style.display = 'none';
          createGifo.classList.remove('img-create-gifo-active');
          createGifo.classList.add('img-create-gifo');
          textHeader.classList.add('none');
          favouriteSection.classList.add('none');
          createGifosSection.style.display = 'none';
          trendingGifos.style.display = 'block';
          myGifosSection.style.display = 'block';
          favouriteSection.classList.remove('active');
          gifos.classList.add('active');
          myGifs = JSON.parse(localStorage.getItem('MyGifs')) || [];

          if (!(myGifs.length === 0)) {
            _context9.next = 21;
            break;
          }

          gifosSinContenido.style.display = 'block';
          gifosConContenido.classList.add('none');
          showMoreMyGifos.style.display = 'none';
          _context9.next = 57;
          break;

        case 21:
          gifosSinContenido.style.display = 'none';
          gifosConContenido.classList.remove('none');
          showMoreMyGifos.classList.remove('none');
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context9.prev = 27;
          _iterator2 = myGifs[Symbol.iterator]();

        case 29:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context9.next = 38;
            break;
          }

          iterator = _step2.value;
          _context9.next = 33;
          return regeneratorRuntime.awrap(searchId(iterator));

        case 33:
          resp = _context9.sent;
          myGifsInfo = myGifsInfo.concat(resp.data);

        case 35:
          _iteratorNormalCompletion2 = true;
          _context9.next = 29;
          break;

        case 38:
          _context9.next = 44;
          break;

        case 40:
          _context9.prev = 40;
          _context9.t0 = _context9["catch"](27);
          _didIteratorError2 = true;
          _iteratorError2 = _context9.t0;

        case 44:
          _context9.prev = 44;
          _context9.prev = 45;

          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }

        case 47:
          _context9.prev = 47;

          if (!_didIteratorError2) {
            _context9.next = 50;
            break;
          }

          throw _iteratorError2;

        case 50:
          return _context9.finish(47);

        case 51:
          return _context9.finish(44);

        case 52:
          myGifsInfo = myGifsInfo.map(function (object) {
            return getInfoMyGifos(object);
          });
          _arrayMyGifosRender2 = myGifsInfo.slice(0, 12);
          numberMyGifos = 0;

          _arrayMyGifosRender2.forEach(function (item) {
            return renderMyGifos(item, gifosConContenido);
          });

          showMoreMyGifosButton(numberMyGifos);

        case 57:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[27, 40, 44, 52], [45,, 47, 51]]);
});

function renderMyGifos(result, globalContainer) {
  var container = document.createElement('div');
  var card = document.createElement('img');
  card.src = result.url;
  card.alt = result.title;
  card.classList.add('card-gif');
  container.classList.add('container');
  container.appendChild(card);
  globalContainer.appendChild(container);
  addElementsMyGifos(result, container, card);
}

function addElementsMyGifos(result, container, card) {
  if (screen.width < 768) {
    card.addEventListener('click', function () {
      maxGifMyGifos(result);
    });
  } else {
    var figMax = document.createElement('figure');
    var imgMax = document.createElement('img');
    var figDownload = document.createElement('figure');
    var imgDownload = document.createElement('img');
    var figTrash = document.createElement('figure');
    var imgTrash = document.createElement('img');
    var user = document.createElement('p');
    var title = document.createElement('p');
    var containerElements = document.createElement('div');
    user.textContent = result.user || 'User';
    title.textContent = result.title;
    var id = result.id;
    figMax.classList = 'fig-max icons-gif';
    imgMax.classList = 'img-max';
    figDownload.classList = 'fig-download icons-gif';
    imgDownload.classList = 'img-download';
    figTrash.classList = 'fig-trash icons-gif';
    imgTrash.classList = 'img-trash';
    user.classList = 'user';
    title.classList = 'title';
    containerElements.classList = 'container-elements none';
    imgMax.src = 'assets/icon-max-hover.svg';
    imgDownload.src = 'assets/icon-download-hover.svg';
    imgTrash.src = 'assets/icon-trash-hover.svg';
    var buttonsH = document.createElement('div');
    var utH = document.createElement('div');
    var elemH = document.createElement('div');
    elemH.classList.add('elem-h');
    utH.classList.add('ut-h');
    buttonsH.classList.add('buttons-h');
    figTrash.appendChild(imgTrash);
    figDownload.appendChild(imgDownload);
    figMax.appendChild(imgMax);
    buttonsH.appendChild(figTrash);
    buttonsH.appendChild(figDownload);
    buttonsH.appendChild(figMax);
    utH.appendChild(user);
    utH.appendChild(title);
    elemH.appendChild(buttonsH);
    elemH.appendChild(utH);
    containerElements.appendChild(elemH);
    container.appendChild(containerElements);
    container.addEventListener('mouseover', function () {
      return mouseinContainer(containerElements, card);
    });
    container.addEventListener('mouseout', function () {
      return mouseoutContainer(containerElements, card);
    }), figTrash.addEventListener('click', function () {
      deleteGif(id, container);
      myGifs = JSON.parse(localStorage.getItem('MyGifs')) || [];

      if (myGifs.length === 0) {
        gifosSinContenido.classList.remove('none');
      }
    });
    imgDownload.addEventListener('click', function () {
      return downloadGif(result, figDownload);
    });
    figMax.addEventListener('click', function () {
      return maxGifMyGifos(result, container);
    });
  }
}

function maxGifMyGifos(result, container) {
  var gifoMax = document.createElement('img');
  var userMax = document.createElement('p');
  var titleMax = document.createElement('p');
  var figTrashMax = document.createElement('figure');
  var imgTrashMax = document.createElement('img');
  var figDownloadMax = document.createElement('figure');
  var imgDownloadMax = document.createElement('img');
  var containerMax = document.createElement('div');
  var buttons = document.createElement('div');
  var ut = document.createElement('div');
  var elem = document.createElement('div');
  var id = result.id;
  gifoMax.src = result.url;
  userMax.textContent = result.user || 'User';
  titleMax.textContent = result.title;
  imgTrashMax.src = 'assets/icon-trash-hover.svg';
  imgDownloadMax.src = 'assets/icon-download-hover.svg';
  gifoMax.classList.add('gifo-max');
  userMax.classList.add('user-max');
  titleMax.classList.add('title-max');
  imgTrashMax.classList.add('img-trash-gif');
  imgDownloadMax.classList.add('img-download-gif');
  figTrashMax.classList = 'fig-trash-max icons-max';
  figDownloadMax.classList = 'fig-download-max icons-max';
  containerMax.classList.add('container-max');
  elem.classList.add('elem');
  ut.classList.add('ut');
  buttons.classList.add('buttons');
  maxGifo.style.display = 'flex';
  nav.classList.add('none');
  textHeader.classList.add('none');
  trendingGifos.style.display = 'none';
  footer.classList.add('none');
  favouriteSection.classList.add('none');
  header.classList.add('none');
  myGifosSection.style.display = 'none';
  figTrashMax.appendChild(imgTrashMax);
  figDownloadMax.appendChild(imgDownloadMax);
  ut.appendChild(userMax);
  ut.appendChild(titleMax);
  buttons.appendChild(figTrashMax);
  buttons.appendChild(figDownloadMax);
  elem.appendChild(ut);
  elem.appendChild(buttons);
  containerMax.appendChild(gifoMax);
  containerMax.appendChild(elem);
  maxGifo.appendChild(containerMax);
  figTrashMax.addEventListener('click', function () {
    return deleteGif(id, container);
  });
  imgDownloadMax.addEventListener('click', function () {
    return downloadGif(result, figDownloadMax);
  });
}

function getInfoMyGifos(object) {
  var infoGif = {
    url: object.images.original.url,
    user: object.username,
    title: object.title,
    id: object.id
  };
  return infoGif;
}

function searchId(id) {
  var response, result;
  return regeneratorRuntime.async(function searchId$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.giphy.com/v1/gifs/".concat(id, "?api_key=").concat(key)));

        case 3:
          response = _context10.sent;
          _context10.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          result = _context10.sent;
          return _context10.abrupt("return", result);

        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", _context10.t0);

        case 13:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

function deleteGif(id, container) {
  container.remove();
  var createdGifs = JSON.parse(localStorage.getItem('MyGifs'));
  createdGifs = createdGifs.filter(function (item) {
    return item !== id;
  });
  localStorage.setItem('MyGifs', JSON.stringify(createdGifs));
  window.location.reload();
}

var showMoreMyGifos = document.getElementById('seeMore2');

function showMoreMyGifosButton(numberMyGifos) {
  arrayMyGifos = JSON.parse(localStorage.getItem('MyGifs')) || [];

  if (arrayMyGifos[numberMyGifos + 12]) {
    showMoreMyGifos.classList.remove('none');
  } else {
    showMoreMyGifos.classList.add('none');
  }
}

showMoreMyGifos.addEventListener('click', function (event) {
  event.preventDefault();
  showMoreMyGifosFunction();
});

function showMoreMyGifosFunction() {
  numberMyGifos += 12;
  arrayMyGifosRender = myGifsInfo.slice(numberMyGifos, numberMyGifos + 12);
  arrayMyGifosRender.forEach(function (item) {
    return renderMyGifos(item, myGifos);
  });
  showMoreMyGifosButton(numberMyGifos);
}