// Replace with your Supabase URL and public API key
const SUPABASE_URL = 'https://hipjhrhhbkgbfrfkopiy.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpcGpocmhoYmtnYmZyZmtvcGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMDgzMjUsImV4cCI6MjAzMjg4NDMyNX0.ti4NTp0lSTa8BOm2csB0WHe3sly35zI1UA65lk4TWvs';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Function to fetch data from Supabase
async function fetchData() {
    const { data, error } = await supabase
        .from('mytable1')
        .select('*');

    if (error) {
        console.error('Error fetching data:', error);
        return;
    }

    displayData(data);
}

// Function to display data on the web page
function displayData(data) {
    const container = document.getElementById('data-container');
    if (!data.length) {
        container.innerHTML = '<p>No data available.</p>';
        return;
    }

    const table = document.createElement('table');
    table.className = 'table';

    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');
    data.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    container.appendChild(table);
}

// Fetch and display data when the page loads
fetchData();

// Initialize Supabase client
