const key = 'joFupoiQktQU0zTJUUPaAVM5zUgXIyWU';
let varMax = 'cp';

// Navbar sticky
const header = document.querySelector('header');
const searchNav = document.getElementById('searchNav');
const createGifo = document.getElementById('createGifo');

document.getElementById('searchNav').style.display = 'none';
window.onscroll = function() {
    let y = window.scrollY;
    if(y !== 0 && screen.width > 800) {
        header.classList.add('header-shadow');
        searchNav.style.display = 'flex';
        createGifo.style.display = 'none';
    } else {
        header.classList.remove('header-shadow');
        searchNav.style.display = 'none';
        createGifo.style.display = 'block';
    }
}

// Hovers
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const facebook = document.getElementById('facebook');
const twitter = document.getElementById('twitter');
const instagram = document.getElementById('instagram');

function hoverModoDiurno() {
    createGifo.addEventListener('mouseover', () => {createGifo.src = 'assets/CTA-crear-gifo-hover.svg'});
    createGifo.addEventListener('mouseout', () => {createGifo.src = 'assets/button-crear-gifo.svg'});
    
    prev.addEventListener('mouseover', () => {prev.src = 'assets/button-slider-left-hover.svg'});
    prev.addEventListener('mouseout', () => {prev.src = 'assets/button-slider-left.svg'});
    
    twitter.addEventListener('mouseover', () => {twitter.src = 'assets/icon-twitter-hover.svg'});
    twitter.addEventListener('mouseout', () => {twitter.src = 'assets/icon-twitter.svg'});
    
    facebook.addEventListener('mouseover', () => {facebook.src = 'assets/icon_facebook_hover.svg'});
    facebook.addEventListener('mouseout', () => {facebook.src = 'assets/icon_facebook.svg'});
    
    instagram.addEventListener('mouseover', () => {instagram.src = 'assets/icon_instagram-hover.svg'});
    instagram.addEventListener('mouseout', () => {instagram.src = 'assets/icon_instagram.svg'});
    
    next.addEventListener('mouseover', () => {next.src = 'assets/button-slider-right-hover.svg'});
    next.addEventListener('mouseout', () => {next.src = 'assets/Button-slider-right.svg'});    
}

function hoverModoNocturno() {
    createGifo.addEventListener('mouseover', () => {createGifo.src = 'assets/CTA-crear-gifo-hover-modo-noc.svg'});
    createGifo.addEventListener('mouseout', () => {createGifo.src = 'assets/CTA-crear-gifo-modo-noc.svg'});
    
    prev.addEventListener('mouseover', () => {prev.src = 'assets/button-slider-left-md-noct-hover.svg'});
    prev.addEventListener('mouseout', () => {prev.src = 'assets/button-slider-left-md-noct.svg'});
    
    twitter.addEventListener('mouseover', () => {twitter.src = 'assets/icon_twitter_noc.svg'});
    twitter.addEventListener('mouseout', () => {twitter.src = 'assets/icon-tw-normal.svg'});
    
    facebook.addEventListener('mouseover', () => {facebook.src = 'assets/icon_facebook_noc.svg'});
    facebook.addEventListener('mouseout', () => {facebook.src = 'assets/icon_facebook.svg'});
    
    instagram.addEventListener('mouseover', () => {instagram.src = 'assets/icon_instagram_noc.svg'});
    instagram.addEventListener('mouseout', () => {instagram.src = 'assets/icon_instagram.svg'});
    
    next.addEventListener('mouseover', () => {next.src = 'assets/button-slider-right-md-noct-hover.svg'});
    next.addEventListener('mouseout', () => {next.src = 'assets/button-slider-right-md-noct.svg'});
}

// Change mode
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.getElementById('changeModeDesktop');
const darkModeToggleMobile = document.getElementById('changeMode');

const estilos = document.getElementById('estilos');
const mobile = document.getElementById('mobile');
const desktop = document.getElementById('desktop');
const bars = document.getElementById('bars');
const times = document.getElementById('times');
const lupa = document.getElementById('lupa');
const changeModeDesktop = document.getElementById('changeModeDesktop');
const changeMode = document.getElementById('changeMode');
const closeImage = document.getElementById('closeImage');
const searchImageNav = document.getElementById('searchImageNav');
const camera = document.getElementById('camera');
const film = document.getElementById('film');
const closeGifo = document.getElementById('closeGifo');

const enableDarkMode = () => {
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
}

