$(document).ready(function(){

var avatar =  $("#avatar");
var direcao;
var tamanhoAvatar = $(avatar).css("height");
var bg = 1;

var limiteInferior = document.body.offsetHeight -120;
var limiteDireito = document.body.offsetWidth -120;
var limiteSuperior = 20;
var limiteEsquerdo = 20;

var posXAvatar = window.screen.availWidth / 2;
var posYAvatar = window.screen.availHeight / 2;
$(avatar).css("left", posXAvatar);
$(avatar).css("top", posYAvatar);

var mosquito = $("#mosquito");
$(mosquito).css("left", 100);
$(mosquito).css("top", 100);
var posXMosquito;
var posYMosquito;
var mosquitoLivre = true;
//var offset;
//var n = Math.floor((Math.random() * largura) + 1);
//var pontoInferior = $("#linhaInferior");
//parseFloat($("#linhaInferior").css("top"));
//parseFloat($("#linhaSuperior").css("top"));
//alert(limiteSuperior)
/*console.log(window.screen.availWidth);
console.log(screen.width);
console.log(document.body.offsetWidth)
console.log(document.body.scrollWidth)*/


function verificarPosMosquito(){
  //console.log(posXMosquito);
   posXMosquito = parseInt($(mosquito).css("left"));
   posYMosquito = parseInt($(mosquito).css("top"));
}

var voarParaDireita = "+=100";
var voarParaEsquerda = "-=100";
var voarParaCima = "-=100";
var voarParaBaixo = "+=100";

var mosquitoVoando = setInterval(verificarPosMosquito, 500);
var posLimiteVooHorizontal = limiteDireito;
var posLimiteVooVertical = limiteInferior;

var directionXMosquitoFly = voarParaDireita;
var directionYMosquitoFly = voarParaBaixo;




function changeDirectionXFlyMosquito(){
  if (directionXMosquitoFly == voarParaDireita) {
    directionXMosquitoFly = voarParaEsquerda;
    posLimiteVooHorizontal = limiteEsquerdo;
  }else if (directionXMosquitoFly == voarParaEsquerda) {
    directionXMosquitoFly = voarParaDireita;
    posLimiteVooHorizontal = limiteDireito;
  };
  if (mosquitoLivre) { mosquitoVoar() };
}

function changeDirectionYFlyMosquito(){
  if (directionYMosquitoFly == voarParaBaixo) {
    directionYMosquitoFly = voarParaCima;
    posLimiteVooVertical = limiteSuperior;
  }else if (directionYMosquitoFly == voarParaCima) {
    directionYMosquitoFly = voarParaBaixo;
    posLimiteVooVertical = limiteInferior;
  };
  if (mosquitoLivre) { mosquitoVoar() };
}



var mosquitoDeveVoar = true;
var mudarDirecaoVooXMosquito = false;
var mudarDirecaoVooYMosquito = false;

var qnteChamadasVoo = 0;
var qnteVooCompleto = 0;

function mosquitoVoar(){
  qnteChamadasVoo++;
  $(mosquito).animate({
    left: directionXMosquitoFly,
    top:  directionYMosquitoFly
  },500, function(){
    qnteVooCompleto++;

//a liberação geral depende da liberação de cada um, então, para executar o voo, deve-se verificar se cada um liberou... para liberar GERAL KKK


    if (directionXMosquitoFly == voarParaDireita) {
          if (posXMosquito < posLimiteVooHorizontal) {
            mosquitoDeveVoar = true;
            mudarDirecaoVooXMosquito = false;
          }else{
            //console.log("posXMosquito: "+posXMosquito+"| limiteDireito: "+limiteDireito)
            //changeDirectionXFlyMosquito();
            mosquitoDeveVoar = false;
            mudarDirecaoVooXMosquito = true;
          }
    }else {
      //if (directionXMosquitoFly == voarParaEsquerda) - se não esta voando para direita, então já está para esquerda...
          if (posXMosquito > posLimiteVooHorizontal) {
            mosquitoDeveVoar = true;
            mudarDirecaoVooXMosquito = false;
          }else{
            //console.log("posXMosquito: "+posXMosquito+"| limiteDireito: "+limiteDireito)
            //console.log("fim do voo do mosquito");
            //changeDirectionXFlyMosquito();
            mosquitoDeveVoar = false;
            mudarDirecaoVooXMosquito = true;
          }
    };


    if (directionYMosquitoFly == voarParaBaixo) {
          if (posYMosquito < posLimiteVooVertical) {
            mosquitoDeveVoar = true;
            mudarDirecaoVooYMosquito = false;
          }else{
            //changeDirectionYFlyMosquito();
            mosquitoDeveVoar = false;
            mudarDirecaoVooYMosquito = true;
          }
    }else  {
      //if (directionYMosquitoFly == voarParaCima)  se não está voando para baixo, já está voando pra cima
          if (posYMosquito > posLimiteVooVertical) {
            mosquitoDeveVoar = true;
            mudarDirecaoVooYMosquito = false;
          }else{
            //changeDirectionYFlyMosquito();
            mosquitoDeveVoar = false;
            mudarDirecaoVooYMosquito = true;
          }
    };

    if (mudarDirecaoVooXMosquito) { changeDirectionXFlyMosquito(); mosquitoDeveVoar = false; };

    if (mudarDirecaoVooYMosquito) { changeDirectionYFlyMosquito(); mosquitoDeveVoar = false; };

    if (mosquitoDeveVoar) { mosquitoVoar() };

  }); //end animate
}//end mosquitoVoar
mosquitoVoar();




$("#changeBg").click(function(){
  if (bg == 1) {
    bg = 2;
    $("body").css("backgroundImage", "url(css/grid.png)");
  } else{
    bg = 1;
    $("body").css("backgroundImage", "url(css/grama.jpg)");
  }
})






    function debugar(){


          $( "#info" ).html(function() {
              //return "<b> posXAvatar: </b>" +  posXAvatar + "<b>posYAvatar: </b>" + posYAvatar  + "   <b>Direção: </b>" + direcao +" | <b>posXMosquito = </b>" + posXMosquito +" | <b>posYMosquito = </b>" + posYMosquito;
              return "qnteChamadasVoo: " + qnteChamadasVoo + "| qnteVooCompleto: " + qnteVooCompleto;
          });
    }

    setInterval(debugar, 100);

    function girar(direcao){
          $(avatar).removeClass("girarPraCima");
          $(avatar).removeClass("girarPraBaixo");
          $(avatar).removeClass("girarPraDireita");
          $(avatar).removeClass("girarPraEsquerda");
          $(avatar).addClass("girarPra"+direcao);
    }

    function verificarColisao(){
          
          $( "#info" ).html(function() {
              //return "<b> posXAvatar: </b>" +  posXAvatar + "<b>posYAvatar: </b>" + posYAvatar  + "   <b>Direção: </b>" + direcao +" | <b>posXMosquito = </b>" + posXMosquito +" | <b>posYMosquito = </b>" + posYMosquito;
          });
        //console.log("posXAvatar: "+posXAvatar);
        //console.log("posYAvatar: "+posYAvatar);
        console.log("limiteInferior = "+limiteInferior);
        console.log("limiteSuperior = "+limiteSuperior);
        console.log("limiteEsquerdo = "+limiteEsquerdo);
        console.log("limiteDireito = "+limiteDireito);

        if (posXMosquito > posXAvatar) {
          posXMaior = posXMosquito;
          posXMenor = posXAvatar;
        }else{
          posXMaior = posXAvatar;
          posXMenor = posXMosquito;
        }

        if (posYMosquito > posYAvatar) {
          posYMaior = posYMosquito;
          posYMenor = posYAvatar;
        }else{
          posYMaior = posYAvatar;
          posYMenor = posYMosquito;
        }

        if ((posXMaior - posXMenor) < 25) {
          //alert("sapo e mosquito muito próximos");
                  if ((posYMaior - posYMenor) < 25) {
                  //alert("sapo e mosquito encostaram");
                    $(mosquito).remove();
                    clearInterval(mosquitoVoando);
                    mosquitoLivre = false;
                    posYMosquito = null;
                    posXMosquito = null;

                };
        };
    }

      function moveUp (){
          direcao = "Cima";
          girar(direcao);
          $(avatar).animate({
            top: "-=10",
          }, 1, function() {
                //debugar();
                  posYAvatar = parseFloat($(avatar).css("top"));
                 if (posYAvatar < limiteSuperior ) {
                    moveDown();
                  }
                  verificarColisao();
          });
      }

      function moveDown(){
              direcao = "Baixo";
              girar(direcao);
              $(avatar).animate({
                top: "+=10",
              }, 10, function() {
                  posYAvatar = parseFloat($(avatar).css("top")) + 100;
                  //offset = pontoInferior.offset();
                    //alert("posFimAvatar = "+ posFimAvatar + " | limiteInferior = " + limiteInferior);
                  if (posYAvatar > limiteInferior ) {
                    moveUp();
                  }
                  verificarColisao();
              });//end animate
      }

      function moveLeft(){
           direcao = "Esquerda";
           girar(direcao);
          $(avatar).animate({
            left: "-=10",
            //top: "-=10",
            //height: "toggle"
          }, 10, function(){
            posXAvatar = parseFloat($(avatar).css("left"));
            if (posXAvatar < limiteEsquerdo ) {
                    moveRight();
             }
             verificarColisao();
          });//end animate
      }
                   
      

      function moveRight(){
         direcao = "Direita";
         girar(direcao);
          $(avatar).animate({
            left: "+=10",
           // top: "+=10",
            //height: "toggle"
          }, 10, function() {
            // Animation complete.
            posXAvatar = parseFloat($(avatar).css("left")+100);
            //debugar();
            if (posXAvatar > limiteDireito ) {
                    moveLeft();
             }
             verificarColisao();
          });
      }


      $(document).keydown(function(e) {
        
        if ( e.which == 37 ) {
         moveLeft();
        }

        if ( e.which == 38 ) {
          moveUp();
        }

        if ( e.which == 39 ) {
             moveRight();
        }

        if ( e.which == 40 ) {
            moveDown();
        }//end if

      });  //end keydown
 

}); //end jquery