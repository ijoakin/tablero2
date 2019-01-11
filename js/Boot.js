var BasicGame = {

};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {

	init: function(){

        //game.state.scale.startFullScreen();
 		this.input.maxPointers = 1;

        this.stage.disableVisibilityChange = true;
		this.game.stage.backgroundColor = '#ffffff';

        this.resize();

	},
	preload: function(){
		this.load.image('preloaderBar', 'assets/images/preloaderBar.png');
        this.load.image('preloaderFrame', 'assets/images/preloaderFrame.png');

	},
	create: function(){

		this.game.state.start('Preloader');
 		
	},
    resize: function(){
            this.game.scaleMode = 2; //resize your window to see the stage resize too
            this.game.scale.setShowAll();
            this.game.scale.refresh();

    }

};