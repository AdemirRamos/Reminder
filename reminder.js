function watch() {
    const watch = document.getElementById('watch')
    const time = new Date().toLocaleTimeString()
    watch.innerHTML = `${time}`
}

let counter = -1
let counterTwo = -1
let counterThree = -1

function timer() {
    let image = document.querySelector('img#image')
    let text = document.getElementById('text')
    let audio = document.getElementById('audio')
    let first_text = document.getElementsByClassName('first_text')[0]

    counter += 1
    counterTwo += 1
    counterThree += 1

    if (counter >= 30) {
        first_text.style.display = 'none'
        counter == 30? audio.play() : ''
        image.src = 'Pictures/water.jpg'
        image.alt = 'In the picture, we have half a face of a woman; she\'s holding a bottle of water with its bottleneck half turned towards her mouth which is slightly opened; into her mouth, goes a gush of water.'

        text.innerText = 'Drink Water!'
        counter >= 32? text.innerText += ` Have you drink water already?` : ''
    }

    if (counter >= 35) {
        image.src = 'Pictures/blue.png'
        image.alt = ''
        text.innerText = ''
        counter = -1
    }

    if (counterTwo >= 40) {
        counterTwo == 40? audio.play() : ''
        image.src = 'Pictures/legs.jpg'
        image.alt = 'In the picture, we have two masculine legs stretched, in the middle of a road; on the horizon, we have a sunset.'
        text.innerText = 'Stretch your legs a little bit!'
        counterTwo >= 42? text.innerText += ` What do you think about a pretty short hike?` : ''
    }

    if (counterTwo >= 45) {
        image.src = 'Pictures/blue.png'
        image.alt = ''
        text.innerText = ''
        counterTwo = -1
    }

    if (counterThree >= 60) {
        counterThree == 60? audio.play() : ''
        image.src = 'Pictures/eyes.jpg'
        image.alt = 'In the picture, we have a masculine face with a light strip passing through the face; the nose and the right eye are being highlighted by the light.'

        text.innerText = 'Give your eyes a little break!'
        counterThree >= 62? text.innerText += ` You know who's waiting for you? That beautiful horizon in your window!` : ''
    }

    if (counterThree >= 65) {
        image.src = 'Pictures/blue.png'
        image.alt = ''
        text.innerText = ''
        counterThree = -1
    }
}

let counterFour = 30
let counterFive = 40
let counterSix = 60

function remaining() {
    let one = document.getElementById('one')
    let two = document.getElementById('two')
    let three = document.getElementById('three')
    let p1 = document.getElementsByClassName('remainingText')[0]

    one.innerHTML = ` Water: ${counterFour--} min. /`
    counterFour < 0? counterFour = 35 : ''

    two.innerHTML = `Legs: ${counterFive--} min. /`
    counterFive < 0? counterFive = 45 : ''

    three.innerHTML = `Eyes: ${counterSix--} min.`
    counterSix < 0? counterSix = 65 : ''
}

function openTimer() {
    const watchContainer = document.getElementById('watch_container')
    const remaining = document.getElementsByClassName('remaining')[0]

    watchContainer.addEventListener('click', function() {
        if (remaining.style.maxHeight) {
            remaining.style.maxHeight = null
        }

        else {
            remaining.style.maxHeight = remaining.scrollHeight + 'px'
        }
    })
}

function water() {
    let waterBox = document.getElementsByClassName('waterBox')[0]
    let waterButton = document.getElementsByClassName('waterButton')[0]
    let testButton = document.getElementsByClassName('testButton')[0]

    waterButton.addEventListener('click', function() {
        if (waterBox.style.marginLeft == '-370px') {
            waterBox.style.marginLeft = '5px'
            waterButton.innerHTML = 'Hide'
        }

        else {
            waterBox.style.marginLeft = '-370px'
            waterButton.innerHTML = 'Show'
        }
    })

    let age = document.getElementById('age')
    let weight = document.getElementById('weight')
    let result = document.getElementById('result')
    var calculation

    testButton.addEventListener('click', function() {
        if (Number(age.value) < 1) {
            result.innerHTML = 'Value invalid! Try again.'
        }

        else if (Number(age.value) <= 17) {
            calculation = (40 * Number(weight.value))
            result.innerHTML = ` ${Math.round(calculation)} mL of water.`
        }

        else if (Number(age.value) < 55) {
            calculation = 35 * Number(weight.value)
            result.innerHTML = ` ${Math.round(calculation)} mL of water.`
        }

        else if (Number(age.value) < 65) {
            calculation = 30 * Number(weight.value)
            result.innerHTML = ` ${Math.round(calculation)} mL of water.`
        }

        else if (Number(age.value) > 65) {
            calculation = 25 * Number(weight.value)
            result.innerHTML = ` ${Math.round(calculation)} mL of water.`
        }
    })
}

setInterval(watch, 1000)
setInterval(timer, 60000)
setInterval(remaining, 60000)

window.addEventListener('load', watch)
window.addEventListener('load', timer)
window.addEventListener('load', remaining)
window.addEventListener('load', openTimer)
window.addEventListener('load', water)
