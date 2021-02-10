const baseURL = 'https://itunes.apple.com/search?term='
const rootElement = document.querySelector('.container')
const form = document.querySelector('#search-form')

form.addEventListener('submit', e => { 
    e.preventDefault()
    // search("red hot chili peppers")
    let searchInput = document.querySelector(".search-input").value;
    search(searchInput)
    console.log(searchInput)
})

let searchInput = document.querySelector("#search-bar")
search(searchInput)

function search(searchInput){
    let fetchURL = baseURL + searchInput + "&entity=song"
    // let searchInput = document.querySelector(".search-input")
    console.log(fetchURL)
    fetch(fetchURL) 
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.results[2].artistName)
        })
        
};



// musicEl.classname = 'sample string'




// let testdivcreator = document.createElement("div")