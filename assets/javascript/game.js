var random_result;
var lost = 0;
var win = 0;
var counter = 0;

var resetAndStart = function () {

  $(".crystals").empty();

  var images = [
    'http://www.wallpaperweb.org/wallpaper/Digital_art/1920x1200/708_crystals.jpg',
    'http://vignette3.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkKxygSsbfWm8d7auadWoTy2WwsSZBNJWfWkNzZFx4AG8yQwhKQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26Dl-nFVSqsl2M9-eEYTDS3pymw4DNf_gqQtE1AATtf8Uu56D'
  ];

  random_result = Math.floor(Math.random() * 101) + 19;


  $("#result").html('Random Result: ' + random_result);

  for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");
    crystal.attr({
      "class": 'crystal',
      "data-random": random
    });
    crystal.css({
      "background-image": "url('" + images[i] + "')",
      "background-size": "cover"

    });


    $(".crystals").append(crystal);

  }

  $("#counter").html("Total Score: " + counter);

}


resetAndStart();



$(document).on('click', ".crystal", function () {

  var num = parseInt($(this).attr('data-random'));

  counter += num;


  $("#counter").html("Total score: " + counter);

  console.log(counter);

  if (counter > random_result) {

    lost++;

    $("#lost").html("You lost: " + lost);

    counter = 0;

    resetAndStart();

  }
  else if (counter === random_result) {

    win++;

    $("#win").html("You win: " + win);

    counter = 0;

    resetAndStart();
  }

});


// Speudo coding

// a game with 4 crystal and Random Result
// Every crystal needs to have a random number between 1 - 12
// When clicking any CRYSTAL, it should adding with the previous result
// Until it equals the Random Result
// If it is greater than the Random Result, we decrement a lost counter
// If it is equal, then we increment a win counter
// A new random number should be generate every single time we win or lost
// to those 4 crystals
