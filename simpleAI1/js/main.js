//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
function returnPicture() {

    url = `https://last-airbender-api.fly.dev/api/v1/characters/random`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data[0].name
        document.querySelector('img').src = data[0].photoUrl
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}


document.querySelector('button').addEventListener('click', returnPicture)

// 2023-03-26 video https://apilist.fun/

