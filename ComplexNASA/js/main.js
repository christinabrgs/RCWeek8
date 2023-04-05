//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
function returnPicture() {
    let date = document.querySelector('input').value
    url = `https://api.nasa.gov/planetary/apod?api_key=PBkQuPJ29buXEk2hpnaL06qpTmy59cdj8SzMKAhb&date=${date}&thumbs=true`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        // document.querySelector('source').src = url
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}


document.querySelector('button').addEventListener('click', returnPicture)

// 2023-03-26 video https://apilist.fun/