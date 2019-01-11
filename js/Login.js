

BasicGame.Login = function(game){

};

function displayMessage(text)
{

    //alert(text);

}




BasicGame.Login.prototype = {
	
    init: function (options) {
        
    },

	preload: function(){


	},
	create: function(){
		
		var self = this;

        initWebSocket();
        this.background = this.add.sprite(0, 0, 'background');
        this.add.sprite(this.game.width/2 - 175, 10, 'cuadro');

        
        this.btnPlay = new PlaylantFramework.Button(this.game, this.game.width/2, 430, 'playBtn', null, 'newDropEra', 'ACCEDER', '0xFC7D4A', 40 );
        this.btnVolver = new PlaylantFramework.Button(this.game, this.game.width/2, 550, 'playBtn', null, 'newDropEra', 'VOLVER', '0x00D2FD', 40 );

        this.game.world.add(this.btnPlay);
        this.game.world.add(this.btnVolver);

        
        //events
        this.btnVolver.onClick = function(){
            self.game.state.start('MainMenu');
        }
        this.btnPlay.onClick = function(){

            
            sendMessage();
            //self.game.state.start('Game', true, false, true);
        }

	},
	comenzar: function(){

			
	},
	resize: function(){

		  	this.game.scaleMode = 2; //resize your window to see the stage resize too
            this.game.scale.setShowAll();
            this.game.scale.refresh();
	}
};