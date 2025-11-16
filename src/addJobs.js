/** Import Jobs */
import {a0000} from "./jobData.js"

const jobTable = document.querySelector("#jobTable");

function addJobs() {

    let colors = a0000.color;
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

export {jobTable, addJobs};