const disableDarkMode = () => {
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
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})

darkModeToggleMobile.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})

// Click logo
mobile.addEventListener('click', () => {
    window.location.reload();
})
desktop.addEventListener('click', () => {
    window.location.reload();
})

// Click favourites
const favouriteSection = document.getElementById('favourites');
const textHeader = document.getElementById('text-header');
const myGifosSection = document.getElementById('myGifos');
const createGifosSection = document.getElementById('createGifosSection');
const favouriteGifsDesktop = document.getElementById('favouriteGifsDesktop');
const favouriteGifs = document.getElementById('favouriteGifs');

// Click GIFOS
const gifos = document.getElementById('gifos');
gifos.addEventListener('click',myGifos);
const gifosDesktop = document.getElementById('gifosDesktop');
gifosDesktop.addEventListener('click',myGifos);

myGifosSection.style.display = 'none';

// Create gifo
const trending = document.getElementById('trending');

createGifo.addEventListener('click', () => {
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
    createGifo.addEventListener('mouseout', () => {createGifo.src = 'assets/CTA-crear-gifo-active.svg';});
})

let stream;
const video = document.getElementById('video');
const starting = document.getElementById('starting');
const recording = document.getElementById('recording');
const finishing = document.getElementById('finishing');
const timing = document.getElementById('timing');
const repeat = document.getElementById('repeat');
const uploading = document.getElementById('uploading');
const textInsideCreate = document.getElementById('textInsideCreate');
const textInsideCreateStepOne = document.getElementById('textInsideCreateStepOne');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const previewImage = document.getElementById('previewImage');

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
    stream = navigator.mediaDevices
    .getUserMedia( { audio: false, video:  true } )
    .then(async function(mediaStream) {
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
    })
    .then(setTimeout(function() { stepTwo()}, 3000))
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
        onGifRecordingStarted: function() {
        console.log('recording started');
    },
    });
    recorder.startRecording();
    recording.style.display = 'none';
    finishing.style.display = 'flex';
    timing.style.display = 'flex';
}

