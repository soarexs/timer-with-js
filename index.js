const msec = document.getElementById('millisecond')
const sec = document.getElementById('second')
const min = document.getElementById('minute')
const hour = document.getElementById('hour')
const btnStart = document.getElementById('btnStart')
const btnPause = document.getElementById('btnPause')
const btnReset = document.getElementById('btnReset')

const fillSpaces = (n, l) => {
    let s = String(n)
    while (s.length != l) {
        s = 0 + s
    }
    return s
}


const time = {
    ms: 0,
    s: 0,
    m: 0,
    h: 0
}

const start = () => {
    pause
    reset
    interval = setInterval(() => {
        msec.innerText = fillSpaces(time.ms, 3)
        time.ms++
        if (time.ms === 100) {
            time.s++
            sec.innerText = fillSpaces(time.s, 2)
            time.ms = 0
        } if (time.s === 60) {
            time.m++
            min.innerText = fillSpaces(time.m, 2)
            time.s = 0
        } if (time.m === 60) {
            time.h++
            hour.innerText = fillSpaces(time.h, 2)
            time.m = 0
        }
    }, 10)
}

const pause = () => {
    clearInterval(interval)
    clicked = false
}

const reset = () => {
    Object.keys(time).forEach(element => {
        time[element] = 0
    });
    clearInterval(interval)
    console.log(time)
    msec.innerText = '00'
    sec.innerText = '00'
    min.innerText = '00'
    hour.innerText = '00'
    clicked = false
}

var clicked = false
btnStart.addEventListener('click', () => {
    if (!clicked) {
        start()
        clicked = true
    }
})
btnPause.addEventListener('click', () => pause())
btnReset.addEventListener('click', () => reset())