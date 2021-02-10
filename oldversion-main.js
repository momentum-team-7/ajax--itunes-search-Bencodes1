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
        // console.log(data.results[2].artistName)
        elemExtract(data.results)
        })
};

// Takes full function returned from fetch request, returns array composed of
//  only the variables we might use
function elemExtract(array){
    for (object of array){
        let artistName0             =  object.artistName               
        let trackName1              =  object.trackName                
        let isStreamable2           =  object.isStreamable             
        let kind3                   =  object.kind                     
        let collectionName4         =  object.collectionName           
        let collectionCensoredName5 =  object.collectionCensoredName   
        let artworkUrl6             =  object.artworkUrl100            
        let artistViewUrl7          =  object.artistViewUrl            
        let previewUrl8             =  object.previewUrl              
        let collectionViewUrl9      =  object.collectionViewUrl;

        // console.log("New array for", trackName1 ) 

        // const array${object.trackId} = [
        const smallArray = [
            artistName0              , 
            trackName1               ,
            isStreamable2            ,
            kind3                    ,
            collectionName4          ,
            collectionCensoredName5  ,
            artworkUrl6              ,
            artistViewUrl7           ,
            previewUrl8              , 
            collectionViewUrl9       ];

        console.log(smallArray) 
        // construct div within this loop    
        renderResults(smallArray)
        }
    // return smallArray    
}


function renderResults(smallArray) {
    const mainEl = document.createElement('div')
    mainEl.className = 'song-card'
    mainEl.id = smallArray[1] //not sure if necessary
  
    const artistEl = document.createElement('h2')
    artistEl.innerText = smallArray[0]

    const trackEl = document.createElement('h3')
    trackEl.innerText = smallArray[1]

    const albumEl = document.createElement('h4')
    albumEl.innerText = smallArray[4]

    const albumImgEl = document.createElement('img')
    albumImgEl.src = smallArray[6]

    mainEl.appendChild(albumImgEl)
    mainEl.appendChild(artistEl)
    mainEl.appendChild(trackEl)
    mainEl.appendChild(albumEl)


    searchResults.appendChild(mainEl)
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


