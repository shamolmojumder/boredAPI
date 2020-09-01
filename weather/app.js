const button = document.querySelector('.button')
const inputValue = document.querySelector(".inputValue")
const display = document.querySelector(".display")
const name = document.querySelector(".name")
const desc = document.querySelector(".desc")
const temp = document.querySelector(".temp")
const wind = document.querySelector(".wind")
const country = document.querySelector(".country")

button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=ecd2d085fe185c58c2db07cca403381e')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const namevalue = data["name"];
            const tempValue = data['main']['temp']
            const descValue = data["weather"][0]["description"]
            const windValue = data['wind']['speed']
            const countryValue = data['sys']['country']

            name.innerHTML = namevalue;
            temp.innerHTML = tempValue
            desc.innerHTML = descValue;
            wind.innerHTML = 'wind speed is ' + windValue;
            country.innerHTML = countryValue


        })
        .catch(err => alert("wrong city name"))
})