const apiKey

 =

 'YOUR_API_KEY'; // Replace with your API key
const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your spreadsheet ID
const sheetName = 'Sheet1'; // Replace with your sheet name

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data.values))
  .catch(error => console.error('Error:', error));
