//VARIÁVEIS - RETÂNGULO menu//
var x = 190
var y = 197

//VARIÁVEIS - RETÂNGULO pergunta1//
var xx = 40
var yy = 172

//VARIÁVEIS - RETÂNGULO pergunta2//
var xxx = 45
var yyy = 172

//VARIÁVEIS - RETÂNGULO pergunta3//
var aa = 40
var bb = 172

//VARIÁVEIS - RETÂNGULO pergunta4//
var aaa = 40
var bbb = 172

//VARIÁVEIS - RETÂNGULO pergunta5//
var aaaa = 40
var bbbb = 172

//VARIÁVEIS - RETÂNGULO pergunta6//
var aaaaa = 40
var bbbbb = 172

//VARIÁVEIS - RETÂNGULO pergunta7//
var aaaaaa = 40
var bbbbbb = 172

//VARIÁVEIS - RETÂNGULO pergunta8//
var rx8 = 40
var ry8 = 172

//VARIÁVEIS - RETÂNGULO pergunta9//
var rx9 = 40
var ry9 = 172

//VARIÁVEIS - RETÂNGULO pergunta10//
var rx10 = 40
var ry10 = 172

var opcao = 1
var tela = 0

//IMAGEM CAPA DO JOGO//
let img1;
function preload() {
imgmenu = loadImage('capaMenu.png');
imgpergunta1 = loadImage('pergunta1.png');  
imgpergunta2 = loadImage('pergunta2.png'); 
imgpergunta3 = loadImage('pergunta3.png');
imgpergunta4 = loadImage('pergunta4.png');
imgpergunta5 = loadImage('pergunta5.png');
imgpergunta6 = loadImage('pergunta6.png');
imgpergunta7 = loadImage('pergunta7.png');
imgpergunta8 = loadImage('pergunta8.png');
imgpergunta9 = loadImage('pergunta9.png');
imgpergunta10 = loadImage('pergunta10.png');
imginstrucoes = loadImage('INSTRUÇÕES.png');
imgcreditos = loadImage('INSTRUÇÕES.png');
imgfalhou = loadImage('falhou.png');
imgparabens = loadImage('parabéns.png');
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(imgmenu);
  if (tela==0) {
      menu();
}
  if (tela==1) {
      pergunta1()
}
  if (tela==2) {
      instrucoes()
}
  if (tela==3) {
      créditos()
}
  if (tela==4) {
      pergunta2()
}
  if (tela==5) {
      pergunta3()
}
  if (tela==6) {
      pergunta4()
}
  if (tela==7) {
      pergunta5()
}
  if (tela==8) {
      pergunta6()
}
  if (tela==9) {
      pergunta7()
}
  if (tela==10) {
      pergunta8()
}
  if (tela==11) {
      pergunta9()
}
  if (tela==12) {
      pergunta10()
}
  if (tela==13){
      parabens()
}
  if (tela==14){
      telaerrou()
}
}

function menu() {
  image(imgmenu,0,0);
  fill("#000000")
  rect(x,y,210,45);
  textSize(30);
  stroke("#000000")
  fill("#FFFFFF")
  text('INICIAR',240,230)
  text('INSTRUÇÕES',200,310)
  text('CRÉDITOS',220,390)
}

function pergunta1() {
  image(imgpergunta1,0,0);
  fill("#FFFFFF")
  rect(xx,yy,238,40)
  textSize(20);
  stroke("#000000")
  fill("#000000")
  text(null,50,200)
  text(null,50,280)
  text(null,50,360)
  text(null,50,440)
}

function pergunta2() {
  image(imgpergunta2,0,0);
  fill("#FFFFFF")
  rect(xxx,yyy,510,40);
  stroke("#000000");
  fill("#000000");
  textSize(20);
  text(null,50,200)
  text(null,50,280)
  text(null,50,360)
  text(null,50,440)
}

function pergunta3() {
  image(imgpergunta3,0,0);
  fill("#FFFFFF")
  rect(aa,bb,450,40)
  textSize(20);
  stroke("#000000")
  fill("#000000")
  text(null,50,80)
  text(null,50,160)
  text(null,50,360)
  text(null,50,440)
}

