let xBolinha = 300;
let yBolinha = 200;
let diametro = 50;
let raio = diametro/2;
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 100;
let xRaqueteOponente =585;
let yRaqueteOponente= 150;
let velocidadeYOponente;
let meusPontos= 0;
let pontosDoOponente = 0;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  background(0);
  fill('rgb(100%, 0%, 10%)');
  mostraBolinha();
  Movimentobolinha();
 verificaColisaoBolinha ();
  mostraRaquete(xRaquete,yRaquete);
   mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  movimentaRaqueteOponente();
  incluirPlacar();
  marcaPonto();
  
  function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
}

}
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function Movimentobolinha (){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
}

function verificaColisaoBolinha (){
  if (xBolinha + raio > width || xBolinha - raio < 0)
  { velocidadeXbolinha *= -1 }
  if (yBolinha + raio > height || yBolinha - raio <0){velocidadeYbolinha *= -1}
}
  
 function mostraRaquete(x,y){
   rect(x,y,raqueteComprimento,raqueteAltura)
 }
function movimentaMinhaRaquete(){
  if(keyIsDown (UP_ARROW))   {yRaquete -=10;}
  if(keyIsDown (DOWN_ARROW)) {yRaquete +=10;}
}

function movimentaRaqueteOponente (){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 - 30 ;
  yRaqueteOponente +=velocidadeYOponente 
}
function verificaColisaoRaqueteOponente (){
  if(xBolinha - raio < xRaqueteOponente + raqueteComprimento && yBolinha - raio < yRaqueteOponente + raqueteAltura && yBolinha + raio > yRaqueteOponente){velocidadeXBolinha *= -1;}
}
function incluirPlacar (){
  text(meusPontos,320,26)
  text(pontosDoOponente,340,26)
}
function marcaPonto(){
  if (xBolinha > 590) {meusPontos += 1;}
  if (xBolinha < 10) {pontosDoOponente += 1;}
}
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento 
  && yBolinha - raio < yRaquete + raqueteAltura 
  && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

  // stroke('magenta');
  //strokeWeight(8);
  //rect(xR,yR,cR,aR);
