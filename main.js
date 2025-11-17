import {start, pause} from "./src/display.js";
import {consoleLog} from "./src/consoleLog";
import {addJob} from "./src/addJobs.js";
import {a0000} from "./src/jobData.js"

const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");

startBtn.addEventListener("click", () => {
    start();
});

pauseBtn.addEventListener("click", () => {
    pause();
});

addJob(a0000);
