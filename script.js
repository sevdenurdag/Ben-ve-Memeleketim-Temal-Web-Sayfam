const url = 'http://api.openweathermap.org/data/2.5/'
const key = 'c603be35b428baaaf0ae619013455c1d'

const setQuery = (e) => {
    if (e.keyCod == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = '${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr'
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = '${result.name},${result.sys.country}'
    let temp = document.querySelector('.temp')
    temp.innerText = '${result.main.temp}'
    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].descreption
    let minmax = document.querySelector('.minmax')
    minmax.innerText = '${result.main.temp_min}/${result.main.temp_max}'
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)