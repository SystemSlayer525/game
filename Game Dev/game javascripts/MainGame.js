 CardGame.Game = function (game) {};
CardGame.Game.prototype = {
//add game script here
create: function () {
    function play() {
  // get random position. Math.random returns float between 0 and 1
  var allies = Math.floor(Math.random() * cards.length); // will get integet between 0 and cards.length - 1
  var baddys = Math.floor(Math.random() * cards.length);

  // create new image element
  var imgallies = document.createElement('img');
  var imgbaddys = document.createElement('img');

  // set image source to be same as selected card
  imgallies.src = cards[allies];
  imgbaddys.src = cards[baddys];

  // select cards holding elements
  var alliesset = document.getElementById('allies');
  var baddysset = document.getElementById('baddys');

  // clear images from previous game
  alliesset.innerHTML = "";
  baddysset.innerHTML = "";

  // add images to it's holders
  alliesset.appendChild('img');
  baddysset.appendChild('img');

  // game logic. Compare array key to see who wins
  if (allies = 0) {
    alert('baddys are the winner!');
  } else if (baddys = 0) {
    alert('allies are the winner!');
  } else if (allies = 0;baddys = 0){
    alert('Its a TIE!');
  }
}
    },
    //add update function script here
update: function () {
},
}