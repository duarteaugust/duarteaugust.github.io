$(document).ready(function(){

var avatar =  $("#avatar");
var direcao;
//var largura = window.screen.availWidth;
//var altura = window.screen.availHeight;
var offset;
var tamanhoAvatar = $(avatar).css("height");
var bg = 1;
//var n = Math.floor((Math.random() * largura) + 1);
//var pontoInferior = $("#linhaInferior");
var limiteInferior = document.body.offsetHeight;
var limiteDireito = document.body.offsetWidth -120;
//alert(limiteDireito)
//parseFloat($("#linhaInferior").css("top"));
var limiteSuperior = 20;
var limiteEsquerdo = 20;


var posX = window.screen.availWidth / 2;
var posY = window.screen.availHeight / 2;
$(avatar).css("left", posX);
$(avatar).css("top", posY);

//parseFloat($("#linhaSuperior").css("top"));
//alert(limiteSuperior)

/*
console.log(window.screen.availWidth);
console.log(screen.width);
console.log(document.body.offsetWidth)
console.log(document.body.scrollWidth)
*/

$("#changeBg").click(function(){
  if (bg == 1) {
    bg = 2;
    $("body").css("backgroundImage", "url(css/grid.png)");
  } else{
    bg = 1;
    $("body").css("backgroundImage", "url(css/grama.jpg)");
  }
})

function alterarPosicaoMosquito (){
  console.log(n);
  $(".bubble").animate({
    left: "+=5",
    top: "-=5"
  },1);

}



//setInterval(alterarPosicao, 100);


function verificarAlturaDoCampo(){
  return $(document).height();
}
//alert(verificarAlturaDoCampo());

  function alertar(){
    alert(1234)
  }

    function debugar(){
      //console.log(direcao);
      //console.log(e)
      //alert(e);
      //alert(e.type + ': ' + e.which );
      
      /*left = $( avatar ).css( "left");
      top = $( avatar ).css( "top");
      right = $( avatar ).css( "right");
      botton = $( avatar ).css( "botton");
      //console.log(info)
*/
      //var position = avatar.position();
      //offset = avatar.offset();

      $( "#info" ).html(function() {
        //var emphasis = "<em>" + $( "p" ).length + " paragraphs!</em>";
        //this.html( "left: " + offset.left + ", top: " + offset.top );
        //return "<b>left: </b>" + position.top  +  " \t | <b>top: </b>" + position.top + " | <b>right:</b>" + position.right + "...";
          //return "<b>left: </b>" + left + "   | <b>top: </b>" + botton;
          //return "<p><b> posX: </b>" +  offset.left + "</p>  <p><b>posY: </b>" + offset.top  + " </p>  <p><b>Direção: </b>" + direcao +"</p>";
          return "<p><b> posX: </b>" +  posX + "</p>  <p><b>posY: </b>" + posY  + " </p>  <p><b>Direção: </b>" + direcao +"</p>";
      });

    }

    function girar(direcao){
          $(avatar).removeClass("girarPraCima");
          $(avatar).removeClass("girarPraBaixo");
          $(avatar).removeClass("girarPraDireita");
          $(avatar).removeClass("girarPraEsquerda");
          $(avatar).addClass("girarPra"+direcao);
    }

    function verificarColisao(){
        console.log("posX: "+posX);
        console.log("posY: "+posY);
    }

      function moveUp (){
          direcao = "Cima";
          girar(direcao);
          $(avatar).animate({
            top: "-=10",
          }, 1, function() {
                debugar();
                  posY = parseFloat($(avatar).css("top"));
                 if (posY < limiteSuperior ) {
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
                  debugar();
                  posY = parseFloat($(avatar).css("top")) + 100;
                  //offset = pontoInferior.offset();
                    //alert("posFimAvatar = "+ posFimAvatar + " | limiteInferior = " + limiteInferior);
                  //alert(limiteInferior)
                  if (posY > limiteInferior ) {
                    moveUp();
                  }
                  verificarColisao();
              });//end animate
      }

      function moveLeft(){
           direcao = "Esquerda";
           girar(direcao);
          //alert('Você apertou seta para esquerda');
          $(avatar).animate({
            left: "-=10",
            //top: "-=10",
            //height: "toggle"
          }, 10, function(){
            debugar();
            posX = parseFloat($(avatar).css("left"));
            if (posX < limiteEsquerdo ) {
                    moveRight();
             }
             verificarColisao();
          });//end animate
      }
                   
      

      function moveRight(){
         direcao = "Direita";
         girar(direcao);
          //alert('Você apertou seta para direita');
          $(avatar).animate({
            left: "+=10",
           // top: "+=10",
            //height: "toggle"
          }, 10, function() {
            // Animation complete.
            posX = parseFloat($(avatar).css("left")+100);
            debugar();
            if (posX > limiteDireito ) {
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
 
/*
     $(document).bind('keydown',function(e){
        
      });
*/

}); //end jquery