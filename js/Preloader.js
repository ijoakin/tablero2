BasicGame.Preloader = function(game){


};

BasicGame.Preloader.prototype = {

	init: function(){

	},
	preload:function(){
		this.preloadBar = this.add.sprite(175, 121 , 'preloaderBar');
        this.add.sprite(170, 83, 'preloaderFrame');
		this.load.setPreloadSprite(this.preloadBar);
									



		this.load.audio('mainMusic', ['assets/audio/mainMusic.mp3']);
    	this.load.audio('click', ['assets/audio/click.mp3']);										 

    	this.game.SoundManager.addMusic(this.game.add.audio('mainMusic'));
        this.game.SoundManager.addSfx(this.game.add.audio('click'));

		this.load.bitmapFont('newDropEra', 'assets/fonts/NewDropEra_0.png', 'assets/fonts/NewDropEra.fnt');
		this.load.image('tablero','assets/images/tablero.png');
		this.load.image('tablero2','assets/images/tablero2.png');
		this.load.image('background','assets/images/background.png');

		this.load.image('TituloConCorona','assets/images/TituloConCorona.png');
		this.load.image('TituloSinCorona','assets/images/TituloSinCorona.png');
		this.load.image('coronita','assets/images/coronita.png');		
		

		game.load.spritesheet('tablero3', 'assets/images/tablero3.png', 71,71);
		game.load.spritesheet('ficha', 'assets/images/ficha.png', 71,71,15);


		
		this.load.image('cuadro','assets/images/cuadro3.png');

		this.load.image('cuadroRojo','assets/images/cuadroRojo.png');
		this.load.image('cuadroVerde','assets/images/cuadroVerde.png');

		this.load.image('playBtn','assets/images/playBtn6.png');
		this.load.image('playBtnPeque','assets/images/playBtn5.png');
		this.load.image('largeBtn','assets/images/largeBtn2.png');
		
		this.load.image('king','assets/images/king.png');

 		this.load.image('ganaAzul','assets/images/ganaAzul.png');
 		this.load.image('ganaRojo','assets/images/ganaRojo2.png');
 		this.load.image('ganaVerde','assets/images/ganaVerde2.png');

 		this.load.image('turnoRojo','assets/images/turnoRojo.png');
 		this.load.image('turnoVerde','assets/images/turnoVerde.png');

		this.load.image('explicacion','assets/images/explicacion3.png'); 		

	},
	create: function(){
		this.game.state.start('MainMenu');


	},
	resize: function(){

		  	this.game.scaleMode = 2; //resize your window to see the stage resize too
            this.game.scale.setShowAll();
            this.game.scale.refresh();
	}


};