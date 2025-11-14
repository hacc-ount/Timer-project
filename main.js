import {start, pause} from "./src/display.js";

const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");

startBtn.addEventListener("click", () => {
    start();
});

pauseBtn.addEventListener("click", () => {
    pause();
});