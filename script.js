const launchBtn = document.getElementById("launch");
const hoursText = document.getElementById("hours");

hoursText.style = "font-size: 0;"

launchBtn.addEventListener("click", event => {
    // set the btn text
    launchBtn.innerText = "Relancer"
    // make the hours text appear with css
    hoursText.style = "transition: 200ms; color: #000; font-size: 6;"
    // initialize hour and minute to acces it later
    let hours;
    let minutes;
    let finish = 0;
    // generate hours
    let hourOccurencies = 0;
    let randHours = setInterval(() => {
        hours = Math.floor(Math.random() * (14 - 7 + 1) + 7);
        hourOccurencies += 1;
        if (hourOccurencies == 17) {
            clearInterval(randHours);
            finish += 1;
        }
            
    }, 300);
    // genreate minutes
    let minOccurencies = 0;
    let randMins = setInterval(() => {
        minutes = Math.floor(Math.random() * (60+ 1));
        minOccurencies += 1;
        if (minOccurencies == 30){
            clearInterval(randMins);
            finish += 1;
        }
    }, 100);
    // update everything
    let update = setInterval(() => {
        if (finish >= 2) {
            hoursText.innerText = "12 : 12";
            clearInterval(update);
            return;            
        }

        let txt = hours + " : " + minutes;
        hoursText.innerText = txt;
    }, 50);

});
