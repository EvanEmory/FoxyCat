fetch('https://randomfox.ca/floof')
  .then(response => response.json())
  .then(
    (converteddata) => {
    const foxImgElement = document.querySelector("#fox")
    foxImgElement.src = converteddata.image

    }
  )
const getTheCat = async () => {
    const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
    const converteddata = await response.json()
    const catImgElement = document.querySelector("#cat")
    catImgElement.src = converteddata[0]
}

getTheCat();





//   fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
//   .then(response => response.json())
//   .then(
//     (converteddata) => {
//     const catImgElement = document.querySelector("#cat")
//     catImgElement.src = converteddata[0]

//     }
//   )