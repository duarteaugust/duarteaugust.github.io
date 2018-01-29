$(document).ready(function(){

  var limiteInferior = document.body.offsetHeight +10;
  var limiteDireito = document.body.offsetWidth -120;
  var limiteSuperior = 20;
  var limiteEsquerdo = 20;
  
  var moverParaDireita = "+=50";
  var moverParaEsquerda = "-=50";
  var moverParaCima = "-=50";
  var moverParaBaixo = "+=50";

  var qndeInsetos;
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

  var tempoDecorrido;
  var cronometrando;
  var segundo;
  var minuto;
  var hora;
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
    //console.log("inseto.directionYInsetoFly: "+inseto.directionYInsetoFly+ "|  inseto.directionYInsetoFly"+ inseto.directionYInsetoFly);
    inseto.posLimiteMovimentoHorizontal = verificarLimiteHorizontal(dirX);
    inseto.posLimiteMovimentoVertical = verificarLimiteVertical(dirY);
    $(inseto).hide();
    listaInsetos.push(inseto);
  }

  function verificarLimiteHorizontal(dirX){
    if (dirX == moverParaEsquerda) {
      return limiteEsquerdo;
    }else{
      return limiteDireito;
    }
  }

    function verificarLimiteVertical(dirY){
    if (dirY == moverParaCima) {
      return limiteSuperior;
    }else{
      return limiteInferior;
    }
  }

  function iniciarJogo(){
      for (i = 0; i < listaInsetos.length; i++) { 
          moverInseto(listaInsetos[i] );
           $(listaInsetos[i]).show();
      }
      $(avatar).show();
      $( "#info" ).show();
      $("#telaInicial").hide();
      changeBg();
      segundo = 0+"0";
      minuto = 0+"0";
      hora = 0+"0";
      tempoDecorrido = "00:00:00";
      cronometrando = setInterval(iniciarCronometro, 983);
  }

  $("#iniciar").click(function(){
      iniciarJogo();
  })

  $("#jogarNovamente").click(function(){
    setupGame();
    iniciarJogo();
  });


 
   function iniciarCronometro() { 
      if (segundo < 59) {
         segundo++;
         if ( segundo < 10) { segundo = "0" + segundo }
      }else if ( segundo == 59 && minuto < 59) {
            segundo = 0+"0";
          minuto++;
         
           if(minuto < 10) {minuto = "0" + minuto}
      }
      
      if ( minuto == 59 && segundo == 59 && hora < 23) {
         segundo = 0+"0";
         minuto = 0+"0";
         hora++;

         if ( hora < 10 ) { hora = "0" + hora }
      } else if ( minuto == 59 && segundo == 59 && hora == 23) {
           segundo = 0+"0";
         minuto = 0+"0";
         hora = 0+"0";
      }

      tempoDecorrido = hora +":"+ minuto +":"+ segundo;
      //$("#cronometro").val(hora +":"+ minuto +":"+ segundo);
      //form.cronometro.value = hora +":"+ minuto +":"+ segundo
   }





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
              return "<h3>Insetos Restantes: " + qndeInsetos + "</h3> <h3>Cronometro: "+ tempoDecorrido +"</h3>";
          });
    }


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
      qnteChamadasVoo++;
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
                    $(inseto).hide();
                    clearInterval(inseto.voando);
                    inseto.livre = false;
                    inseto.deveMover = false;
                    inseto.posicaoX = null;
                    inseto.posicaoY = null;
                    $(avatar).css("width", "+=20");
                    qndeInsetos--;

                    if (qndeInsetos == 0) {
                      $(avatar).hide();
                      $("#info").hide();
                      //tempoDecorrido = $("#cronometro").val();
                      $("#marcaTempo").html("<h3>O seu tempo foi de: <b>" + tempoDecorrido + "</b></h3>" );
                      $("#telaFinal").show();
                      changeBg();
                      //console.log("tempo total = "+$("#cronometro").val());
                      clearInterval(cronometrando);
                    };
                };
        };
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
  var aranha1 = $("#aranha1");
  var aranha2 = $("#aranha2");
  var ladybug = $("#ladybug");
  var dengue1 = $("#dengue1");
  var dengue2 = $("#dengue2");
  var dengue3 = $("#dengue3");
  var mosquito = $("#mosquito");
  var besouro = $("#besouro");


  function setupGame(){
      debugando = setInterval(debugar, 100);
      //listaInsetos = [];
      listaInsetos.length = 0;
      //console.log("-->"+listaInsetos);
      qndeInsetos = 0;

      criarInseto(aranha1, 800, 700, moverParaEsquerda, moverParaCima);
      criarInseto(aranha2, 240, 420, moverParaDireita, moverParaBaixo);
      criarInseto(ladybug, 300, 250, moverParaDireita, moverParaBaixo);
      criarInseto(dengue1, 450, 650, moverParaEsquerda, moverParaBaixo);
      criarInseto(dengue2, 490, 390, moverParaDireita, moverParaCima);
      criarInseto(dengue3, 154, 150, moverParaDireita, moverParaCima);
      criarInseto(mosquito, 150, 550, moverParaDireita, moverParaCima);
      criarInseto(besouro, 250, 350, moverParaEsquerda, moverParaCima);

      $("#telaFinal").hide();
      $(avatar).css("left", posXAvatar);
      $(avatar).css("top", posYAvatar);
      $(avatar).css("width", "86px")
      $(avatar).hide();
      $( "#info" ).hide();
    }

    setupGame();

}); //end jquery