//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
function returnPicture() {
    let city = document.querySelector('#city').value
    let country = document.querySelector('#country').value
    url = `https://api.weatherapi.com/v1/current.json?key=6d099d6b303844d1954163416230404&q=${city},${country}&aqi=no`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)   
        document.querySelector('.condition').innerText = data.current.condition.text
        document.querySelector('img').src = `https:${data.current.condition.icon}`
        document.querySelector('.temp').innerText = `${data.current.temp_f}`
        document.querySelector('.feelslike').innerText = `${data.current.feelslike_f}`
    })  
    .catch(err => {
        console.log(`error ${err}`)
    })
}


document.querySelector('button').addEventListener('click', returnPicture)

// 2023-03-26 video https://apilist.fun/