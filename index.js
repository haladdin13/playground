const url = 'http://localhost:3000/flags'

fetch(url)
    .then((resp) => resp.json())
    .then((data) => renderFlags(data))

function renderFlags(flagArr) {
    console.log(flagArr)
    const table = document.querySelector('table')
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')
    table.append(thead, tbody)

    flagArr.forEach((flagObj) => {
        const th = document.createElement('th')
        const tr = document.createElement('tr')
        const img = document.createElement('img')

        let name = flagObj.name
        th.textContent = name

        let imgURL = flagObj.country
        img.src = imgURL
        img.style.margin = "3px"
        img.style.border = 'solid 1px'

        console.log(name)
        console.log(imgURL)

        table.append(thead, tbody)
        thead.append(th)
        tbody.append(tr)
        tr.append(img)

    })
}console.log(renderFlags)

const form = document.querySelector('form')
console.log(form)

/*let string = "the united states"
let trimString = string.trim()
console.log(trimString)
let stringReplace = trimString.replace(/\s+/g, '-')
console.log(stringReplace)*/

form.addEventListener('submit', (e) => addCountry(e))

function addCountry(e) {
    e.preventDefault()
    let name = e.target.name.value
    let modName = name.trim()
    let countryReturner = countryCodes.name[modName]
    let imgSrc = `./images/${countryReturner}.png`

    console.log(e.target.name.value)
    console.log(e.target.country.value)

    let newCountry = {
        name: e.target.name.value,
        country: e.target.country.value
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCountry) //sends to db.json
    })
        .then((resp) => resp.json())
        .then((data) => renderCharacters([data])) //creates an array with an object inside

}