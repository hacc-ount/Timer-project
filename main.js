import {start, pause} from "./src/display.js";
import {addJob} from "./src/addJobs.js";
import {a0000} from "./src/jobData.js"

addJob(a0000);

const test = document.querySelector('.display');
console.log(test);
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");

startBtn.addEventListener("click", () => {
    start(test);
});

pauseBtn.addEventListener("click", () => {
    pause(test);
});


