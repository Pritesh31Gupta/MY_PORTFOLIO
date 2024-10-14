// For future interactivity and JavaScript features
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website is ready!");
  });
 // Select the submit button by its ID
 const submitButton = document.getElementById("su");
 const form = document.getElementById("myForm");
 
 // Add a click event listener to the submit button
 submitButton.addEventListener("click", function(event) {
     event.preventDefault(); // Prevents the form from submitting
     console.log("Your response is recorded"); // Prints the message in the console
     alert("Your response is recorded"); // Optional: displays an alert with the message
     form.reset();
 });
