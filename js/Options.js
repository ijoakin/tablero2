
BasicGame.Options = function (game) {
    this.background = null;
	this.btnSound = null;
    this.btnMusic = null;
    this.btnReset = null;
    this.btnBack = null;
};

BasicGame.Options.prototype = {

	create: function () {
        var self = this;

        this.background = this.add.sprite(0, 0, 'background');

        this.btnSound = new PlaylantFramework.Button(this.game, this.game.width/2, 140, 'largeBtn', null, 'newDropEra', 'SONIDO: SI', '0x00D2FD', 40 );

        this.btnMusic = new PlaylantFramework.Button(this.game, this.game.width/2, 260, 'largeBtn', null, 'newDropEra', 'MUSICA: SI', '0x00D2FD', 40 );

        this.btnReset = new PlaylantFramework.Button(this.game, this.game.width/2, 380, 'largeBtn', null, 'newDropEra', 'TUTORIAL', '0x00D2FD', 40 );

        this.btnlevel = new PlaylantFramework.Button(this.game, this.game.width/2, 500, 'largeBtn', null, 'newDropEra', 'NIVEL: ' + level, '0x00D2FD', 40 );

        this.btnBack =  new PlaylantFramework.Button(this.game, 500, 700, 'playBtnPeque', null, 'newDropEra', 'Volver', '0xFC7D4A', 22);

        this.game.world.add(this.btnSound);
        this.game.world.add(this.btnMusic);
        this.game.world.add(this.btnReset);
        this.game.world.add(this.btnlevel);
        
        this.game.world.add(this.btnBack);



        if(this.game.SoundManager.sfxMuted){
            this.btnSound.setText('SONIDO: NO');
        }

        if(this.game.SoundManager.musicMuted){
            this.btnMusic.setText('MUSICA: NO');
        }

        //events
        this.btnBack.onClick = function(){
            self.game.state.start('MainMenu', true, false, {gameStart: false});
        };
         //events
        this.btnlevel.onClick = function(){
            if(level == 1)
                level = 2;
            else            
                level = 1;
            
            this.setText("NIVEL: "+ level);
        };
        this.btnReset.onClick = function(){
            var tutor = game.add.sprite(50,0, 'explicacion');

            tutor.scale.x = 1.5;
            tutor.scale.y = 1.2;

            this.game.world.add(tutor);



        };
        this.btnSound.onClick = function(){
            if(self.game.SoundManager.toggleSfxMuted()){
                this.setText("SONIDO: NO");
            }
            else {
                this.setText("SONIDO: SI");
            }
        };
        this.btnMusic.onClick = function(){
            if(self.game.SoundManager.toggleMusicMuted()){
                this.setText("MUSICA: NO");
            }
            else {
                this.setText("MUSICA: SI");
            }
        };

	},

	update: function () {

		//	Do some nice funky main menu effect here

	}

};