function pergunta4() {
  image(imgpergunta4,0,0);
  fill("#FFFFFF")
  rect(aaa,bbb,230,40)
  textSize(20);
  stroke("#000000")
  fill("#000000")
  text(null,50,200)
  text(null,50,280)
  text(null,50,360)
  text(null,50,440)
}

function pergunta5() {
  image(imgpergunta5,0,0);
  fill("#FFFFFF")
  rect(aaaa,bbbb,450,40)
  textSize(20);
  stroke("#000000")
  fill("#000000")
  text(null,50, 200)
  text(null,50,280)
  text(null,50,360)
  text(null,50,440)
}

function pergunta6() {
  image(imgpergunta6,0,0);
  fill("#FFFFFF")
  rect(aaaaa,bbbbb,540,40)
  textSize(20);
  stroke("#000000")
  fill("#000000")
  text(null,50,200)
  text(null,50,280)
  text(null,50,360)
  text(null,50,440)
}

function pergunta7() {
  image(imgpergunta7,0,0);
  fill("#FFFFFF")
  rect(aaaaaa,bbbbbb,170,40)
  textSize(20);
  stroke("#000000")
  fill("#000000")
  text(null,50,200)
  text(null,50,280)
  text(null,50,360)
  text(null,50,440)
}

function pergunta8() {
  image(imgpergunta8,0,0);
  fill("#FFFFFF")
  rect(rx8,ry8,212,40)
  textSize(20);
  stroke("#000000")
  fill("#000000")
  text(null,50,200)
  text(null,50,280)
  text(null,50,360)
  text(null,50,440)
}

function pergunta9() {
  image(imgpergunta9,0,0);
  fill("#FFFFFF")
  rect(rx9,ry9,360,40)
  textSize(20);
  stroke("#000000")
  fill("#000000")
  text(null,50,200)
  text(null,50,280)
  text(null,50,360)
  text(null,50,440)
}

function pergunta10() {
  image(imgpergunta10,0,0);
  fill("#FFFFFF")
  rect(rx10,ry10,160,40)
  textSize(20);
  stroke("#000000")
  fill("#000000")
  text(null,50,200)
  text(null,50,280)
  text(null,50,360)
  text(null,50,440)
}

function telaerrou() {
image(imgfalhou,0,0)
}

function parabens() {
image(imgparabens,0,0)
}

function instrucoes(){
  //background(220)
  image(imginstrucoes,0,0)
}

function créditos(){
  image(imgcreditos,0,0);
}

