const baseURL = 'https://proxy-itunes-api.glitch.me/search?term='
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
    let fetchURL = baseURL + searchInput + "&entity=song&limit=25"
    fetch(fetchURL) 
    .then(response => response.json())
    .then(data => {
        if (data.results.length > 0){
            renderAll(data.results)
            console.log("what the heck man")
        }
        else {
            console.log("Input check running")
            catchInputError()
        }
        })
    .catch(error => 
        catchFetchError()) 
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
        // mainEl.appendChild(samplePlayer)

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

function catchInputError(){
    const inputErrorEl = document.createElement('div')
    inputErrorEl.innerText = "No results found for this query"
    searchResults.appendChild(inputErrorEl)
}


function catchFetchError(){
    const fetchErrorEl = document.createElement('div')
    fetchErrorEl.innerText = "Server Error- try again soon!"
    searchResults.appendChild(fetchErrorEl)
}


function playSample(button, audioUrl){
    let audio = document.querySelector('audio')
    console.log(audio)
    audio.src = audioUrl
    console.log(audioUrl)
}

// default image (black square)
// src="https://v.dreamwidth.org/8585989/234887" 