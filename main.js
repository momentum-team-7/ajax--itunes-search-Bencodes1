const baseURL = 'https://itunes.apple.com/search?term='
const rootElement = document.querySelector('.container')
const form = document.querySelector('#search-form')
const searchResults = document.querySelector('.search-results')
const player = document.querySelector('sample-player')

form.addEventListener('submit', e => { 
    e.preventDefault()
    clearResults()
    search()
})

let searchInput = document.querySelector("#search-bar")

// Fetch data from itunes API with search input from user
function search(){
    let searchInput = document.querySelector(".search-input").value;
    let fetchURL = baseURL + searchInput + "&entity=song&limit=5"
    fetch(fetchURL) 
    .then(response => response.json())
    .then(data => {
        console.log(data.results[2].artistName)
        renderAll(data.results)
        })
    .catch(error => 
        catchError())    
};

// Takes full function returned from fetch request, returns array composed of
//  only the variables we might use
function renderAll(array){
    for (object of array){

//      Rendering section: 
        const mainEl = document.createElement('div')
        mainEl.className        = 'song-card'
        mainEl.id               = object.trackName //not sure if necessary

        const artistEl          = document.createElement('h2')
        artistEl.innerText      = object.artistName 

        const trackEl           = document.createElement('h3')
        trackEl.innerText       = object.trackName

        const albumEl           = document.createElement('h4')
        albumEl.innerText       = object.collectionName

        const albumImgEl        = document.createElement('img')
        albumImgEl.src          = object.artworkUrl100

        const playButtonEl      = document.createElement('button')
        playButtonEl.innerText  = "Play Sample"

        mainEl.appendChild(albumImgEl)
        mainEl.appendChild(trackEl)
        mainEl.appendChild(artistEl)
        mainEl.appendChild(albumEl)
        mainEl.appendChild(playButtonEl)

        searchResults.appendChild(mainEl)

        playButtonEl.addEventListener('click', (event) => {
            playSample(event.target)
        })
    };
}

function clearResults() {
    let mainElements = document.querySelectorAll('.song-card')
    for (let item of mainElements) {
        item.remove();
    };
}

function catchError(){
    const errorEl = document.createElement('div')
    errorEl.innerText = "No results found for this query"
    searchResults.appendChild(errorEl)
}

function playSample(button){
    let audioSample = document.querySelector('audio')
    console.log(audioSample)
    audioSample.src = button.parentElement.dataset.previewUrl
    console.log(button.parentElement.dataset.previewUrl)
}

// default image (black square)
// src="https://v.dreamwidth.org/8585989/234887" 