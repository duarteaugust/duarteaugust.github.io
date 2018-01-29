$(document).ready(function(){

  var limiteInferior = document.body.offsetHeight +10;
  var limiteDireito = document.body.offsetWidth -120;
  var limiteSuperior = 20;
  var limiteEsquerdo = 20;

  //sorteando posição e direção de novas bolhas
  var direcaoXOrigemBolha;
  var posicaoXOrigemBolha;
  var direcaoYOrigemBolha;
  var posicaoYOrigemBolha;

  var ultimaBolhaCriada; 
  var qndeBolhasEstouradas;
  //var criandoBolas;     //setInterval
  //var debugando;      //setInterval
  var cronometrando;    //setInterval
  var tempoDecorrido;
  var segundo;
  var minuto;
  var hora;
  var bg = 2;
  var som = true;
    //var bubbleModelo = $("#bubbleModelo");



   function iniciarCronometro() { 
    
      if ( segundo < 59 ) {
         segundo++;
         if ( segundo < 10) { segundo = "0" + segundo }
      }else if ( segundo == 59 && minuto < 59) {
          segundo = 0 + "0";
          minuto++;
         
           if( minuto < 10 ) { minuto = "0" + minuto }
      }
      
      if ( minuto == 59 && segundo == 59 && hora < 23) {
         segundo = 0+"0";
         minuto = 0+"0";
         hora++;

         if ( hora < 10 ) { hora = "0" + hora }
      } else if ( minuto == 59 && segundo == 59 && hora == 23 ) {
         segundo = 0 + "0";
         minuto = 0 + "0";
         hora   = 0 + "0";
      }

      if (tempoDecorrido=="00:01:00") {
        finalizarJogo();
      }else{
        createBubble();
        tempoDecorrido = hora + ":" + minuto + ":" + segundo;
        debugar();
      }
   }


    function playSnd(){
      if (som){
        document.getElementById('snd').play()
      }
    }

    function changeBg(){
        if (bg == 1) {
          bg = 2;
          $("body").css("backgroundImage", "url(img/bg_bolhas.jpg)");
        } else {
          bg = 1;
          $("body").css({backgroundImage: "url(img/sky.jpg)", backgroundSize: "100% 100%"});
        }
    }


    function debugar(){
          $( "#info" ).html(function() {
              //return "<b> posXAvatar: </b>" +  posXAvatar + "<b>posYAvatar: </b>" + posYAvatar  + "   <b>Direção: </b>" + direcao +" | <b>inseto.posicaoX = </b>" + inseto.posicaoX +" | <b>inseto.posicaoY = </b>" + inseto.posicaoY;
              //return "qnteChamadasVoo: " + qnteChamadasVoo + "| qnteVooCompleto: " + qnteVooCompleto;
              return "<h3>Bolhas Estouradas: " + qndeBolhasEstouradas + "</h3> <h3>Cronometro: "+ tempoDecorrido +"</h3>";
          });
    }


function sortearDirecaoX(){
  numDirecaoX = Math.floor(Math.random() * limiteDireito);
  //console.log("limiteDireito: "+limiteDireito)
  //console.log("numDirecaoX" + numDirecaoX)
  return numDirecaoX;
}


function sortearDirecaoY(){
  numDirecaoY = Math.floor(Math.random() * (limiteInferior - 100));
  //console.log("limiteInferior: "+ limiteInferior)
  //console.log("numDirecaoY: "+ numDirecaoY)
  return numDirecaoY;
}

function moverBubble(bubble){
      $(bubble).animate({
            left: sortearDirecaoX(),
            top:  sortearDirecaoY(),
          },5000, function() {
            //console.log(this);
            moverBubble(this);
    });
}


function sortearCorDaBolha(){
  return Math.floor(Math.random()*255);
}

function sortearPosicaoInicialXBolha(){
  direcaoXOrigemBolha = Math.floor(Math.random()*2) +1;   //1=direita 2=esquerda
  //console.log("direcaoXOrigemBolha: "+ direcaoXOrigemBolha);
  switch (direcaoXOrigemBolha) {
      case 1:
          posicaoXOrigemBolha = Math.floor( Math.random() * 100 ) + limiteDireito;
          //console.log("posicaoXOrigemBolha: "+ posicaoXOrigemBolha);
          break;
      case 2:
          posicaoXOrigemBolha = Math.floor( Math.random() * 10 ) - (limiteEsquerdo + 200);
          //console.log("posicaoXOrigemBolha: "+ posicaoXOrigemBolha);
          break;
    } 
    return posicaoXOrigemBolha;
}



function sortearPosicaoInicialYBolha(){
  direcaoYOrigemBolha = Math.floor(Math.random()*2) +1;   //1=cima 2=baixo 
  //console.log("direcaoXOrigemBolha: "+ direcaoXOrigemBolha);
  switch (direcaoYOrigemBolha) {
      case 1:
          posicaoYOrigemBolha = Math.floor( Math.random() * 10 ) - limiteSuperior;
          //console.log("posicaoYOrigemBolha: "+ posicaoYOrigemBolha);
          break;
      case 2:
          posicaoYOrigemBolha = Math.floor( Math.random() * 100 ) + limiteInferior;
          //console.log("posicaoYOrigemBolha: "+ posicaoYOrigemBolha);
          break;
    } 
    return posicaoYOrigemBolha;
}

function excluirOuvinte(){

}


function criarOuvinte (bola){
  //console.log("bola: " + bola);
    $(bola).click(function(){
      //console.log(this);
      qndeBolhasEstouradas++;
      playSnd();
      $(this).parent('svg').remove();
    });
}

function adicionarClasse(bola){
  $(bola).addClass("bolaCriada");
}


function createBubble(){
      ultimaBolhaCriada++;
      //console.log("ultimaBolhaCriada: " + ultimaBolhaCriada);

      eval("var svg" + ultimaBolhaCriada + "= $('#svgModelo').clone().appendTo( '#jogo' )"); //duplicando a estrutura svg
      
      eval("$(svg" + ultimaBolhaCriada + ").attr('id', 'svg' + ultimaBolhaCriada)");  //alterando id da nova estrutura svg

      eval("$(svg" + ultimaBolhaCriada + ").show()");

      eval("$(svg" + ultimaBolhaCriada + ").css('left', sortearPosicaoInicialXBolha())");
      eval("$(svg" + ultimaBolhaCriada + ").css('top', sortearPosicaoInicialYBolha())");

      //marcando a bola com a classe bolaCriada para removela no fim do jogo
      eval("$('#svg" + ultimaBolhaCriada + "').attr('class', 'girar bolaCriada')");

      //$("#svg1 > circle").attr('id', 'bubble1');  
      eval("$('#svg" + ultimaBolhaCriada + "> circle').attr('id', 'bubble' + ultimaBolhaCriada)"); //alterando o id do circle interno da estrutura duplicada

      //alterando a cor da nova  bolha criada
      $("#cor").attr('style', 'stop-color:rgba('+sortearCorDaBolha()+','+sortearCorDaBolha() + ',' + sortearCorDaBolha() +', .5)');

      //moverBubble("#svg1");  
      moverBubble("#svg" + ultimaBolhaCriada);  //movendo a estrutura

      criarOuvinte(eval("bubble"+ultimaBolhaCriada));
    }


   function finalizarJogo(){
      clearInterval(cronometrando);

      for ( i = 1; i <= ultimaBolhaCriada; i++) {
         eval("svg" + i + " = null");
      };

      //clearInterval(criandoBolas);
      //$(".girar").remove();
       $(".bolaCriada").remove();
      document.getElementById('vento').pause();
      $("#info").hide();
      $("#score").html("<p>Vc conseguiu estourar  <strong>" + qndeBolhasEstouradas + " Bolhas! </strong></p>" );
      $("#telaFinal").show();
      changeBg();
   }


    function setupGame(){
        //debugando = setInterval(debugar, 100);
        $("#telaFinal").hide();
        $( "#info" ).hide();
        $("#svgModelo").hide(); 
    }



    function iniciarJogo(){
        qndeBolhasEstouradas = 0;
        ultimaBolhaCriada = 0;
        $( "#info" ).show();
        $("#telaInicial").hide();
        changeBg();
        segundo = 0 + "0";
        minuto = 0 + "0";
        hora = 0 + "0";
        tempoDecorrido = "00:00:00";
        debugar();
        cronometrando = setInterval(iniciarCronometro, 983);
        document.getElementById('vento').play();
        //criandoBolas  = setInterval(createBubble, 1200);
        //moverBubble("#svgModelo");
        //createBubble();
    }


    $("#iniciar").click(function(){
      iniciarJogo();
    });

    $("#jogarNovamente").click(function(){
      setupGame();
      iniciarJogo();
    });

    setupGame();
  
}); //end jquery