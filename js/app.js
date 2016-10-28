// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
console.log("app.js inked!")



$('#a1').on('click', function() {
  console.log($(this).text());
  $(this).text("x");
})











});
