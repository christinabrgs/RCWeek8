//The user will enter a date. Use that date to get the NASA info and grab the current weather from a weather API! https://api.nasa.gov/



function ifYoureBored() {
    boredContainer = document.querySelector('p')
    url = `https://www.boredapi.com/api/activity`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let suggestion = data.activity

        console.log(`${suggestion}`)

        boredContainer.innerText = `${suggestion}`


        let vidUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDZlvnS-pg4z73z5xjhH3mm-RtxYJVuBHI&type=video&order=viewCount&order=relevance&q=${suggestion}`
            
        fetch(vidUrl)
        .then(res => res.json())
        .then(data2 => {
            console.log(data2)
            console.log(data2.items[0].id.videoId)
            document.querySelector('.video-one').src = `https://www.youtube.com/embed/${data2.items[0].id.videoId}`
            document.querySelector('.video-two').src = `https://www.youtube.com/embed/${data2.items[1].id.videoId}`
            
        })
        

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}


ifYoureBored()




// https://www.youtube.com/watch?v=${videoId}
