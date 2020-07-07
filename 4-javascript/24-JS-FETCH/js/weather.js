async function weather (keyWord) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+keyWord+'&APPID=d05af9477b0f46101352d52dfb650f46'
    let response = await fetch(url)
    let resultData = await response.json()
    //console.log(resultData.weather[0].main)
    console.log(resultData)
}
weather('Hamburg')