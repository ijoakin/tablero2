var PlaylantFramework = {};

(function(){
    //Button
    var Button = function(game, x, y, backgroundKey, imgKey, fontKey, text, fontColor, fontSize)
    {
        var self = this;

        Phaser.Group.call(this, game, null);

        this.x = x;
        this.y = y;

        this.background = this.create(0, 0, backgroundKey);
        this.background.anchor.setTo(0.5, 0.5);
        this.background.inputEnabled=true;

        if(!(imgKey === null || imgKey === undefined)) {
            var img = this.create(0, 0, imgKey);
            img.anchor.setTo(0.5, 0.5);
        }

        if(text){
            this.text =  new Phaser.BitmapText(game, 0, 0, fontKey, text, fontSize);
            this.text.x = -this.text.width / 2;
            this.text.y = -this.text.height / 2;
            this.text.tint = fontColor;
            this.addChild(this.text);
        }

        //events
        var isMouseOver = false;
        this.background.events.onInputDown.add(function(){
            self.scale = new Phaser.Point(0.9, 0.9);
            isMouseOver = true;
        });
        this.background.events.onInputUp.add(function(){
            if(isMouseOver){
                self.scale = new Phaser.Point(1, 1);
                game.SoundManager.playSfx('click');
                self.onClick();
            }
        });
        this.background.events.onInputOut.add(function(){
            if(isMouseOver){
                isMouseOver = false;
                self.scale = new Phaser.Point(1, 1);
            }
        });

        this.setText = function(newText){
            if(self.text){
                self.removeChild(self.text);
                self.text =  new Phaser.BitmapText(game, 0, 0, fontKey, newText, fontSize);
                self.text.x = -self.text.width / 2;
                self.text.y = -self.text.height / 2;
                self.text.tint = fontColor;

                self.addChild(self.text);
            }
        }

        this.setEnabled = function(enabled){
            this.enabled = enabled;
            if(enabled){
                this.alpha = 1;
            }
            else
            {
                this.alpha = 0.5;
            }
            this.background.inputEnabled=enabled;
        }

        this.onClick = function(){};

        return this;
    };

    Button.prototype = Object.create(Phaser.Group.prototype);
    Button.prototype.constructor = Button;

    PlaylantFramework.Button = Button;

    //CoinLabel
    var CoinLabel = function(game, value, x, y, size)
    {
        var self = this;

        Phaser.Sprite.call(this, game, x, y);

        this.x = x;
        this.y = y;

        this.setValue = function(newValue){
            //obtengo la moneda q voy a usar
            var coinValue = 1;
            var moneda = '';
            for(var i = dataCoins.length-1; i >= 0; i--){
                value = Math.pow(1000, i);
                if(value <= (newValue>0?newValue:1) && 1000^i >= moneda.value){
                    moneda= dataCoins[i];
                    coinValue = value;
                    break;
                }
            }

            var valueToPrint = newValue / coinValue;
            valueToPrint = +valueToPrint.toFixed(1);

            var coin = new Phaser.Sprite(game, 0, 0, moneda);
            var text =  new Phaser.BitmapText(game, 0, 0, 'newDropEra', valueToPrint.toString(), size);
            text.x = -(text.textWidth / 2 + coin.width / 2) +size/6 -size/8;
            coin.x = text.textWidth / 2 - coin.width / 2 +size/6 +size/8

            //escalo la moneda al tamaño de la fuente
            var scale = text.textHeight / coin.height;
            coin.scale.x = scale;

            coin.scale.y = scale;

            self.removeChildren();
            self.addChild(text);
            self.addChild(coin);

            self.value = newValue;
        }

        this.setValue(value);

        return this;
    };

    CoinLabel.prototype = Object.create(Phaser.Sprite.prototype);
    CoinLabel.prototype.constructor = CoinLabel;

    PlaylantFramework.CoinLabel = CoinLabel;


    //Label
    var Label = function(game, value, x, y, size, alignment)
    {
        var self = this;

        Phaser.Sprite.call(this, game, x, y);

        this.x = x;
        this.y = y;

        this.alignment = alignment;

        this.setText = function(text){
            var bmp =  new Phaser.BitmapText(game, 0, 0, 'newDropEra', text, size);

            if(this.alignment=='left'){
                bmp.x = 0;
            }
            else if(this.alignment=='right'){
                bmp.x = -bmp.width;
            }
            else if(this.alignment=='center'){
                bmp.x = -bmp.width/2;
            }

            self.removeChildren();
            self.addChild(bmp);
        }
        this.setText(value);

        return this;
    };

    

    Label.prototype = Object.create(Phaser.Sprite.prototype);
    Label.prototype.constructor = Label;

    PlaylantFramework.Label = Label;
}());