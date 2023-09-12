let startTime, endTime
let imageSize = ''
let image = new Image()
let bitOutput = document.getElementById('bits')
let kbOutput = document.getElementById('kbs')
let mbOutput = document.getElementById('mbs')

// Gets random images from Unsplash
let imgaeLink = 'https://source.unsplash.com/random?topics=nature'

// When image loads
image.onload = async function () {
    endTime = new Date().getTime()

    // Get Image Size
    await fetch(imgaeLink).then((response) => {
        imageSize = response.headers.get('content-length')
        calculateSpeed()
    })
}

// function to calculate speed.
function calculateSpeed() {
    
    // time taken in seconds
    let timeDuration = (endTime - startTime) / 1000

    // total bits
    let loadedBits = imageSize * 8
    let speedInBPS = (loadedBits / timeDuration).toFixed(2)

    // speed in kbs
    let speedInKBS = (speedInBPS / 1024).toFixed(2)

    // speed in mbs
    let speedInMBS = (speedInKBS / 1024).toFixed(2)

    // Outputs
    bitOutput.innerHTML += `${speedInBPS}`
    kbOutput.innerHTML += `${speedInKBS}`
    mbOutput.innerHTML += `${speedInMBS}`
}

// Initial
const init = async () => {
    startTime = new Date().getTime()
    image.src = imgaeLink
}

window.onload = () => init()