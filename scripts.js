document.addEventListener('DOMContentLoaded', function() {
    const displayTableBody = document.querySelector('#displayTable tbody');
    const inputTableBody = document.querySelector('#inputTable tbody');

    // Function to create a 5x5 table
    function createTable(tableBody, isInput) {
        for (let i = 0; i < 5; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < 5; j++) {
                let cell = document.createElement('td');
                if (isInput) {
                    let input = document.createElement('input');
                    input.type = 'text';
                    input.id = `input-${i}-${j}`;
                    cell.appendChild(input);
                } else {
                    cell.id = `display-${i}-${j}`;
                }
                row.appendChild(cell);
            }
            tableBody.appendChild(row);
        }
    }

    // Initialize both tables
    createTable(displayTableBody, false);
    createTable(inputTableBody, true);
});

function submitData() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let inputCell = document.getElementById(`input-${i}-${j}`);
            let displayCell = document.getElementById(`display-${i}-${j}`);
            displayCell.textContent = inputCell.value;
        }
    }
}
