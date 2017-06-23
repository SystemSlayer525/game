CardGame.MainMenu = function (game) { };
//add script here to create the mainmenu
CardGame.MainMenu.prototype = {
create: function () {
    //start button
    startButton = this.add.button((this.world.width / 2), (this.world.height / 2) + 50, 'startButton', this.startGame);
		startButton.anchor.setTo(0.5,0.5);
},
    //add update script here
    update: function () {
    },
        	startGame: function () {
		//And start the actual game
		this.game.state.start('Game');
	}
}