var Game = {};
Game.Preloader = function (game) {
this.ready = false;
};
Game.Preloader.prototype = {
preload: function () {
//Displays a loadng screen message while the assets are loaded into memory
this.preloaderText = this.add.text(this.world.centerX, this.world.c
enterY, 'Loading...', {
fontSize: '96px',
fill: '#fff',
align: 'center'
});
this.preloaderText.anchor.setTo(0.5, 0.5);
//preload the images, sprites and audio assets into memory
this.load.image('card-template', 'css/assets/card-template.png');
    //allies
    this.load.image('card-thehunter', 'css/assets/allies/card-thehunter.png');
    this.load.image('card-theadventurer', 'css/assets/allies/card-theadventurer.png');
    this.load.image('thechicken', 'css/assets/allies/card-thechicken.png');
    this.load.image('thedrunk', 'css/assets/allies/card-thedrunk.png');
    this.load.image('thegoodmage', 'css/assets/allies/card-thegoodmage.png');
    this.load.image('thepeasant', 'css/assets/allies/card-thepeasant.png');
    this.load.image('therebel', 'css/assets/allies/card-therebel.png');
    this.load.image('thetownguard', 'css/assets/allies/card-thetownguard.png');
    //baddys
    this.load.image('card-thehunter', 'css/assets/baddys/card-thegoldenknight.png');
    this.load.image('card-theadventurer', 'css/assets/baddys/card-thejester.png');
    this.load.image('thechicken', 'css/assets/baddys/card-therecruit.png');
    this.load.image('thedrunk', 'css/assets/baddys/card-thespy.png');
    this.load.image('thegoodmage', 'css/assets/baddys/card-thetalon.png');
    this.load.image('thepeasant', 'css/assets/baddys/card-thetower.png');
    this.load.image('therebel', 'css/assets/baddys/card-thetyrant.png');
    this.load.image('thetownguard', 'css/assets/baddys/card-thebadmagae.png');
},
create: function () {},
update: function () {
this.game.state.start('game-mainmenu-script');
}
};