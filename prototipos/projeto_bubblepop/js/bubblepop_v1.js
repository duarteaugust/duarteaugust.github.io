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

  var criandoBolas;
  
  var ultimaBolhaCriada = 0;
  var qndeBolhasEstouradas;
  var debugando;  //usado no setInterval
  var bg = 2;
  var som = true;


  var tempoDecorrido;
  var cronometrando;
  var segundo;
  var minuto;
  var hora;
  
  var bubbleModelo = $("#bubbleModelo");
  //var bubbleModeloSvg = $("#svgModelo");  //aki
  
  /*var moverParaDireita = "+=50";
  var moverParaEsquerda = "-=50";
  var moverParaCima = "-=50";
  var moverParaBaixo = "+=50";
  var qnteChamadasVoo = 0;
  var qnteVooCompleto = 0;
  var direcao;
  var posXAvatar = window.screen.availWidth / 2;
  var posYAvatar = window.screen.availHeight / 2;
  //var velocidadeAvatar = 200;
  */


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
      tempoDecorrido = hora + ":" + minuto + ":" + segundo;
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


function sortearPosicaoInicialXBolha(){
  direcaoXOrigemBolha = Math.floor(Math.random()*2) +1;   //1=direita 2=esquerda
  //console.log("direcaoXOrigemBolha: "+ direcaoXOrigemBolha);
  switch (direcaoXOrigemBolha) {
      case 1:
          console.log("dois");
          posicaoXOrigemBolha = Math.floor( Math.random() * 100 ) + limiteDireito;
          console.log("posicaoXOrigemBolha: "+ posicaoXOrigemBolha);
          break;
      case 2:
          console.log("quatro");
          posicaoXOrigemBolha = Math.floor( Math.random() * 10 ) - (limiteEsquerdo + 200);
          console.log("posicaoXOrigemBolha: "+ posicaoXOrigemBolha);
          break;
    } 
    return posicaoXOrigemBolha;
}



function sortearPosicaoInicialYBolha(){
  direcaoYOrigemBolha = Math.floor(Math.random()*2) +1;   //1=cima 2=baixo 
  //console.log("direcaoXOrigemBolha: "+ direcaoXOrigemBolha);
  switch (direcaoYOrigemBolha) {
      case 1:
          console.log("um");
          posicaoYOrigemBolha = Math.floor( Math.random() * 10 ) - limiteSuperior;
          console.log("posicaoYOrigemBolha: "+ posicaoYOrigemBolha);
          break;
      case 2:
          console.log("três");
          posicaoYOrigemBolha = Math.floor( Math.random() * 100 ) + limiteInferior;
          console.log("posicaoYOrigemBolha: "+ posicaoYOrigemBolha);
          break;
    } 
    return posicaoYOrigemBolha;
}




function criarOuvinte (bola){
  //console.log("bola: " + bola);
    $(bola).click(function(){
      console.log(this);
      qndeBolhasEstouradas++;
      playSnd();
      $(this).parent('svg').remove();
    });
}


