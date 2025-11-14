import {start, pause} from "./src/display.js";
import {consoleLog} from "./src/consoleLog";
import {addJobs} from "./src/addJobs.js";

const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");

startBtn.addEventListener("click", () => {
    start();
});

pauseBtn.addEventListener("click", () => {
    pause();
});

consoleLog();
addJobs();
