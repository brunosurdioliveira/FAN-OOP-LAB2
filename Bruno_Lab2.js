// Create an array and store returned information as a JavaScript objects
var beerProducts = [];

// Create variable to identify current index (selected object in the array)
var currentIndex = 0;

// Create a function to next and previous beer
function Previous() {
    currentIndex = (currentIndex <= 0) ? currentIndex : (currentIndex - 1);
    // Call function to display the beer informations
    displayBeers();
}

function Next() {
    currentIndex = (currentIndex >= beerProducts.length - 1) ? currentIndex : (currentIndex + 1);
    // Call function to display the beer informations
    displayBeers();
}

// AJAX
function getJSONAsync(url) {
    // We can do simple AJAX calls from any browsers using XMLHttpRequest() - XMLHttpRequest objects are used to interact with servers.
    var request = new XMLHttpRequest();
    // .onreadystatechange property contains the event handler to be called when the readystatechange event is fired, that is every time the readyState property of the XMLHttpRequest changes
    request.onreadystatechange = function () {
        // .readyState - Checks if is finish (4 means "DONE") - returns the state an XMLHttpRequest client is in
        // .status - check if everything is OK (200 means "DONE") - returns the numerical HTTP status code of the XMLHttpRequest's response.
        if (request.readyState === 4 && request.status === 200) {
            // Store in the beerProducts array the JS object
            beerProducts = JSON.parse(request.responseText);

            // Output the beer name and image
            displayBeers();
        }
    }
    // Open a connection using URL
    request.open("GET", url);
    request.setRequestHeader('x-api-key', '32isbi7Lug22v8CKogygf5b2EZwpdFhS2OotvWem');
    // Send the GET request
    request.send();
}

// Function to get the URL and call the function getJSONAsync()
function helper(url) {
    var url = "https://rsd05guo67.execute-api.us-east-2.amazonaws.com/default/beerstore";
    getJSONAsync(url);
}

// Function to display the beer's information
function displayBeers() {
    // Get the div by ID and output the beer informations
    document.getElementById("beerName").innerHTML = "<br><strong>" + beerProducts[currentIndex].name + "</strong><br>";
    document.getElementById("beerImage").src = beerProducts[currentIndex].image_url;
}