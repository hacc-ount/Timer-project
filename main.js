const display = document.getElementById("display");
let timer = null; //timer will hold value of the timer as it plays, stops. Seperate to the Date() object data.
let startTime = 0;
let elapsedTime = 0;
let isRunning = false; //if the stopwatch is running, flip this to be true, if not then it will be false.

const log = document.getElementById("log");
let pauseData = "";
let notesData = "";
let finishData = "";

function start() {

    if (!isRunning) {
        //if not running, start the stopwatch
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        display.classList.remove("animatePause");
        display.classList.add("animateStart");
        isRunning = true;
    }

}

function pause() {
    
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;

        display.classList.remove("animateStart");
        display.classList.add("animatePause");

        /*pauseData = window.prompt("Please list reason for pausing:");

        let worldTime = new Date().toLocaleString();
        let tempP = document.createElement("p");
        tempP.textContent = `${worldTime} - Pause reason: ${pauseData}`;
        log.appendChild(tempP);*/

        isRunning = false;
    }

}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00"
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


