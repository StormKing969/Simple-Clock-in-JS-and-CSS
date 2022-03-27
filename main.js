const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    if(secondsDegrees >= 444) {
        secondHand.style.transition = `none`;
    } else {
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    if(secondsDegrees >= 444) {
        minsHand.style.transition = `none`;
    } else {
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    }
    

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    if(secondsDegrees >= 444) {
        hourHand.style.transition = `none`;
    } else {
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }
    
}

setInterval(setDate, 1000);

setDate();