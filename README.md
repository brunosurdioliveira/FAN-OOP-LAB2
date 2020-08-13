# FAN-OOP-LAB2
Lab 2 Object-oriented programming (JAVASCRIP 2)
1. Create an html file as your solution by prefixing your first name and an underscore to the page thus
produce something like “Jim_BeerAPIAsynch.html”
2. Create one button to make an Asynchronous call to the beer API, create an array called
“beerProducts” and store returned information as a JavaScript object.
3. Create two buttons and a new <div> called beerName. Finally, add an HTML image control (see
the screen captures at the end of this doc for details on the user interface).
4. Create two new event handler functions (one for each of the new buttons). These buttons should
indicate to the user the concepts of “Next Beer” and “Previous Beer”
5. When the beer data has been loaded (this will be hundreds of records), display the name of the
first beer in the list (the beerProducts array) along with the image. Note that not all records will
have an image however for the purpose of this lab we won’t worry about checking for that situation.
6. When the user clicks the “Next Beer” button, show the name of the next beer in the beerProducts
array along with the image. When the user clicks the “Previous Beer” button show the name of the
previous beer along with the image.
7. Ensure that when the user selects the “Previous Beer” button that you check to see you’re not
already at the start of the array. 
Lab 2 Page 2 of 4
8. Since the array is quite long, we won’t worry about going past the end of the array with a “Next
Beer” click.
Notes: (Do not try the API link with chrome it won’t work)
API Url: https://rsd05guo67.execute-api.us-east-2.amazonaws.com/default/beerstore
API key: 32isbi7Lug22v8CKogygf5b2EZwpdFhS2OotvWem
If you are using “var request = new XMLHttpRequest();” as shown in our lectures, you just need to add the
following after request.open:
“request.setRequestHeader('x-api-key', '32isbi7Lug22v8CKogygf5b2EZwpdFhS2OotvWem');”