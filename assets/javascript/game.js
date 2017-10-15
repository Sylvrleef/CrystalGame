
$( document ).ready(function() {
    console.log( "ready!" );

  var wins = 0;
  var loses = 0;
  var userTotal = 0;
  var computerTotal = getNumber()

// reset the userTotal and the computerTotal
function reset(){
  var computerTotal = getNumber();
  var userTotal = 0;
  
}

// get the number for the user to match
function getNumber() {
  var minNumber = 19;
  var maxNumber = 120;
  var randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
  return randomNumber
}

  console.log(computerTotal);

// get the number value for each crystal
function crystalNumber() {
  var minNumber = 1;
  var maxNumber = 12;
  var randomNumber = Math.floor(Math.random() * (maxNumber) + minNumber);
  return randomNumber;
}

for (var i = 0; i < 4; i++) {
  var crystalNum = crystalNumber();
  console.log(crystalNum);

  var crystal = $("<button>").text(crystalNum)
  crystal.attr("randomNumber", crystalNum)
  console.log(crystal);

  $("#crystals").append(crystal)
}

$(":button").click(function(){
  var num = parseInt(this.attributes.randomNumber.value)
  userTotal += num;
  if (userTotal < computerTotal) {
    $("#result").text(userTotal);
  } else if (userTotal === computerTotal) {
    alert("winner");
    reset();
  }else if (userTotal > computerTotal) {
    alert("loser");
    reset();
  }
  console.log(userTotal);
})

});
