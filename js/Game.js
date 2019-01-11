var SIN_FICHA = 0;
var FICHA_ROJA = 1;
var FICHA_VERDE  = 2;

var TURNO_VERDE = 3;
var TURNO_ROJO = 4;

var termino = false;

var casilleros=new Array(9);

var imagenes=new Array(9);
var turno;

var txtTurno;
var txtPuntosRojo;
var txtPuntosVerde;
var solo =false;

var varGame;
var puntosRojo = 0;
var puntosVerde =0;

var turnopic;

BasicGame.Game = function(game){
	
};
function mouseOver (image) {
	if(casilleros[image.x/71][image.y/71] == false)
		image.loadTexture('tablero', 0);

}
function mouseOut (image) {
	if(casilleros[image.x/71][image.y/71] == false)
	{
	 	image.loadTexture('tablero2', 0);
	}
}
function girarImagen(image, ToFicha){
	

	if(ToFicha == FICHA_ROJA)
	{
		image.loadTexture('ficha', 0);
		image.animations.add('animation', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);	
	}else{
		image.loadTexture('ficha', 14);
		image.animations.add('animation', [14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]);	
	}

    image.animations.play('animation', 25, false);

}
function verificarGirar(x,y,girar)
{
	if ((x>8) || (x<0))
		return false;
	if ((y>8) || (y<0))
		return false;

	
	if (turno == TURNO_ROJO){

		if(casilleros[x][y] == FICHA_VERDE)
		{

			var image = imagenes[x][y];
			if (girar)
						girarImagen(image, FICHA_ROJA);
			
			casilleros[x][y] = FICHA_ROJA;
		}
	}
	if (turno == TURNO_VERDE){
		if(casilleros[x][y] == FICHA_ROJA)
		{
			var image = imagenes[x][y];
			if (girar)
				girarImagen(image, FICHA_VERDE);
			casilleros[x][y] = FICHA_VERDE;
		}
	}
}
function ponerFicha(x,y,image)
{
	if(casilleros[x][y] == SIN_FICHA)
	{
		
		//la cruz
		verificarGirar(x+1,y, true);
		verificarGirar(x-1,y, true);
		verificarGirar(x,y+1, true);
		verificarGirar(x,y-1, true);
		//las puntas
		verificarGirar(x+1,y+1, true);
		verificarGirar(x+1,y-1, true);
		verificarGirar(x-1,y+1, true);
		verificarGirar(x-1,y-1, true);
		
		if(turno == TURNO_VERDE){
			image.loadTexture('ficha', 0);
			turno = TURNO_ROJO;

			casilleros[x][y] = FICHA_VERDE;
		}else if (turno== TURNO_ROJO)
		{
			image.loadTexture('ficha', 14);
			turno = TURNO_VERDE;

			casilleros[x][y] = FICHA_ROJA;
		}
		
		calcularPuntaje();

		return true;
	}
	return false;

}

function mouseClick(image){
	var frame = 0;
	var x = image.x/71;
	var y = image.y/71;

	ponerFicha(x,y,image);
	
}
function verificarCantidadVuelta(i, j)
{
	var cantidad = 0;

	if(i+1<9){
		if(casilleros[i+1][j]==FICHA_VERDE) cantidad++;
	}	
	if(i-1>0){
		if(casilleros[i-1][j]==FICHA_VERDE) cantidad++;
	}

	if(j+1<9){
		if(casilleros[i][j+1]==FICHA_VERDE) cantidad++;
	}
	if(j-1>0){
		if(casilleros[i][j-1]==FICHA_VERDE) cantidad++;
	}
	
	if((i+1<9)&&(j+1<9)){
		if(casilleros[i+1][j+1]==FICHA_VERDE) cantidad++;
	}
	if((i+1<9)&&(j-1>0)){
		if(casilleros[i+1][j-1]==FICHA_VERDE) cantidad++;
	}
	if((i-1>0)&&(j+1<9)){
		if(casilleros[i-1][j+1]==FICHA_VERDE) cantidad++;
	}
	if((i-1>0)&&(j-1>0)){
		if(casilleros[i-1][j-1]==FICHA_VERDE) cantidad++;
	}

	return cantidad;
}
function juegaMachine2()
{
	var jugo = false;
	var cantidad = 0;
	var cantidadM = 0;
	var im= 0;
	var jm= 0;

	for(i=0;i<9;i++)
	{	
		for(j=0;j<9;j++)
		{
			if(casilleros[i][j] == SIN_FICHA)
			{
				cantidad = verificarCantidadVuelta(i,j);
				if(cantidad > cantidadM){
					cantidadM = cantidad;
					im = i;
					jm = j;
				}
			}	
		}
	}
	//si no encontro nada bueno.
	//alert(cantidadM);
	if (cantidadM == 0)
	{
		juegaMachine();
	}
	else
	{
			var image = imagenes[im][jm];
			ponerFicha(im,jm,image);
			jugo=true;
	}
}
function juegaMachine()
{
	var jugo = false;
	while(!jugo)
	{
		x = Math.floor((Math.random() * 9));
		y = Math.floor((Math.random() * 9));

		if(casilleros[x][y] == SIN_FICHA)
		{
			var image = imagenes[x][y];
			ponerFicha(x,y,image);
			jugo=true;
		}
	}
}

