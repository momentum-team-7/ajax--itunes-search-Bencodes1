const baseURL = 'https://proxy-itunes-api.glitch.me/search?term='
const form = document.querySelector('#search-form')
const searchResults = document.querySelector('.search-results')
// const player = document.querySelector('sample-player')


// Add event listener to "submit" function on search
form.addEventListener('submit', e => { 
    e.preventDefault()
    clearResults()
    search()
})


// Fetch data from itunes API with search input from user
function search(){
    let searchInput = document.querySelector(".search-input").value;
    let fetchURL = baseURL + searchInput + "&entity=song&limit=24"
    fetch(fetchURL) 
    .then(response => response.json())
    .then(data => {
        if (data.results.length > 0){
            renderAll(data.results)
            console.log("results valid")
        }
        else {
            console.log("results invalid")
            catchInputError()
        }
        })
    .catch(error => 
        catchFetchError()) 
};

// Renders results from search onto the page
function renderAll(array){
    for (object of array){

        const mainEl = document.createElement('div')
        mainEl.className        = 'song-card'

        const artistEl          = document.createElement('h2')
        artistEl.innerText      = object.artistName 

        const trackEl           = document.createElement('h3')
        trackEl.innerText       = object.trackName

        const albumEl           = document.createElement('h4')
        albumEl.innerText       = object.collectionName

        const albumImgEl        = document.createElement('img')
        albumImgEl.src          = object.artworkUrl100
        albumImgEl.title        = "Album: " + object.collectionName
        console.log(albumImgEl)

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
        // mainEl.appendChild(albumEl)
        mainEl.appendChild(playButtonEl)
        // mainEl.appendChild(samplePlayer)

        searchResults.appendChild(mainEl)

        playButtonEl.addEventListener('click', (event) => {
            playSample(event.target, audioUrl)
        })
    };
}

// Clears prior search results if new search input is entered
function clearResults() {
    let mainElements = document.querySelectorAll('.song-card')
    for (let item of mainElements) {
        item.remove();
    };
}

// Displays input error message
function catchInputError(){
    const inputErrorEl = document.createElement('div')
    inputErrorEl.innerText = "No results found for this query"
    searchResults.appendChild(inputErrorEl)
}

// Displays fetch error message
function catchFetchError(){
    const fetchErrorEl = document.createElement('div')
    fetchErrorEl.innerText = "Server Error- try again soon!"
    searchResults.appendChild(fetchErrorEl)
}

// Updates .m4a link for audio player to play
function playSample(button, audioUrl){
    let audio = document.querySelector('audio')
    console.log(audio)
    audio.src = audioUrl
    console.log(audioUrl)
}

