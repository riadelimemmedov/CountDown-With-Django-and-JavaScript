//!Main Js for Countdown

console.log('Hello World')

const eventBox = document.getElementById('event-box').textContent.trim()
const countdownBox = document.getElementById('countdown-box')

const eventDate = Date.parse(eventBox)

const myCountDown = setInterval(()=>{
    const now = new Date().getTime()
    const diff = eventDate - now

    const d = Math.floor(eventDate / (1000*60*60*24) - (now / (1000*60*60*24)))
    const h = Math.floor((eventDate / (1000*60*60) - (now / (1000*60*60))) % 24)
    const m = Math.floor((eventDate / (1000*60) - (now / (1000*60))) % 60)
    const s = Math.floor((eventDate / (1000) - (now / (1000))) % 60)
    //console.log(d)
    // console.log(h) 
    // console.log(m)
    // console.log(s)

    if(diff > 0){
        countdownBox.innerHTML = d + ' days, ' + h + ' hours, ' + m + ' minutes, ' + s + ' seconds'
    }
    else{
        clearInterval(myCountDown)
        countdownBox.innerHTML = `
            <div class="alert alert-danger mt-2 border rounded">
                <strong class="text-dark">Countdown completed</strong>
            </div>
        `
    }

},1000)

