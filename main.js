const baseURL = 'https://itunes.apple.com/search?term='
const rootElement = document.querySelector('.container')
const form = document.querySelector('#search-form')

form.addEventListener('submit', e => { 
    e.preventDefault()
    let searchInput = document.querySelector(".search-input").value;
    search(searchInput)
})

let searchInput = document.querySelector("#search-bar")
search(searchInput)

function search(searchInput){
    let fetchURL = baseURL + searchInput + "&entity=song"
    fetch(fetchURL) 
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        console.log(data.results[2].artistName)
        resultsTemp(data.results)
        })
};

function resultsTemp(array){
    for (object of array){


        // elements (delete when done)
        console.log(
            object.artistName,              "\n", 
            object.trackName,               "\n", 
            object.isStreamable,            "\n", 
            object.kind,                    "\n", 
            object.collectionName,          "\n", 
            object.collectionCensoredName,  "\n", 
            object.artworkUrl100,           "\n", 
            object.artistViewUrl,           "\n", 
            object.previewUrl,              "\n", 
            object.collectionViewUrl            );


        // making variables in case i need them
        let artistName             =  object.artistName               
        let trackName              =  object.trackName                
        let isStreamable           =  object.isStreamable             
        let kind                   =  object.kind                     
        let collectionName         =  object.collectionName           
        let collectionCensoredName =  object.collectionCensoredName   
        let artworkUrl100          =  object.artworkUrl100            
        let artistViewUrl          =  object.artistViewUrl            
        let previewUrl             =  object.previewUrl              
        let collectionViewUrl      =  object.collectionViewUrl;

        console.log("New array for ", trackName ) 
        const arrayTest = [
            artistName            , 
            trackName             ,
            isStreamable          ,
            kind                  ,
            collectionName        ,
            collectionCensoredName,
            artworkUrl100         ,
            artistViewUrl         ,
            previewUrl            ,
            collectionViewUrl     ];

        // const array${object.trackId} = [
                

        }
}





// musicEl.classname = 'sample string'




// let testdivcreator = document.createElement("div")