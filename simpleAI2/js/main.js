//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
function returnPicture() {
    let dish = document.querySelector('input').value
    url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=a1886413ce994546ad96147bae31c191&query=${dish}&addRecipeInformation=true&number=1`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.results[0].title
        document.querySelector('img').src = data.results[0].image
        // document.querySelector('h3').innerText = data.results[0].summary
        document.querySelector('a').href = data.results[0].sourceUrl
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}


document.querySelector('button').addEventListener('click', returnPicture)

// 2023-03-26 video https://apilist.fun/