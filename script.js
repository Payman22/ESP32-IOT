<script src="https://apis.google.com/js/api.js"></script>

function initClient() {
    gapi.client.init({
        'apiKey': 'AIzaSyAkoryVtiY5zCVAYTlSquSmt578k4l46YI',
        'clientId': '1050886216470-gpqrg654jt88mnkjuthdmll3t0p929k8.apps.googleusercontent.com',
        'scope': 'https://www.googleapis.com/auth/spreadsheets',
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        // Your code to handle successful initialization
    }, function(error) {
        console.log(JSON.stringify(error, null, 2));
    });
}

gapi.load('client:auth2', initClient);

function handleRedButton() {
    alert("Red button clicked!");
}

function handleGreenButton() {
    alert("Green button clicked!");
}

function handleSignInClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

function readSheetData() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1gzFiV8qYD5EW4fSPd1NUP2mj7h9q0-UMwNoxUagMLEU',
        range: 'Sheet1!A1:E10', // Adjust the range as needed
    }).then(function(response) {
        var range = response.result;
        console.log(range);
        // Handle the response data
    }, function(error) {
        console.error('Error: ' + error.result.error.message);
    });
}