seconds = 0;
minutes = 0;
hours = 0;
let t;
function addTheChronometer() {
    seconds++;
    if(seconds >= 60) {
        seconds = 0;
        minutes++;
        if(minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    timing.textContent =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
    (seconds > 9 ? seconds : "0" + seconds);
    timer();
}

const timer = () => t = setTimeout(addTheChronometer, 1000);

function finalize() {
    finishing.style.display = 'none';
    timing.style.display = 'none';
    repeat.style.display = 'flex';
    uploading.style.display = 'flex';
    clearTimeout(t);
    timing.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
    recorder.stopRecording();
    blob = recorder.getBlob();
    let urlCreator = window.URL || window.webkitURL;
    let imageURL = urlCreator.createObjectURL(blob);
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

    let containerVideo = document.getElementById('containerVideo');
    let cardLoad = document.createElement('div');

    cardLoad.id = 'videoCardLoading';
    cardLoad.className = 'video-card';
    cardLoad.innerHTML = `<img class="loader" src="assets/loader.svg" alt="loader"><br>
                          <h3 class="uploading-title">Estamos subiendo tu GIFO</h3>`;
    containerVideo.appendChild(cardLoad);
    stream.getTracks().forEach(function(track) {
        track.stop();
    });
    const form = new FormData();
    form.append("file", blob, "myGif.gif");
    form.append("tags", "gif, person, funny");
    fetch(`https://upload.giphy.com/v1/gifs?api_key=${key}`, {
        method: "POST",
        body: form,
    })
    .then(response =>response.json())
    .then(response => saveMyGifo(response.data.id))
}

const saveMyGifo = async (id) => {
    const cardLoad = document.getElementById('videoCardLoading');

    cardLoad.innerHTML =    `<img class="success" src="assets/ok.svg" alt="loader"><br>
                            <h3 class="success-title">GIFO subido con éxito</h3>
                            <figure id="figDownloadCamera" class="fig-download">
                                <img id="imgDownloadCamera" class="download" src="assets/icon-download-hover.svg" alt="loader">
                            </figure>
                            <a id="link" target="_blank">
                                <img class="link" src="assets/icon-link-hover.svg" alt="loader">
                            </a>`;

    const figDownloadCamera = document.getElementById('figDownloadCamera');
    const imgDownloadCamera = document.getElementById('imgDownloadCamera');
    const resp = await searchId(id);
    const objInfo = getInfoMyGifos(resp.data);
    imgDownloadCamera.addEventListener('click', async ()  => {
        downloadGif(objInfo, figDownloadCamera);
    })
    const link = document.getElementById('link');
    link.href = resp.data.url;
    url = `https://api.giphy.com/v1/gifs/${id}?api_key=${key}`;
    fetch(url)
    .then(response =>response.json())
    .then(gif => addGifToMyList(gif.data))
}

const addGifToMyList = (gif) => {
    const myGifoList = JSON.parse(localStorage.getItem("MyGifs")) || [];
    localStorage.setItem("MyGifs", JSON.stringify(myGifoList.concat(gif.id)));
}

// API autocomplete
const searchActive = document.getElementById('searchActive');
const input = document.getElementById('searchText');
const inputNav = document.getElementById('searchTextNav');

input.addEventListener('keyup', event => getSuggestions(event));

async function getSuggestions(event) {
    if (input.value !== '') {
        closeImage.style.display = 'block';
        lupa.style.display = 'none';
        searchActive.style.display = 'block';
    } else {
        closeImage.style.display = 'none';
        lupa.style.display = 'none';
        searchActive.style.display = 'none';
    }
    try{
        const response = await fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=${key}&q=${input.value.toLowerCase()}`);
        const arraySuggestions = await response.json();
        if(event.key !== 'Enter') {
            renderSuggestions(arraySuggestions.data);
        }
    } catch(reason) {
        return reason;
    }
}

const listAutocomplete = document.getElementById('listAutocomplete');

function renderSuggestions(array) {
    listAutocomplete.innerHTML = '';
    if(array[0]) {
        listAutocomplete.innerHTML = `<li class="dividing-line"></li>`;
    } else {
        listAutocomplete.innerHTML = '';
    }
    array.forEach(element => {
        const item = document.createElement('li');
        item.classList.add('suggestions');
        item.innerHTML = `<img class="search-suggestions" src="assets/icon-search-grey.svg" alt="">${element.name}`;
        listAutocomplete.classList.add('listAutocomplete');
        listAutocomplete.appendChild(item);
    })
    clickSuggestion();
}

let number;
const results = document.getElementById('list');
const noResult = document.getElementById('noResult');

function clickSuggestion() {
    const selection = document.querySelectorAll('.suggestions');
    selection.forEach( li => li.addEventListener('click', (event) => {
        number = 0;
        let wordSelected = event.target.innerText;
        input.value = wordSelected;
        listAutocomplete.innerHTML = '';
        search(wordSelected);
        results.innerHTML = '';
        noResult.innerHTML = '';
    }))
}

input.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        listAutocomplete.innerHTML = '';
        number = 0;
        search(input.value);
        results.innerHTML = '';
        noResult.innerHTML = '';
    }
})
searchActive.addEventListener('click', () => {
    number = 0;
    listAutocomplete.innerHTML = '';
    search(input.value);
    results.innerHTML = '';
    noResult.innerHTML = '';
})

inputNav.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        number = 0;
        search(inputNav.value);
        results.innerHTML = '';
        noResult.innerHTML = '';
    }
})
searchImageNav.addEventListener('click', () => {
    number = 0;
    search(inputNav.value);
    results.innerHTML = '';
    noResult.innerHTML = '';
})

// Delete query
closeImage.addEventListener('click', () => {
    input.value = '';
    listAutocomplete.innerHTML = '';
    closeImage.style.display = 'none';
    lupa.style.display = 'block';
    searchActive.style.display = 'none';
})

//API Search
const resultLine = document.getElementById('resultLine');

function renderResult(result, globalContainer) {
    const container = document.createElement('div');
    const card = document.createElement('img');
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
    if(arrayFavs.some(item => item.id === result.id)) {
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
    if(screen.width < 768) {
        card.addEventListener('click', () => {
            maxGif(result);
        })
    } else {
        const figMax = document.createElement('figure');
        const imgMax = document.createElement('img');
        const figDownload = document.createElement('figure');
        const imgDownload = document.createElement('img');
        const figFav = document.createElement('figure');
        const imgFav = document.createElement('img');
        const user = document.createElement('p');
        const title = document.createElement('p');
        const containerElements = document.createElement('div');
        const buttonsH = document.createElement('div');
        const utH = document.createElement('div');
        const elemH = document.createElement('div');
        user.textContent = result.user || 'User';
        title.textContent = result.title;
        const id = result.id;
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
        container.addEventListener('mouseover', () => mouseinContainer(containerElements, card));
        container.addEventListener('mouseout', () => mouseoutContainer(containerElements, card));
        figFav.addEventListener('click', () => favouritesFunction(result, imgFav, figFav));
        paintedHeart(result, imgFav, figFav);
        imgDownload.addEventListener('click', () => downloadGif(result, figDownload));
        figMax.addEventListener('click', () => maxGif(result));
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

function firstUppercase(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getInfo(element, object, container) {
    const infoGif = {
        url: object.data[element].images.original.url,
        user: object.data[element].username,
        title: object.data[element].title,
        id: object.data[element].id
    }
    renderResult(infoGif, container);
    return infoGif;
}

function search(word) {
    resultLine.style.display = 'flex';
    searchActive.style.display = 'none';
    searchTitle.textContent = firstUppercase(word);
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${word.toLowerCase()}&offset=${number}&limit=12`)
    .then(resp => resp.json())
    .then(object => {
        if(number === 0 && object.data.length == 0) {
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
            const min = Math.min(object.data.length, 12);
            createArraySearch(object, min);
            showMore(word);
        }
    })
    .catch(error => console.error(error));
}

function createArraySearch(object, min) {
    const indexes = Array.from(Array(min).keys());
    indexes.map(element => getInfo(element, object, results));
}

const showMoreButton = document.getElementById('showMore');

async function showMore(word) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${word.toLowerCase()}&offset=${number + 12}`);
        const result = await response.json();
        if(result.data[0]) {
            showMoreButton.style.display = 'block';
        } else {
            showMoreButton.style.display = 'none';
        }
        return result;
    } catch(reason) {
        return reason;
    }
}

const searchTitle = document.getElementById('searchTitle');

showMoreButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(input.value === '') {
        number += 12;
        showMore(searchTitle.innerText);
        search(searchTitle.innerText);
    } else {
        number += 12;
        showMore(input.value);
        search(input.value);
    }
})

const figOuch = document.createElement('figure');
const imgOuch = document.createElement('img');
const captionOuch = document.createElement('figcaption');
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
}

// Download button
async function downloadGif(item, container) {
    try{
        const a = document.createElement('a');
        let response = await fetch(item.url);
        let file = await response.blob();
        a.download = item.title;
        a.href = window.URL.createObjectURL(file);
        a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
        container.appendChild(a);
        a.click();
    } catch(reason) {
        return reason;
    }
}

// Max Gif
const nav = document.getElementById('navbar');
const trendingGifos = document.getElementById('trending');
const footer = document.querySelector('footer');
const maxGifo = document.getElementById('maxGifo');

function maxGif(result) {
    const gifoMax = document.createElement('img');
    const userMax = document.createElement('p');
    const titleMax = document.createElement('p');
    const figFavMax = document.createElement('figure');
    const imgFavMax = document.createElement('img');
    const figDownloadMax = document.createElement('figure');
    const imgDownloadMax = document.createElement('img');
    const containerMax = document.createElement('div');
    const buttons = document.createElement('div');
    const ut = document.createElement('div');
    const elem = document.createElement('div');
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
    figFavMax.addEventListener('click', () => favouritesFunction(result, imgFavMax, figFavMax));
    paintedHeart(result, imgFavMax, figFavMax);
    imgDownloadMax.addEventListener('click', () => downloadGif(result, figDownloadMax));
}

closeGifo.addEventListener('click', () => closeGif())

function closeGif() {
    const containerMax = document.querySelector('.container-max');
    containerMax.remove();
    header.classList.remove('none');
    maxGifo.style.display = 'none';
    nav.style.display = 'flex';
    footer.classList.remove('none');
    results.classList.remove('none');
    trendingGifos.style.display = 'block';
    if(varMax === 'cp') {
        textHeader.style.display = 'flex';
    } else if(varMax === 'fav') {
        favouriteSection.style.display = 'block';
    } else if(varMax === 'mg') {
        myGifosSection.style.display = 'block';
        myGifs = JSON.parse(localStorage.getItem('MyGifs')) || []
            if(myGifs.length === 0) {
                gifosSinContenido.classList.remove('none')
            }
    }
}

// API trending - carousell
trendings();

function trendings() {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}`)
    .then(resp => resp.json())
    .then(object => createArray(object))
    .catch(error => console.error(error));
}

