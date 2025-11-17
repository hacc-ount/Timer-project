import {start, pause, display1} from "./src/display.js";
import {consoleLog} from "./src/consoleLog";
import {addJob} from "./src/addJobs.js";
import {a0000} from "./src/jobData.js"

const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");

startBtn.addEventListener("click", () => {
    start(display1);
});

pauseBtn.addEventListener("click", () => {
    pause(display1);
});

addJob(a0000);
