$(document).ready(function(){


  var limiteInferior = document.body.offsetHeight +10;
  var limiteDireito = document.body.offsetWidth -120;
  var limiteSuperior = 20;
  var limiteEsquerdo = 20;
  
  var moverParaDireita = "+=50";
  var moverParaEsquerda = "-=50";
  var moverParaCima = "-=50";
  var moverParaBaixo = "+=50";

  var qndeInsetos = 0;
  var debugando;  //usado no setInterval

  var avatar =  $("#avatar");
  var tamanhoAvatar = $(avatar).css("height");
  var direcao;
  var posXAvatar = window.screen.availWidth / 2;
  var posYAvatar = window.screen.availHeight / 2;


  
  //var velocidadeAvatar = 200;

  var bg = 2;
  var qnteChamadasVoo = 0;
  var qnteVooCompleto = 0;


  var listaInsetos = new Array();
//$("#changeBg").hide();

  function criarInseto(inseto, posX, posY, dirX, dirY){
    qndeInsetos++;
    $(inseto).css({top: posY, left: posX, position:'absolute'});
    $(inseto).css("top", posY);
    inseto.posicaoX = $(inseto).css("left");
    inseto.posicaoY = $(inseto).css("top");
    inseto.livre = true;
    inseto.voando = setInterval(verificarPosicaoInseto, 500, inseto);
    inseto.deveMover = true;
    inseto.mudarDirecaoMovimentoXInseto = false;
    inseto.mudarDirecaoMovimentoYInseto = false;
    inseto.directionXInsetoFly = dirX;
    inseto.directionYInsetoFly = dirY;
    inseto.posLimiteMovimentoHorizontal = limiteEsquerdo;
    inseto.posLimiteMovimentoVertical = limiteSuperior;
    $(inseto).hide();
    listaInsetos.push(inseto);
    console.log(listaInsetos);
    //
  }

  function iniciarJogo(){
      for (i = 0; i < listaInsetos.length; i++) { 
          moverInseto(listaInsetos[i] );
           $(listaInsetos[i]).show();
      }
      console.log("clicou em "+this);
      $(avatar).show();
      $( "#info" ).show();
      $("#telaInicial").hide();
      changeBg();
  }

  $("#iniciar").click(function(){
      iniciarJogo();
  })

  $("#jogarNovamente").click(function(){
    alert(this);
    setupGame();
    iniciarJogo();
  });

      function changeBg(){
        //$("#changeBg").click(function(){
          if (bg == 1) {
            bg = 2;
            $("body").css("backgroundImage", "url(img/swamp.jpg)");
          } else{
            bg = 1;
            $("body").css("backgroundImage", "url(css/grama.jpg)");
          }
        //})
      }


    function debugar(){
          $( "#info" ).html(function() {
              //return "<b> posXAvatar: </b>" +  posXAvatar + "<b>posYAvatar: </b>" + posYAvatar  + "   <b>Direção: </b>" + direcao +" | <b>inseto.posicaoX = </b>" + inseto.posicaoX +" | <b>inseto.posicaoY = </b>" + inseto.posicaoY;
              //return "qnteChamadasVoo: " + qnteChamadasVoo + "| qnteVooCompleto: " + qnteVooCompleto;
              return "Quantidade de Insetos Restantes: <b>" + qndeInsetos + "</b>";
          });
    }


/*
  var dengue = $("#dengue");
  $(dengue).css("left", 700);
  $(dengue).css("top", 800);
  dengue.posicaoX = $(dengue).css("left");
  dengue.posicaoY = $(dengue).css("top");
  dengue.livre = true;
  dengue.voando = setInterval(verificarPosicaoInseto, 500, dengue);
  dengue.deveMover = true;
  dengue.mudarDirecaoMovimentoXInseto = false;
  dengue.mudarDirecaoMovimentoYInseto = false;
  dengue.directionXInsetoFly = moverParaEsquerda;
  dengue.directionYInsetoFly = moverParaCima;
  dengue.posLimiteMovimentoHorizontal = limiteEsquerdo;
  dengue.posLimiteMovimentoVertical = limiteSuperior;


  var mosquito = $("#mosquito");
  $(mosquito).css("left", 100);
  $(mosquito).css("top", 100);
  mosquito.posicaoX = parseInt($(mosquito).css("left"));
  mosquito.posicaoY = parseInt($(mosquito).css("top"));
  mosquito.livre = true;
  mosquito.voando = setInterval(verificarPosicaoInseto, 500, mosquito);
  mosquito.deveMover = true;
  mosquito.mudarDirecaoMovimentoXInseto = false;
  mosquito.mudarDirecaoMovimentoYInseto = false;
  mosquito.directionXInsetoFly = moverParaDireita;
  mosquito.directionYInsetoFly = moverParaBaixo;
  mosquito.posLimiteMovimentoHorizontal = limiteDireito;
  mosquito.posLimiteMovimentoVertical = limiteInferior;
  */


  //var directionXInsetoFl_y = moverParaDireita;
  //var directionYInsetoFl_y = moverParaBaixo;

  /*var inseto.posicaoX;
  var inseto.posicaoY;
  var mosquitoLivre = true;*/
  //var inseto.mudarDirecaoMovimentoXInseto = false;
  //var inseto.mudarDirecaoMovimentoYInseto = false;




/*
var n = Math.floor((Math.random() * largura) + 1);
console.log(window.screen.availWidth);
console.log(screen.width);
console.log(document.body.offsetWidth)
console.log(document.body.scrollWidth)

function moverInseto(inseto){
    $(inseto).animate({
    left: inseto.directionXInsetoFly,
    top:  inseto.directionYInsetoFly,
  },1000, function(){
    //alert("moveu");
  });
}
moverInseto(dengue);
*/


//atualiza informação da posição do inseto para verificar colisão
function verificarPosicaoInseto(inseto){
  //console.log(inseto.posicaoX);
   inseto.posicaoX = parseInt($(inseto).css("left"));
   inseto.posicaoY = parseInt($(inseto).css("top"));
}


function changeDirectionXFlyInseto(inseto){
  if (inseto.directionXInsetoFly == moverParaDireita) {
    inseto.directionXInsetoFly = moverParaEsquerda;
    inseto.posLimiteMovimentoHorizontal = limiteEsquerdo;
  }else if (inseto.directionXInsetoFly == moverParaEsquerda) {
    inseto.directionXInsetoFly = moverParaDireita;
    inseto.posLimiteMovimentoHorizontal = limiteDireito;
  };
  if (inseto.livre) { moverInseto(inseto) };
}

function changeDirectionYFlyInseto(inseto){
  if (inseto.directionYInsetoFly == moverParaBaixo) {
    inseto.directionYInsetoFly = moverParaCima;
    inseto.posLimiteMovimentoVertical = limiteSuperior;
  }else if (inseto.directionYInsetoFly == moverParaCima) {
    inseto.directionYInsetoFly = moverParaBaixo;
    inseto.posLimiteMovimentoVertical = limiteInferior;
  };
  if (inseto.livre) { moverInseto(inseto) };
}



function moverInseto(inseto){
  //console.log(inseto.voando);
      qnteChamadasVoo++;
      //alert("inseto." +inseto.posicaoX);
      $(inseto).animate({
        left: inseto.directionXInsetoFly,
        top:  inseto.directionYInsetoFly
      },500, function() {
        qnteVooCompleto++;

      if (inseto.directionXInsetoFly == moverParaDireita) {
            if (inseto.posicaoX < inseto.posLimiteMovimentoHorizontal) {
              inseto.deveMover = true;
              inseto.mudarDirecaoMovimentoXInseto = false;
            }else{
              //console.log("inseto.posicaoX: "+inseto.posicaoX+"| limiteDireito: "+limiteDireito)
              //changeDirectionXFlyInseto();
              inseto.deveMover = false;
              inseto.mudarDirecaoMovimentoXInseto = true;
            }
      }else{
            if (inseto.posicaoX > inseto.posLimiteMovimentoHorizontal) {
              inseto.deveMover = true;
              inseto.mudarDirecaoMovimentoXInseto = false;
            }else{
              inseto.deveMover = false;
              inseto.mudarDirecaoMovimentoXInseto = true;
            }
      };


      if (inseto.directionYInsetoFly == moverParaBaixo) {
            if (inseto.posicaoY < inseto.posLimiteMovimentoVertical) {
              inseto.deveMover = true;
              inseto.mudarDirecaoMovimentoYInseto = false;
            }else{
              inseto.deveMover = false;
              inseto.mudarDirecaoMovimentoYInseto = true;
            }
      }else{
            if (inseto.posicaoY > inseto.posLimiteMovimentoVertical) {
              inseto.deveMover = true;
              inseto.mudarDirecaoMovimentoYInseto = false;
            }else{
              inseto.deveMover = false;
              inseto.mudarDirecaoMovimentoYInseto = true;
            }
      };

      verificarColisao(inseto);

      if (inseto.mudarDirecaoMovimentoXInseto) { changeDirectionXFlyInseto(inseto); inseto.deveMover = false; };

      if (inseto.mudarDirecaoMovimentoYInseto) { changeDirectionYFlyInseto(inseto); inseto.deveMover = false; };

      if (inseto.deveMover) { moverInseto(inseto) };

    }); //end animate
}//end moverInseto   

    function girar(direcao){
          $(avatar).removeClass("girarPraCima");
          $(avatar).removeClass("girarPraBaixo");
          $(avatar).removeClass("girarPraDireita");
          $(avatar).removeClass("girarPraEsquerda");
          $(avatar).addClass("girarPra"+direcao);
    }


    function verificarColisao(inseto){
          
        if (inseto.posicaoX > posXAvatar) {
          posXMaior = inseto.posicaoX;
          posXMenor = posXAvatar;
        }else{
          posXMaior = posXAvatar;
          posXMenor = inseto.posicaoX;
        }

        if (inseto.posicaoY > posYAvatar) {
          posYMaior = inseto.posicaoY;
          posYMenor = posYAvatar;
        }else{
          posYMaior = posYAvatar;
          posYMenor = inseto.posicaoY;
        }

        if ((posXMaior - posXMenor) < 40) {
                  if ((posYMaior - posYMenor) < 40) {
                    //alert("sapo e mosquito encostaram");
                    $(inseto).remove();
                    clearInterval(inseto.voando);
                    //console.log(inseto.voando);
                    inseto.livre = false;
                    inseto.deveMover = false;
                    inseto.posicaoX = null;
                    inseto.posicaoY = null;
                    $(avatar).css("width", "+=20");
                    qndeInsetos--;

                    if (qndeInsetos == 0) {
                      $(avatar).hide();
                      $("#info").hide();
                      $("#telaFinal").show();
                      changeBg();
                      
                      
                    };
                };
        };

          /*$( "#info" ).html(function() {
          //return "<b> posXAvatar: </b>" +  posXAvatar + "<b>posYAvatar: </b>" + posYAvatar  + "   <b>Direção: </b>" + direcao +" | <b>inseto.posicaoX = </b>" + inseto.posicaoX +" | <b>inseto.posicaoY = </b>" + inseto.posicaoY;
          //console.log("posXAvatar: "+posXAvatar);
          //console.log("posYAvatar: "+posYAvatar);
          console.log("limiteInferior = "+limiteInferior);
          console.log("limiteSuperior = "+limiteSuperior);
          console.log("limiteEsquerdo = "+limiteEsquerdo);
          console.log("limiteDireito = "+limiteDireito);
          });*/

    } // fim verificarColisao



      function moveUp (){
          direcao = "Cima";
          girar(direcao);
          $(avatar).animate({
            top: "-=10",
          }, 10, function() {
                  posYAvatar = parseInt($(avatar).css("top"));
                 if (posYAvatar < limiteSuperior ) {
                    moveDown();
                  }
                  //verificarColisao();
          });
      }

      function moveDown(){
              direcao = "Baixo";
              girar(direcao);
              $(avatar).animate({
                top: "+=10",
              }, 10, function() {
                  posYAvatar = parseInt($(avatar).css("top")) + 100;
                  //offset = pontoInferior.offset();
                  if (posYAvatar > limiteInferior ) {
                    moveUp();
                  }
                  //verificarColisao();
              });//end animate
      }

      function moveLeft(){
           direcao = "Esquerda";
           girar(direcao);
          $(avatar).animate({
            left: "-=10",
          }, 10, function(){
            posXAvatar = parseInt($(avatar).css("left"));
            if (posXAvatar < limiteEsquerdo ) {
                    moveRight();
             }
             //verificarColisao();
          });//end animate
      }
                   
      function moveRight(){
         direcao = "Direita";
         girar(direcao);
          $(avatar).animate({
            left: "+=10",
          }, 10, function() {
            // Animation complete.
            posXAvatar = parseInt($(avatar).css("left")+100);
            if (posXAvatar > limiteDireito ) {
                    moveLeft();
             }
          });
      }



      $(document).keydown(function(e) {
        if ( e.which == 37 ) { moveLeft(); }
        if ( e.which == 38 ) { moveUp(); }
        if ( e.which == 39 ) { moveRight(); }
        if ( e.which == 40 ) { moveDown();  }
      });  //end keydown
 


  /* starting game*/
  //moverInseto(mosquito);
  //moverInseto(dengue);
  //$("#sapao").hide();


  function setupGame(){
      debugando = setInterval(debugar, 100);

      var aranha = $("#aranha");
      criarInseto(aranha, 800, 700, moverParaEsquerda, moverParaCima);

      var ladybug = $("#ladybug");
      criarInseto(ladybug, 300, 250, moverParaDireita, moverParaCima);

      var dengue = $("#dengue");
      criarInseto(dengue, 450, 650, moverParaEsquerda, moverParaBaixo);

      var mosquito = $("#mosquito");
      criarInseto(mosquito, 150, 550, moverParaDireita, moverParaCima);

      var besouro = $("#besouro");
      criarInseto(besouro, 250, 350, moverParaEsquerda, moverParaCima);
      //$("#mydiv").css({top: 200, left: 200, position:'absolute'});

      $("#telaFinal").hide();
      $(avatar).css("left", posXAvatar);
      $(avatar).css("top", posYAvatar);
      $(avatar).hide();
      $( "#info" ).hide();
    }

    setupGame();

}); //end jquery