const carousel = document.getElementById('carousel');
const nCarousel = 20;

function createArray(object) {
    const indexes = Array.from(Array(nCarousel).keys());
    indexes.map(element => {
        getInfo(element, object, carousel);
    })
}

let position = 0;
let width = 26.74;
let count = 1;

let listElems = carousel.querySelectorAll('container');

prev.addEventListener('click', () => {
    position = Math.min(position + width * count, 0);
    carousel.style.marginLeft = position + 'vw';
})

next.addEventListener('click', () => {
    position = Math.max(position - width * count, width * (listElems.length - (nCarousel - 3)));
    carousel.style.marginLeft = position + 'vw';
})

// API trending terms
// CON ESTA FUNCIÓN PONGO LA PRIMERA LETRA EN MAYÚSCULA
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1)
}

async function listTrendingWords() {
    const response = await fetch(`https://api.giphy.com/v1/trending/searches?api_key=${key}`);
    const results = await response.json();
    const trendingFive = results.data.splice(0,5);

    // LE PONGO MAYÚSCULA A LA PRIMERA LETRA DE LA PALABRA
    let capitalizedTrendingFive = []
    trendingFive.forEach(element => {
        capitalizedTrendingFive = capitalizedTrendingFive + ',' + capitalize(element)
    });

    let capitalizedTrendingWords = [];
    capitalizedTrendingWords = capitalizedTrendingFive.slice(1);

    let capitalizedTrendingFiveSplit = [];
    capitalizedTrendingFiveSplit = capitalizedTrendingWords.split(',')
    
    const trending1 = document.createElement('p');
    trending1.innerText = capitalizedTrendingFiveSplit[0] + ', '
    trending1.className = 'trendingWord';
    
    const trending2 = document.createElement('p');
    trending2.innerText = capitalizedTrendingFiveSplit[1] + ', '
    trending2.className = 'trendingWord';

    const trending3 = document.createElement('p');
    trending3.innerText = capitalizedTrendingFiveSplit[2] + ', '
    trending3.className = 'trendingWord';

    const trending4 = document.createElement('p');
    trending4.innerText = capitalizedTrendingFiveSplit[3] + ', '
    trending4.className = 'trendingWord';
    
    const trending5 = document.createElement('p');
    trending5.innerText = capitalizedTrendingFiveSplit[4]
    trending5.className = 'trendingWord';
    
    const title = document.getElementById('wordList');
    title.appendChild(trending1);
    title.appendChild(trending2);
    title.appendChild(trending3);
    title.appendChild(trending4);
    title.appendChild(trending5);

    trending1.addEventListener('click', (event) => {
        results.innerHTML = '';
        input.value = '';
        const word = event.target.textContent.slice(0, -2);
        number = 0;
        searchTitle.textContent = firstUppercase(word);
        search(word);
    })

    trending2.addEventListener('click', (event) => {
        results.innerHTML = '';
        input.value = '';
        const word = event.target.textContent.slice(0, -2);
        number = 0;
        searchTitle.textContent = firstUppercase(word);
        search(word);
    })

    trending3.addEventListener('click', (event) => {
        results.innerHTML = '';
        input.value = '';
        const word = event.target.textContent.slice(0, -2);
        number = 0;
        searchTitle.textContent = firstUppercase(word);
        search(word);
    })

    trending4.addEventListener('click', (event) => {
        results.innerHTML = '';
        input.value = '';
        const word = event.target.textContent.slice(0, -2);
        number = 0;
        searchTitle.textContent = firstUppercase(word);
        search(word);
    })

    trending5.addEventListener('click', (event) => {
        results.innerHTML = '';
        input.value = '';
        const word = event.target.textContent.slice(0, -2);
        number = 0;
        searchTitle.textContent = firstUppercase(word);
        search(word);
    })

    function firstUppercase(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

listTrendingWords();

// Section Favourites
let numberFav;
const showMoreFav = document.getElementById('seeMore');

function showMoreFavButton(numberFav) {
    arrayFavs = JSON.parse(localStorage.getItem('FavouritesList')) || [];
    if(arrayFavs[numberFav + 12]) {
        showMoreFav.classList.remove('none');
    } else {
        showMoreFav.classList.add('none');
    }
}

showMoreFav.addEventListener('click', (event) => {
    event.preventDefault();
    showMoreFavFunction();
})

function showMoreFavFunction() {
    arrayFavs = JSON.parse(localStorage.getItem('FavouritesList')) || [];
    numberFav += 12;
    arrayFavsRender = arrayFavs.slice(numberFav, numberFav + 12);
    arrayFavsRender.forEach(item => renderResult(item, favoritosConContenido));
    showMoreFavButton(numberFav);
}

let arrayFavs = [];

function favouritesFunction(result, imgFav, figFav) {
    arrayFavs = JSON.parse(localStorage.getItem('FavouritesList')) || [];
    favoritosConContenido.innerHTML = '';
    if(arrayFavs.some(item => item.id === result.id)) {
        arrayFavs = arrayFavs.filter(item => item.id !== result.id);
        localStorage.setItem('FavouritesList', JSON.stringify(arrayFavs));
        imgFav.src = 'assets/icon-fav-hover.svg';
        imgFav.classList = 'img-fav-gif';
        figFav.classList.remove('fig-fav-active');
        figFav.classList.add('fig-fav');
        let arrayFavsRender = arrayFavs.slice(0, 12);
        numberFav = 0;
        arrayFavsRender.forEach(item => renderResult(item, favoritosConContenido));
        showMoreFavButton(numberFav);
    } else {
        arrayFavs = arrayFavs.concat(result);
        localStorage.setItem('FavouritesList', JSON.stringify(arrayFavs));
        imgFav.src = 'assets/icon-fav-active.svg';
        imgFav.classList = 'img-fav-active';
        figFav.classList.add('fig-fav-active');
        figFav.classList.remove('fig-fav');
        let arrayFavsRender = arrayFavs.slice(0, 12);
        numberFav = 0;
        arrayFavsRender.forEach(item => renderResult(item, favoritosConContenido));
        showMoreFavButton(numberFav);
    }
}

const favoritosSinContenido = document.getElementById('favoritosSinContenido');
const favoritosConContenido = document.getElementById('favoritosConContenido');

favouriteGifsDesktop.addEventListener('click', () => {
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
    if(arrayFavs.length === 0) {
        favoritosSinContenido.style.display = 'block';
        favoritosConContenido.style.display = 'none';
    } else {
        favoritosConContenido.style.display = 'grid';
        let arrayFavsRender = arrayFavs.slice(0, 12);
        numberFav = 0;
        arrayFavsRender.forEach(item => renderResult(item, favoritosConContenido));
        showMoreFavButton(numberFav);
    }
})

favouriteGifs.addEventListener('click', () => {
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
    if(arrayFavs.length === 0) {
        favoritosSinContenido.style.display = 'block';
        favoritosConContenido.style.display = 'none';
    } else {
        favoritosConContenido.style.display = 'grid';
        let arrayFavsRender = arrayFavs.slice(0, 12);
        numberFav = 0;
        arrayFavsRender.forEach(item => renderResult(item, favoritosConContenido));
        showMoreFavButton(numberFav);
    }
})

// Section MyGifos
let numberMyGifos;
const gifosConContenido = document.getElementById('gifosConContenido');
const gifosSinContenido = document.getElementById('gifosSinContenido');
let myGifsInfo = [];

gifosDesktop.addEventListener('click', async () => {
    myGifsInfo = [];
    let myGifs = [];
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
    if(myGifs.length === 0) {
        gifosSinContenido.style.display = 'block';
        gifosConContenido.classList.add('none');
        showMoreMyGifos.style.display = 'none';
    } else {
        gifosSinContenido.style.display = 'none';
        gifosConContenido.classList.remove('none');
        showMoreMyGifos.classList.remove('none');
        for(const iterator of myGifs) {
            let resp = await searchId(iterator);
            myGifsInfo = myGifsInfo.concat(resp.data);
        }
        myGifsInfo = myGifsInfo.map(object => getInfoMyGifos(object));
        let arrayMyGifosRender = myGifsInfo.slice(0, 12);
        numberMyGifos = 0;
        arrayMyGifosRender.forEach(item => renderMyGifos(item, gifosConContenido));
        showMoreMyGifosButton(numberMyGifos);
    }
})

gifos.addEventListener('click', async () => {
    myGifsInfo = [];
    let myGifs = [];
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
    if(myGifs.length === 0) {
        gifosSinContenido.style.display = 'block';
        gifosConContenido.classList.add('none');
        showMoreMyGifos.style.display = 'none';
    } else {
        gifosSinContenido.style.display = 'none';
        gifosConContenido.classList.remove('none');
        showMoreMyGifos.classList.remove('none');
        for(const iterator of myGifs) {
            let resp = await searchId(iterator);
            myGifsInfo = myGifsInfo.concat(resp.data);
        }
        myGifsInfo = myGifsInfo.map(object => getInfoMyGifos(object));
        let arrayMyGifosRender = myGifsInfo.slice(0, 12);
        numberMyGifos = 0;
        arrayMyGifosRender.forEach(item => renderMyGifos(item, gifosConContenido));
        showMoreMyGifosButton(numberMyGifos);
    }
})

function renderMyGifos(result, globalContainer) {
    const container = document.createElement('div');
    const card = document.createElement('img');
    card.src = result.url;
    card.alt = result.title;
    card.classList.add('card-gif');
    container.classList.add('container');
    container.appendChild(card);
    globalContainer.appendChild(container);
    addElementsMyGifos(result, container, card);
}

function addElementsMyGifos(result, container, card) {
    if(screen.width < 768) {
        card.addEventListener('click', () => {
            maxGifMyGifos(result);
        })
    } else {
        const figMax = document.createElement('figure');
        const imgMax = document.createElement('img');
        const figDownload = document.createElement('figure');
        const imgDownload = document.createElement('img');
        const figTrash = document.createElement('figure');
        const imgTrash = document.createElement('img');
        const user = document.createElement('p');
        const title = document.createElement('p');
        const containerElements = document.createElement('div');
        user.textContent = result.user || 'User';
        title.textContent = result.title;
        const id = result.id;
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
        const buttonsH = document.createElement('div');
        const utH = document.createElement('div');
        const elemH = document.createElement('div');
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
        container.addEventListener('mouseover', () => mouseinContainer(containerElements, card));
        container.addEventListener('mouseout', () => mouseoutContainer(containerElements, card)),
        figTrash.addEventListener('click', () => {
            deleteGif(id, container);
            myGifs = JSON.parse(localStorage.getItem('MyGifs')) || [];
            if(myGifs.length === 0) {
                gifosSinContenido.classList.remove('none');
            }
        })
        imgDownload.addEventListener('click', () => downloadGif(result, figDownload));
        figMax.addEventListener('click', () => maxGifMyGifos(result, container));
    }
}

function maxGifMyGifos(result, container) {
    const gifoMax = document.createElement('img');
    const userMax = document.createElement('p');
    const titleMax = document.createElement('p');
    const figTrashMax = document.createElement('figure');
    const imgTrashMax = document.createElement('img');
    const figDownloadMax = document.createElement('figure');
    const imgDownloadMax = document.createElement('img');
    const containerMax = document.createElement('div');
    const buttons = document.createElement('div');
    const ut = document.createElement('div');
    const elem = document.createElement('div');
    const id = result.id;
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
    figTrashMax.addEventListener('click', () => deleteGif(id, container));
    imgDownloadMax.addEventListener('click', () => downloadGif(result, figDownloadMax));
}

function getInfoMyGifos(object) {
    const infoGif = {
        url: object.images.original.url,
        user: object.username,
        title: object.title,
        id: object.id
    }
    return infoGif;
}

async function searchId(id) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${key}`)
        const result = await response.json()
        return result
    } catch(reason) {
        return reason
    }
}

function deleteGif(id, container) {
    container.remove();
    let createdGifs = JSON.parse(localStorage.getItem('MyGifs'));
    createdGifs = createdGifs.filter(item => item !== id);
    localStorage.setItem('MyGifs', JSON.stringify(createdGifs));
    window.location.reload();
}

const showMoreMyGifos = document.getElementById('seeMore2');

function showMoreMyGifosButton(numberMyGifos) {
    arrayMyGifos = JSON.parse(localStorage.getItem('MyGifs')) || [];
    if(arrayMyGifos[numberMyGifos + 12]) {
        showMoreMyGifos.classList.remove('none');
    } else {
        showMoreMyGifos.classList.add('none');
    }
}

showMoreMyGifos.addEventListener('click', (event) => {
    event.preventDefault();
    showMoreMyGifosFunction();
})
function showMoreMyGifosFunction() {
    numberMyGifos += 12;
    arrayMyGifosRender = myGifsInfo.slice(numberMyGifos, numberMyGifos + 12);
    arrayMyGifosRender.forEach(item => renderMyGifos(item, myGifos));
    showMoreMyGifosButton(numberMyGifos);
}