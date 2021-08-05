
let timeLeftDisplay = document.querySelector('#time-left')


let timeLeft = 10 // duration here

function countDown (timeLeft){
    setInterval(() => {

        if (timeLeft <= 0){
            clearInterval(timeLeft = 0)
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -= 1
    }, 1000); // 60000*60 hour
}