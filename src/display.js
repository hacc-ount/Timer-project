//const disp = document.querySelector(".display");

let timer = null 
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(disp) {

    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => update(disp), 10);
        disp.classList.remove("animatePause"); //Removing CSS animation
        disp.classList.add("animateStart"); //Replacing CSS animation
        isRunning = true;
    }

}

function pause(disp) {

    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        disp.classList.remove("animateStart"); //Removing CSS animation
        disp.classList.add("animatePause"); //Replacing CSS animation
        isRunning = false;
    }

}

function update(disp) {

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
    disp.textContent = `${timerHours}:${timerMinutes}:${timerSeconds}`;

}

export {start, pause};