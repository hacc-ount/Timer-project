
import {formatArray} from "./formatting/format.js";

const jobTable = document.querySelector("#jobTable");

function addJob(job) {
    
    function addJobLine(job) {

        let colors = job.color;
        let rowCount = 0;
        let columnCount = 0;
        for (const color of colors) {
            let newRow = document.createElement("tr");
            newRow.id = `tr${rowCount}`;
            if (columnCount < 8) {
            for (columnCount; columnCount <= 8; columnCount++) {
                let newData = document.createElement("td");
                newData.id = `td${columnCount}`;
                newRow.appendChild(newData);
            }
            } else if (columnCount > 8 && columnCount < 16) {
            for (columnCount; columnCount <= 16; columnCount++) {
                let newData = document.createElement("td");
                newData.id = `td${columnCount}`;
                newRow.appendChild(newData);
            } 
            } else if (columnCount > 16 && columnCount < 24) {
                for (columnCount; columnCount <= 24; columnCount++) {
                let newData = document.createElement("td");
                newData.id = `td${columnCount}`;
                newRow.appendChild(newData);
            }
            } else {
                console.log("columnCount exceeds if statements");
            }

            rowCount++;
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

    const td0 = document.querySelector("#td0");
    const td1 = document.querySelector("#td1");
    const td2 = document.querySelector("#td2");
    const td3 = document.querySelector("#td3");
    const td4 = document.querySelector("#td4");
    const td5 = document.querySelector("#td5");
    const td6 = document.querySelector("#td6");
    const td7 = document.querySelector("#td7");
    const td8 = document.querySelector("#td8");

    td0.textContent = job.id;
    td1.textContent = job.catagory;
    td3.textContent = job.color[0];
    td4.textContent = process;
    
    td7.innerHTML = "00:00:00";
    td7.classList = "display";

    }

    addJobLine(job);
    addJobData(job);

}

export {jobTable, addJob};