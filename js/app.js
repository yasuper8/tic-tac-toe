// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log("app.js linked!")
  // $("#btn").prop("disabled",true);

  var resetGridArr = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];



  //keep track of player
  var xTurn = true;
  var showXTurn = "X's turn."
  var showOTurn = "O's turn."

  function isRowMatch() {

  }

  function displayWhosTrn() {
    if (xTurn) {
      $('#whosTrn').empty();
      $('#whosTrn').text(showXTurn);
      $('#whosTrn').css( 'font-size', '2em' );
      $('#whosTrn').css( "font-family", "\'Space Mono\'");
    } else {
      $('#whosTrn').empty();
      $('#whosTrn').text(showOTurn);
      $('#whosTrn').css( 'font-size', '2em' );
      $('#whosTrn').css( "font-family", "\'Space Mono\'");
    }
  }

  displayWhosTrn();
  // This does not work.
  // function styleXandO() {
  //   $(this).css( 'font-size', '8em' );
  //   $(this).css( "font-family", "\'Lora\'");
  // }


  //chaecks whos turn and place X or O
  function putXorO(whosTurn) {
    // $("#btn").prop("disabled",false);
    if (xTurn && $(this).text("")) {
      xTurn = false;
      $(this).text("X");
      $(this).css( 'pointer-events', 'none' );
      $(this).css( 'font-size', '7em' );
      $(this).css( "font-family", "\'Space Mono\'");
      displayWhosTrn();

    } else if ($(this).text("")){
      xTurn = true;
      $(this).text("O");
      $(this).css( 'pointer-events', 'none' );
      $(this).css( 'font-size', '7em' );
      $(this).css( "font-family", "\'Space Mono\'");
      displayWhosTrn();
    }
  }

  // Calling putXorO by clicking a grid
  $('.box').on('click', putXorO);


  // clicking issues with .one and restting click by
  // caling $('.box').on('click', putXorO); in reset cb
  // $('.box').one('click', putXorO);


  // Reset btn resets the grid to menpty
  $("#btn").on('click', function() {
    console.log($(this).text());
    $('.box').text("");
    $(".box").css( 'pointer-events', 'auto' ); // Making a block clickable again
    xTurn = true;
  })


}); //end .ready
