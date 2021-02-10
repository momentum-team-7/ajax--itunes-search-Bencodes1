const baseURL = 'https://itunes.apple.com/search?term='
const rootElement = document.querySelector('.container')
const form = document.querySelector('#search-form')
const searchResults = document.querySelector('.search-results')

form.addEventListener('submit', e => { 
    e.preventDefault()
    let searchInput = document.querySelector(".search-input").value;
    search(searchInput)
})


let searchInput = document.querySelector("#search-bar")
search(searchInput)

// Fetch data from itunes API with search input from user
function search(searchInput){
    let fetchURL = baseURL + searchInput + "&entity=song"
    fetch(fetchURL) 
    .then(response => response.json())
    .then(data => {
        console.log(data.results[2].artistName)
        renderAll(data.results)
        })
};

// Takes full function returned from fetch request, returns array composed of
//  only the variables we might use
function renderAll(array){
    for (object of array){

//      Rendering section: 
        const mainEl = document.createElement('div')
        mainEl.className    = 'song-card'
        mainEl.id           = object.trackName //not sure if necessary

        const artistEl      = document.createElement('h2')
        artistEl.innerText  = object.artistName 

        const trackEl       = document.createElement('h3')
        trackEl.innerText   = object.trackName

        const albumEl       = document.createElement('h4')
        albumEl.innerText   = object.collectionName

        const albumImgEl    = document.createElement('img')
        albumImgEl.src      = object.artworkUrl100

        mainEl.appendChild(albumImgEl)
        mainEl.appendChild(trackEl)
        mainEl.appendChild(artistEl)
        mainEl.appendChild(albumEl)

        searchResults.appendChild(mainEl)
    }
}



// musicEl.classname = 'sample string'

// let testdivcreator = document.createElement("div")



        // elements (delete when done)
        // console.log(
        //     object.artistName,              "\n", 
        //     object.trackName,               "\n", 
        //     object.isStreamable,            "\n", 
        //     object.kind,                    "\n", 
        //     object.collectionName,          "\n", 
        //     object.collectionCensoredName,  "\n", 
        //     object.artworkUrl100,           "\n", 
        //     object.artistViewUrl,           "\n", 
        //     object.previewUrl,              "\n", 
        //     object.collectionViewUrl            );