function createBubble(){
      ultimaBolhaCriada++;
      console.log("ultimaBolhaCriada: " + ultimaBolhaCriada);

      eval("var svg" + ultimaBolhaCriada + "= $('#svgModelo').clone().appendTo( '#jogo' )"); //duplicando a estrutura svg
      
      eval("$(svg" + ultimaBolhaCriada + ").attr('id', 'svg' + ultimaBolhaCriada)");  //alterando id da nova estrutura svg

      eval("$(svg" + ultimaBolhaCriada + ").show()");

      eval("$(svg" + ultimaBolhaCriada +").css('left', sortearPosicaoInicialXBolha())");
      eval("$(svg" + ultimaBolhaCriada +").css('top', sortearPosicaoInicialYBolha())");
      

      //$("#svg1 > circle").attr('id', 'bubble1');  
      eval("$('#svg" + ultimaBolhaCriada + "> circle').attr('id', 'bubble' + ultimaBolhaCriada)"); //alterando o id do circle interno da estrutura duplicada

      //moverBubble("#svg1");  
      moverBubble("#svg" + ultimaBolhaCriada);  //movendo a estrutura

      criarOuvinte(eval("bubble"+ultimaBolhaCriada));
    }



    function setupGame(){
        debugando = setInterval(debugar, 100);
        qndeBolhasEstouradas = 0;
        $("#telaFinal").hide();
        $( "#info" ).hide();
        $("#svgModelo").hide(); 
    }



  function iniciarJogo(){
      //$(bubbleModelo).show();
      $( "#info" ).show();
      $("#telaInicial").hide();
      changeBg();
      segundo = 0+"0";
      minuto = 0+"0";
      hora = 0+"0";
      tempoDecorrido = "00:00:00";
      cronometrando = setInterval(iniciarCronometro, 983);
      moverBubble("#svgModelo");
      document.getElementById('vento').play();
      //createBubble();
      criandoBolas = setInterval(createBubble, 2000);
  }

    $("#iniciar").click(function(){
      iniciarJogo();
      //moverBubble( $("#svgModelo"));  //aki
    });

    $("#jogarNovamente").click(function(){
      setupGame();
      iniciarJogo();
    });



    setupGame();
    //iniciarJogo();
  
}); //end jquery


    /*var giro = 0;



//$("svg:parent").remove();
      //$("svg:first").remove();
      //$(this).parent('div').remove();
      //$("#bubble1").parent('div').remove();
      //$(circle).parent('div').remove();
      //$('circle').parent('div').remove();
      /*var myDiv = $(this).parent("div");
      $(myDiv).parent('div').remove();*/
      //console.log($(this).parent());
      

    //function girar(obj){
      //giro +=10;
      //console.log(obj);
     /* $(obj).css('-webkit-transform','rotate('+giro+'deg)');
      $(obj).css('-moz-transform','rotate('+giro+'deg)'); 
      // add Opera, MS etc. variants
      $(obj).css('transform','rotate('+giro+'deg)'); 
        $(obj).addClass("girar");
    }*/

    //girar($("#svgModelo"));
    //$("#svgModelo2").addClass("girar")

    //var girando = setInterval(girar, 100, bubbleModeloSvg);
    //$("#footer").css({animation: "gira 8s linear infinite", transformOrigin:"43px 40px"})
    // $("body").css({backgroundImage: "url(img/sky.jpg)", backgroundSize: "100% 100%"});


//var direcao_array = ["vazio", moverParaEsquerda, moverParaDireita, moverParaCima, moverParaBaixo];
//var numDirecao;



    //alert(this);
    //$(this).hide();
    //document.getElementById("bubbleModelo").setAttribute("stroke", "#f00");
 
// var bubbleModelo = document.getElementsByTagName("bubbleModelo").item(0);
//bubbleModelo.setAttribute("cx", "225");
    //$(bubbleModelo).attr("stroke", "#f00");
    /*$(bubbleModelo).attr("stroke-width", "5");*/
    /*



      //$(svg1).attr("id", "svg" + ultimaBolhaCriada); 
    //  eval("$(svg" + ultimaBolhaCriada + ").attr('id')");
     // eval("$(svg" + ultimaBolhaCriada + ").hide()");
     //eval("$('svg'" + ultimaBolhaCriada + ").attr('id', 'svg'" + ultimaBolhaCriada+")");

      //var bubble =  $("#telaInicial").clone().appendTo( "#telaInicial" );
      //var bubble1 =  $("#svgModelo").clone().appendTo( "#referencia" );
      //var bubble =  $("#svgModelo").clone().appendTo( "#referencia" );
     // eval("var bubble" + ultimaBolhaCriada + " = 'asçdlfjaa'");
      //console.log("svg1: " + svg1);
      //svgModelo = $('#svgModelo');
      //console.log("$('#svgModelo'): " + $('#svgModelo'));
      //$("bubble"+ultimaBolhaCriada).attr("id", "bubble1");
      //console.log("bubble1.id: " + bubble1.id)
     //bubble1.attr('id', 'bubble1' );
       //document.getElementById('bubbleModelo').play();

    */



       /* $("#bubble123").click(function(){
      console.log(this);
      //iniciarJogo();
      //moverBubble( $("#svgModelo"));
      qndeBolhasEstouradas++;
      playSnd();
      $(this).parent('svg').remove();
    });*/


  /*
    //$("#bubble1").click(function(){
    eval("$('#bubble" + ultimaBolhaCriada + "').click(function(){")  
      console.log(this);
      //iniciarJogo();
      //moverBubble( $("#svgModelo"));
      qndeBolhasEstouradas++;
      playSnd();
      $(this).parent('svg').remove();
    eval("})")
  */


      /*$("#bubbleModelo").click(function(){
      console.log(this);

        //iniciarJogo();
      //moverBubble( $("#svgModelo"));
      qndeBolhasEstouradas++;
      playSnd();
      $("#svgModelo").remove(); 
    });*/