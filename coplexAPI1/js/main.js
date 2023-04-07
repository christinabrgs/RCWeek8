//The user will enter a date. Use that date to get the NASA info and grab the current weather from a weather API! https://api.nasa.gov/



function returnArticle() {
    article = document.querySelector('input').value
    url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${article}&api-key=uc3AbY7WE384BIEvDJQa14v8LXfAzcoz`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let abstract = data.response.docs[0].abstract
        let website = data.response.docs[0].web_url
        let para = data.response.docs[0].lead_paragraph
        let source = data.response.docs[0].source  
        let section = data.response.docs[0].section_name
        let subSection = data.response.docs[0].subsection_name

        let information = `${abstract}, ${website}, ${para}, ${source}`
        console.log(`${information}`)

        document.querySelector('p').innerText = `${information}`

        let search;
            if (!subSection) {
                search = section
            } else {search = subSection}

        let imgUrl = `https://api.unsplash.com/search/photos?client_id=6WQtUr_3dLP9Q2-fajgnELQPl33QYq-JsympkkF7gwo&page=1&query=${search}&per_page=1&order_by=relevant`
            
        fetch(imgUrl)
        .then(res => res.json())
        .then(data2 => {
            console.log(data2)

            document.querySelector('img').src = `${data2.results[0].urls.raw}`
        })
        

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

document.querySelector('button').addEventListener('click', returnArticle)