function calcularPuntaje(){
	var styleTurno;
	var turnotexto;

	puntosRojo = 0;
	puntosVerde =0;

	if(turno == TURNO_VERDE){
		turnopic.loadTexture('turnoVerde',0);
	}
	else{
		turnopic.loadTexture('turnoRojo',0);
	}
	 

	

	for(i=0;i<9;i++)
	{	
		for(j=0;j<9;j++)
		{
			if(casilleros[i][j] == FICHA_ROJA)
				puntosRojo++;
			if(casilleros[i][j] == FICHA_VERDE)
				puntosVerde++;
		}
	}

	txtPuntosRojo.text = "" + puntosRojo;
	txtPuntosVerde.text = "" + puntosVerde;

	validarTermino();


	if((turno == TURNO_ROJO) && (solo) &&(!termino))
	{
		if (level==1)
			juegaMachine();
		else
			juegaMachine2();
	}

}


function validarTermino()
{
	var i,j;
	for(i=0;i<9;i++)
	{	
		for(j=0;j<9;j++)
		{
			if(casilleros[i][j] == SIN_FICHA)
			{
				return;
			}
		}
	}

	termino=true;

	
	varGame.showGanador();


	
}

BasicGame.Game.prototype = {
	init: function(gameType){
		solo = gameType;
	},
	preload: function(){
		for(i=0;i<9;i++)
		{
			casilleros[i]=new Array(9);
			imagenes[i]=new Array(9);
		}
		turno = TURNO_VERDE;

		this.createTablero();
		termino = false;
	},
	create: function(){

		varGame = this;
		game.add.sprite(10,642, 'cuadroRojo');
		game.add.sprite(90,642, 'cuadroVerde');

	    var styleTurno = { font: "20px Arial", fill: "#004455", align: "center" };
	    //txtTurno = this.game.add.text(295, 642, "Turno: Verde", styleTurno);

	    var stylePuntosRojo = { font: "50px Arial", fill: "#004455", align: "center" };
	    txtPuntosRojo = this.game.add.text(22, 650, "", stylePuntosRojo);
		
		var style = { font: "50px Arial", fill: "#004455", align: "center" };
	    txtPuntosVerde = this.game.add.text(100, 650, "", style);

	    

	    this.btnVolver = new PlaylantFramework.Button(this.game, 500, 700, 'playBtnPeque', null, 'newDropEra', 'Volver', '0xFC7D4A', 22);
	
 		//events
        this.btnVolver.onClick = function(){
            self.game.state.start('MainMenu');
        }


        turnopic = game.add.sprite(160,660, 'turnoVerde');

		this.game.world.add(turnopic);

        this.game.world.add(this.btnVolver);

        calcularPuntaje();
	},
	createTablero: function(){
		this.tablero = game.add.group();
		var i = 0;
		var j = 0;
		
		for(i=0;i<9;i++)
		{	
				for(j=0;j<9;j++)
				{
					var image = game.add.sprite(i*71,j*71, 'tablero2',0, this.tablero);
					image.inputEnabled = true;

					image.events.onInputOver.add(mouseOver, image);
					image.events.onInputOut.add(mouseOut, image);
					image.events.onInputDown.add(mouseClick, i, j,image);

					casilleros[i][j] = SIN_FICHA;
					imagenes[i][j] = image;
				}
		}
	},
	showGanador: function(){

		if(puntosRojo > puntosVerde)
		{
			this.gameTitle = this.add.sprite(0, 0, 'ganaRojo');
	 	}
	 	else
	 	{
 			this.gameTitle = this.add.sprite(0, 0, 'ganaVerde');
 		}

            this.gameTitle.x = (this.game.width-this.gameTitle.width) / 2;
            this.gameTitle.y = -this.gameTitle.height - 20;

            this.feedingTween = this.add.tween(this.gameTitle);
            this.feedingTween.to({y: 200}, 1000, Phaser.Easing.Bounce.Out, true, 100);

	}

};