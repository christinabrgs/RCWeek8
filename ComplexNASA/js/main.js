//The user will enter a date. Use that date to get the NASA info and grab the current weather from a weather API! https://api.nasa.gov/



function returnNasaInfoAndWeather() {
    url = `https://data.nasa.gov/resource/gvk9-iz74.json`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
       for(let i = 0; i < data.length; i++) {
            let lat = data[i].location.latitude
            let long = data[i].location.longitude
            let center = data[i].center
            let facility = data[i].facility
            let zipcode = data[i].zipcode 
            let city = data[i].city
            let country = data[i].country
            
            let information = `${center},${facility},${city},${zipcode},${country}`
            console.log(`${lat}, ${long}`)
       
            let locations = document.getElementById('listOfFacilities')
            let list = document.createElement('li')

            const textNode = document.createTextNode(information)
            list.appendChild(textNode)
            locations.appendChild(list)
            list.innerText = `${information}`

            let weatherUrl = `https://api.weatherapi.com/v1/current.json?key=6d099d6b303844d1954163416230404&q=${lat},${long}&aqi=no`
            
            fetch(weatherUrl)
            .then(res => res.json())
            .then(data2 => {
                console.log(data2)  

                list.innerText += `, ${data2.current.temp_f}`
            })
        }

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

returnNasaInfoAndWeather()