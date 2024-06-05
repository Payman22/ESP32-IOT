const apiKey

 =

 'AIzaSyAAVP254qGSX0I0IBxhfNnTQGeOlCZbc94'; // Replace with your API key
const spreadsheetId = '1gzFiV8qYD5EW4fSPd1NUP2mj7h9q0-UMwNoxUagMLEU'; // Replace with your spreadsheet ID
const sheetName = 'Sheet1'; // Replace with your sheet name

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${1gzFiV8qYD5EW4fSPd1NUP2mj7h9q0}/values/${sheet1}?key=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data.values))
  .catch(error => console.error('Error:', error));