function keyPressed(){
  
      // TELA conseguiu //
  if(tela==13 && key=="Escape") {
    tela=0;
  if(tela==0)
    opcao=1;
}  
  
  // TELA errou //
  if(tela==14 && key=="Escape") {
    tela=0;
  if(tela==0)
    opcao=1;
}    
  
  // TELA PERGUNTA 10 //
  if(tela==12 && key=="ArrowDown" && ry10<400) {
      ry10=ry10+80;
      opcao++;
  }
  if(tela==12 && key=="ArrowUp" && ry10>=200) {
      ry10=ry10-80;
      opcao--;
  }
  console.log(opcao)
  if(key=="Enter" && tela==12) {
    if(opcao==4)
      tela=13;
    else
      tela=14
    if(tela==0)
        opcao=1;
  }     
  
  // TELA PERGUNTA 9 //
  if(tela==11 && key=="ArrowDown" && ry9<400) {
      ry9=ry9+80;
      opcao++;
  }
  if(tela==11 && key=="ArrowUp" && ry9>=200) {
      ry9=ry9-80;
      opcao--;
  }
  console.log(opcao)
  if(key=="Enter" && tela==11) {
    if(opcao==1)
      tela=12;
    else
      tela=14
    if(tela==12)
        opcao=1;
  }         
  
  // TELA PERGUNTA 8 //
  if(tela==10 && key=="ArrowDown" && ry8<400) {
      ry8=ry8+80;
      opcao++;
  }
  if(tela==10 && key=="ArrowUp" && ry8>=200) {
      ry8=ry8-80;
      opcao--;
  }
  console.log(opcao)
  if(key=="Enter" && tela==10) {
    if(opcao==2)
      tela=11;
    else
      tela=14
    if(tela==11)
        opcao=1;
  } 
  
  // TELA PERGUNTA 7 //
  if(tela==9 && key=="ArrowDown" && bbbbbb<400) {
      bbbbbb=bbbbbb+80;
      opcao++;
  }
  if(tela==9 && key=="ArrowUp" && bbbbbb>=200) {
      bbbbbb=bbbbbb-80;
      opcao--;
  }
  console.log(opcao)
  if(key=="Enter" && tela==9) {
    if(opcao==3)
      tela=10;
    else
      tela=14
    if(tela==10)
        opcao=1;
  }   
  
  // TELA PERGUNTA 6 //
  if(tela==8 && key=="ArrowDown" && bbbbb<400) {
      bbbbb=bbbbb+80;
      opcao++;
  }
  if(tela==8 && key=="ArrowUp" && bbbbb>=200) {
      bbbbb=bbbbb-80;
      opcao--;
  }
  console.log(opcao)
  if(key=="Enter" && tela==8) {
    if(opcao==3)
      tela=9;
    else
      tela=14
    if(tela==9)
        opcao=1;
  }   
  
  // TELA PERGUNTA 5 //
  if(tela==7 && key=="ArrowDown" && bbbb<400) {
      bbbb=bbbb+80;
      opcao++;
  }
  if(tela==7 && key=="ArrowUp" && bbbb>=200) {
      bbbb=bbbb-80;
      opcao--;
  }
  console.log(opcao)
  if(key=="Enter" && tela==7) {
    if(opcao==1)
      tela=8;
    else
      tela=14
    if(tela==8)
        opcao=1;
  } 
  
  // TELA PERGUNTA 4 //
  if(tela==6 && key=="ArrowDown" && bbb<400) {
      bbb=bbb+80;
      opcao++;
  }
  if(tela==6 && key=="ArrowUp" && bbb>=200) {
      bbb=bbb-80;
      opcao--;
  }
  console.log(opcao)
  if(key=="Enter" && tela==6) {
    if(opcao==4)
      tela=7;
    else
      tela=14
    if(tela==7)
        opcao=1;
  } 
   
  // TELA PERGUNTA 3 //
  if(tela==5 && key=="ArrowDown" && bb<400) {
      bb=bb+80;
      opcao++;
  }
  if(tela==5 && key=="ArrowUp" && bb>=200) {
      bb=bb-80;
      opcao--;
  }
  console.log(opcao)
  if(key=="Enter" && tela==5) {
    if(opcao==2)
      tela=6;
    else
      tela=14
    if(tela==6)
        opcao=1;
  } 
  
  // TELA PERGUNTA 2 //
  if(tela==4 && key=="ArrowDown" && yyy<400) {
      yyy=yyy+80;
      opcao++;
  }
  if(tela==4 && key=="ArrowUp" && yyy>=200) {
      yyy=yyy-80;
      opcao--;
  }
  console.log(opcao)
  if(key=="Enter" && tela==4) {
    if(opcao==1)
      tela=5;
    else
      tela=14
    if(tela==5)
        opcao=1;
  }
  
  //pergunta1//
  if(key=="Enter" && tela==1) {
    if(opcao==3)
      tela=4;
    else
      tela=14
    if(tela==4)
        opcao=1;
  }
  
    
  // TELA MENU //
  if(key=="ArrowUp" && y>230 && tela==0) {
    y=y-80;
    opcao=opcao-1
  }
  if(key=="ArrowDown" && y<=300 && tela==0) {
    y=y+80;
    opcao=opcao+1
   }
  if(key=="Enter" && tela==0) {
    tela=opcao
    if(tela==1)
        opcao=1;
  }
  if(key=="Escape") {
    yy=172
    yyy=172
    bb=172
    bbb=172
    bbbb=172
    bbbbb=172
    bbbbbb=172
    ry8=172
    ry9=172
    ry10=172
    tela=0
  }
  
      // TELA PERGUNTA 1 //
  if(tela==1 && key=="ArrowDown" && yy<400) {
      yy=yy+80;
      opcao++;
  }
  if(tela==1 && key=="ArrowUp" && yy>=200) {
      yy=yy-80;
      opcao--;
  }
  console.log(opcao)
}
