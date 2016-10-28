// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
console.log("app.js inked!")


var resetGridArr = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];



//keep track of player
var xTurn = true;

function isGridEmpy(){

}

//chaecks whos turn and place X or O
function putXorO(whosTurn) {
  if (xTurn && $(this).text("")) {
    xTurn = false;
    $(this).text("X");
    // $(this).unbind('click');
  } else if ($(this).text("")){
    xTurn = true;
    $(this).text("O");
    // $(this).unbind('click');
  ;
  }
}

//calling putXorO by clicking a grid
$('.box').one('click', putXorO);



// function assignX(){
//   $(this).text("X");
// }
//
// function assignO(){
//   $(this).text("O");
// }
//
// $('#a1').on('click', function() {
//   console.log($(this).text());
//   $(this).text("");
// })

function resetBoard() {
  for (var i = resetGridArr.length - 1; i >= 0; i--) {
    $eachGrid = $(resetGridArr[i]);
    console.log($eachGrid);
    $eachGrid.text("");
  }
}



//Reset btn resets the grid to menpty
$("#btn").on('click', function() {
  console.log($(this).text());
  $('.box').text("");
  $('.box').one('click', putXorO);
  })
});
