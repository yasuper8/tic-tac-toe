// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log("app.js linked!")
  $("#btn").prop("disabled",true);

  var resetGridArr = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];



  //keep track of player
  var xTurn = true;

  function isGridEmpy(){

  }

  //chaecks whos turn and place X or O
  function putXorO(whosTurn) {
    $("#btn").prop("disabled",false);
    if (xTurn && $(this).text("")) {
      xTurn = false;
      $(this).text("X");
    } else if ($(this).text("")){
      xTurn = true;
      $(this).text("O");
    }
  }

  //calling putXorO by clicking a grid
  $('.box').one('click', putXorO);

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
    xTurn = true;
  })


}); //end .ready
