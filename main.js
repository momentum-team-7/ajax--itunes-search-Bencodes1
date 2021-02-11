const baseURL = 'https://itunes.apple.com/search?term='
const rootElement = document.querySelector('.container')
const form = document.querySelector('#search-form')
const searchResults = document.querySelector('.search-results')
// const player = document.querySelector('sample-player')

form.addEventListener('submit', e => { 
    e.preventDefault()
    clearResults()
    search()
})


// Fetch data from itunes API with search input from user
function search(){
    let searchInput = document.querySelector(".search-input").value;
    let fetchURL = baseURL + searchInput + "&entity=song&limit=10"
    fetch(fetchURL) 
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0].artistName)
        console.log(data.results)
        renderAll(data.results)
        })
    .catch(error => 
        catchError())    
};


function renderAll(array){
    for (object of array){

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

        
        let audioUrl            = object.previewUrl
        let samplePlayer        = document.createElement('div')
        samplePlayer.className  = 'play-button'
        samplePlayer.dataset.previewUrl = object.previewUrl
        samplePlayer.appendChild(playButtonEl)


        mainEl.appendChild(albumImgEl)
        mainEl.appendChild(trackEl)
        mainEl.appendChild(artistEl)
        mainEl.appendChild(albumEl)
        mainEl.appendChild(playButtonEl)
        mainEl.appendChild(samplePlayer)

        searchResults.appendChild(mainEl)

        playButtonEl.addEventListener('click', (event) => {
            playSample(event.target, audioUrl)
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

function playSample(button, audioUrl){
    let audio = document.querySelector('audio')
    console.log(audio)
    // audio.src = audioUrl
    audio.src = audioUrl
    console.log(audioUrl)
}

// default image (black square)
// src="https://v.dreamwidth.org/8585989/234887" 