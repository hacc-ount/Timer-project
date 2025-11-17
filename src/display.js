const display1 = document.querySelector("#display");

let timer = null 
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(display) {

    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        display.classList.remove("animatePause"); //Removing CSS animation
        display.classList.add("animateStart"); //Replacing CSS animation
        isRunning = true;
    }

}

function pause(display) {

    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        display.classList.remove("animateStart"); //Removing CSS animation
        display.classList.add("animatePause"); //Replacing CSS animation
        isRunning = false;
    }

}

function update() {

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let timerHours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let timerMinutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let timerSeconds = Math.floor(elapsedTime / 1000 % 60);
    let timerMilliseconds = Math.floor(elapsedTime % 1000 / 10);

    timerHours = String(timerHours).padStart(2, "0");
    timerMinutes = String(timerMinutes).padStart(2, "0");
    timerSeconds = String(timerSeconds).padStart(2, "0");
    timerMilliseconds = String(timerMilliseconds).padStart(2, "0");

    display.textContent = `${timerHours}:${timerMinutes}:${timerSeconds}`;

}

export {start, pause, display1};