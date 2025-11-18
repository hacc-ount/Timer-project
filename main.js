import {start, pause} from "./src/display.js";
import {addJob} from "./src/addJobs.js";
import {a0000} from "./src/jobData.js"

addJob(a0000);

const display = document.querySelector('.display');
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const selected = document.querySelectorAll('#td');


startBtn.addEventListener("click", () => {
    start(display);
});

pauseBtn.addEventListener("click", () => {
    pause(display);
});


