$(document).ready(function(){
console.log(2.1 * 3);
//alert(2.1 * 3);

function ajustarResultadoDecimal (n){
  b = n*100 / 100;
  console.log(21*30/100)
  return b;
}

console.log("aki ó: " + ajustarResultadoDecimal(2.1*3));

    var primeiroValorArmazenado = 0;
    var segundoValorArmazenado = 0;
		var valorAnterior = 0;    //último número digitado
		var valorAtualizado = 0;    //atualiza a última numeração digitada no painel. ex. 1234
		var operacaoAtual;
    var novaEntrada = true;
    //var resultado;
    var som = true;
    var termo = 1;
    var sinalOperacao;


    function Debugar(){
      console.log("primeiroValorArmazenado=" + primeiroValorArmazenado);
      console.log("segundoValorArmazenado=" + segundoValorArmazenado);
      console.log("valorAnterior=" + valorAnterior);
      console.log("valorAtualizado=" + valorAtualizado);
      console.log("operacaoAtual=" + operacaoAtual);
      console.log("novaEntrada=" + novaEntrada);
      console.log("termo=" + termo);
    }

    function playSnd(){
      if (som){
        document.getElementById('snd').play()
      }
    }


    $("#audio").click(function(){
      if (som) {
        som = false;
        $("#som").removeClass("glyphicon-volume-off");
        $("#som").addClass("glyphicon-volume-down");
      } else {
        som = true;
        playSnd();
        $("#som").addClass("glyphicon-volume-off");
        $("#som").removeClass("glyphicon-volume-down");
      }
    });



		function atualizarValor(entrada) {
          playSnd();
          if (entrada == "."){
            $("#decimal").addClass("disabled");
          }

          if ( novaEntrada == true) {
            novaEntrada = false;
            $( "#painel" ).val( entrada );
            valorAtualizado = entrada;
          } else {
            valorAnterior = $( "#painel" ).val(); //lendo o valor do campo
            valorAtualizado = valorAnterior.concat(entrada);
            $( "#painel" ).val( valorAtualizado );//atribuindo novo valor            
          }
    }




    function limparTodaMemoria (){
        primeiroValorArmazenado = "0";
       segundoValorArmazenado = "0";
       valorAnterior = "0";
       valorAtualizado = "0";
       operacaoAtual = "";
       novaEntrada = true;
       playSnd();
       termo = 1;
      $( "#painel" ).val("0");
      $("#decimal").removeClass("disabled");
    }


    function calcular () {
      novaEntrada = true;
     // alert(primeiroValorArmazenado + operacaoAtual + segundoValorArmazenado);
        switch (operacaoAtual) {
            case "soma":
                $( "#painel" ).val(primeiroValorArmazenado + segundoValorArmazenado);
                break;
            case "subtracao":
                $( "#painel" ).val( primeiroValorArmazenado - segundoValorArmazenado );
                break;
            case "multiplicacao":
                $( "#painel" ).val( primeiroValorArmazenado * segundoValorArmazenado );
                break;
            case "divisao":
                $( "#painel" ).val( primeiroValorArmazenado / segundoValorArmazenado );
                break;
            case "potencia":
                $( "#painel" ).val( Math.pow(primeiroValorArmazenado, segundoValorArmazenado) );
                break;
            case "modulo":
                $( "#painel" ).val(primeiroValorArmazenado % segundoValorArmazenado);
                break;
            case "porcentagem":
                $( "#painel" ).val((primeiroValorArmazenado / 100) * segundoValorArmazenado);
                break;
            case "raiz2":
                $( "#painel" ).val(Math.sqrt(primeiroValorArmazenado));
                break;
        } //end switch
        $("#decimal").removeClass("disabled");
        primeiroValorArmazenado = "0";
       segundoValorArmazenado = "0";
       valorAnterior = "0";
       valorAtualizado = "0";
       operacaoAtual = "";
       novaEntrada = true;
       termo = 1;
    }// end func




    function registrarOperacao(operacao, sinal) {
      novaEntrada = true;
      termo = 2;
      sinalOperacao = sinal;  
      operacaoAtual = operacao;
      playSnd();
      $("#decimal").removeClass("disabled");
      atualizacao = $( "#painel" ).val().concat("  " + sinalOperacao);
      $( "#painel" ).val(atualizacao);
      primeiroValorArmazenado = parseFloat(valorAtualizado);
      atualizacao2 = valorAtualizado + "  " + sinal;
      //valorAtualizado = 0;
      $( "#painel" ).val(atualizacao2);
      Debugar();
    }


    $( "#igual" ).click(function() {
      playSnd();
      if (termo == 2) {

        segundoValorArmazenado = parseFloat(valorAtualizado);
      };
      //alert(primeiroValorArmazenado + " e " + segundoValorArmazenado + " = " + primeiroValorArmazenado + segundoValorArmazenado);
      calcular (operacaoAtual);
    });

/*---  OPERAÇÃOES  ---*/

    $( "#soma" ).click(function() {
      registrarOperacao("soma" ,"+");
      //valorAnterior = "0";
      //alert("valorAnterior=" + valorAnterior +  "  \nprimeiroValorArmazenado=" + valorAtualizado );
		});

    $( "#subtracao" ).click(function() {
      registrarOperacao("subtracao", "-");
    });

    $( "#multiplicacao" ).click(function() {
      registrarOperacao("multiplicacao", "x");
    });

    $( "#divisao" ).click(function() {
      registrarOperacao("divisao", "/");
    });

    $( "#potencia" ).click(function() {
      registrarOperacao("potencia", "^");
    });
    
    $( "#modulo" ).click(function() {
      registrarOperacao("modulo", "[ ]");
    });

    $( "#porcentagem" ).click(function() {
      registrarOperacao("porcentagem", "%");
    });

    $( "#raiz2" ).click(function() {
      registrarOperacao("raiz2", "√");
    });

    $( "#ac" ).click(function() {
      limparTodaMemoria(1);
    });

    $( "#ce" ).click(function() {
        if (termo == 1) {
          limparTodaMemoria();
        } else {
          segundoValorArmazenado = "0";
          novaEntrada = true;
          //$( "#painel" ).val("0");
          valorAtualizado = 0;


          atualizacao = primeiroValorArmazenado  + "  " + sinalOperacao;
          $( "#painel" ).val(atualizacao);


        };
     playSnd();
    });





/*---  ENTRADAS  ---*/

    $( "#decimal" ).click(function() {
      atualizarValor(".");
    });

		$( "#zero" ).click(function() {
			atualizarValor(0);
		});

		$( "#um" ).click(function() {
			atualizarValor(1);
		});

		$( "#dois" ).click(function() {
			atualizarValor(2);
		});

		$( "#tres" ).click(function() {
			atualizarValor(3);
		});

		$( "#quatro" ).click(function() {
			atualizarValor(4);
		});

		$( "#cinco" ).click(function() {
			atualizarValor(5);
		});

		$( "#seis" ).click(function() {
			atualizarValor(6);
		});

		$( "#sete" ).click(function() {
			atualizarValor(7);
		});

		$( "#oito" ).click(function() {
			atualizarValor(8);
		});

		$( "#nove" ).click(function() {
			atualizarValor(9);
		});


	}); //end jquery
	
