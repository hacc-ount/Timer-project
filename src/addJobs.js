
import {formatArray} from "./formatting/format.js";

const jobTable = document.querySelector("#jobTable");

function addJob(job) {
    function addJobLine(job) {

        let colors = job.color;
        let count = 0;
        for (const color of colors) {
            let newRow = document.createElement("tr");

            for (count; count <= 8; count++) {
                let newData = document.createElement("td");
                newData.classList = `td${count}`;
                newRow.appendChild(newData);
            }

            count = 0;
            jobTable.appendChild(newRow);
        }

    }

    /** Formatting Data */ 
    //Colors
    const jobColor = job.color;
    let colors = formatArray(jobColor);
    //Process
    const jobProcess = job.process;
    let process = formatArray(jobProcess);
    /** Formatting Data */
    
    function addJobData(job) {

    const td0 = document.querySelector(".td0");
    const td1 = document.querySelector(".td1");
    const td2 = document.querySelector(".td2");
    const td3 = document.querySelector(".td3");
    const td4 = document.querySelector(".td4");
    const td5 = document.querySelector(".td5");
    const td6 = document.querySelector(".td6");
    const td7 = document.querySelector(".td7");
    const td8 = document.querySelector(".td8");

    td0.textContent = job.id;
    td1.textContent = job.catagory;
    td3.textContent = colors;
    td4.textContent = process;

    }

    addJobLine(job);
    addJobData(job);


}

export {jobTable, addJob};