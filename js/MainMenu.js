BasicGame.MainMenu = function(game){

};
BasicGame.MainMenu.prototype = {
	
    gameStart: false,

    init: function (options) {
        this.gameStart = true;
    },

	preload: function(){


	},
	create: function(){
		
		var self = this;

        this.background = this.add.sprite(0, 0, 'background');

        this.btnPlay = new PlaylantFramework.Button(this.game, this.game.width/2, 230, 'playBtn', null, 'newDropEra', 'SOLO', '0xFC7D4A', 40 );
        this.btnTwo = new PlaylantFramework.Button(this.game, this.game.width/2, 350, 'playBtn', null, 'newDropEra', '2 JUGADORES', '0xFC7D4A', 40 );
        //this.btnMulti = new PlaylantFramework.Button(this.game, this.game.width/2, 470, 'playBtn', null, 'newDropEra', 'MULTIPLAYER', '0xFC7D4A', 40 );
        this.btnOptions = new PlaylantFramework.Button(this.game, this.game.width/2, 590, 'playBtn', null, 'newDropEra', 'OPCIONES', '0x00D2FD', 40 );

        this.game.world.add(this.btnPlay);
        this.game.world.add(this.btnTwo);
        
        this.game.world.add(this.btnOptions);



        this.gameTitle = this.add.sprite(0, 0, 'TituloSinCorona');
        this.coronita = this.add.sprite(0, 0, 'coronita');

        
        if(this.gameStart){
            this.gameTitle.x = (this.game.width-this.gameTitle.width) / 2;
            this.gameTitle.y = -this.gameTitle.height - 20;


            this.coronita.x = (this.game.width-this.gameTitle.width) / 2 - 30;
            this.coronita.y = -this.gameTitle.height - 20;

            this.feedingTween = this.add.tween(this.gameTitle);
            this.feedingTween.to({y: -50}, 1000, Phaser.Easing.Bounce.Out, true, 1000);


            this.feedingTween1 = this.add.tween(this.coronita);
            this.feedingTween1.to({y: 40}, 1000, Phaser.Easing.Bounce.Out, true, 1000);
        }
        else {
            this.gameTitle.y = 0;
        }
        //events
        this.btnOptions.onClick = function(){
            self.game.state.start('Options');
        }
        this.btnPlay.onClick = function(){
            self.game.state.start('Game', true, false, true);
        }
        this.btnTwo.onClick = function(){
            //self.game.state.start('Game', { solo: true });
            self.game.state.start('Game', true, false, false);
        }
        /*
        this.btnMulti.onClick = function(){
            //self.game.state.start('Game', { solo: true });
            self.game.state.start('Login');
        }
        */

	},
	comenzar: function(){

			
	},
	resize: function(){

		  	this.game.scaleMode = 2; //resize your window to see the stage resize too
            this.game.scale.setShowAll();
            this.game.scale.refresh();
	}
};