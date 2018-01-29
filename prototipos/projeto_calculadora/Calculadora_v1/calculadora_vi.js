$(document).ready(function(){

    var primeiroValorArmazenado;
    var segundoValorArmazenado;
		var valorAnterior = "0";    //último número digitado
		var valorAtualizado;
		var operacaoAtual;
    var novaEntrada = true;
    //var resultado;
    var som = true;
    var termo = 1;


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

    function calcular () {
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



                
        }
    }

    $( "#igual" ).click(function() {
      playSnd();
      segundoValorArmazenado = parseFloat(valorAtualizado);
      //alert(primeiroValorArmazenado + " e " + segundoValorArmazenado + " = " + primeiroValorArmazenado + segundoValorArmazenado);
      calcular (operacaoAtual);
    });


    function registrarOperacao(operacao, sinal) {
      termo = 2;
      playSnd();
      atualizao = $( "#painel" ).val().concat("  " + sinal);
      $("#decimal").removeClass("disabled");
      novaEntrada = true;
      operacaoAtual = operacao;
      $( "#painel" ).val(atualizao);
      primeiroValorArmazenado = parseFloat(valorAtualizado);
      
      atualizao2 = valorAtualizado + "  " + sinal;
      $( "#painel" ).val(atualizao2);
    }


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
      //registrarOperacao("raiz2", "√");
      //alert("cliquei no ac!!!")
      primeiroValorArmazenado = "0";
     segundoValorArmazenado = "0";
     valorAnterior = "0";
     valorAtualizado = "0";
     operacaoAtual = "";
     $( "#painel" ).val("0");
     novaEntrada = true;
    //var resultado;
     playSnd();
    });

    $( "#ce" ).click(function() {

        if (termo == 1) {
            primeiroValorArmazenado = "0";
           segundoValorArmazenado = "0";
           valorAnterior = "0";
           valorAtualizado = "0";
           operacaoAtual = "";
           $( "#painel" ).val("0");
           novaEntrada = true;
        } else {
          //alert("tô no segundo termo");
          segundoValorArmazenado = "0";
          novaEntrada = true;
          $( "#painel" ).val("0");

        };

      //registrarOperacao("raiz2", "√");
      //alert("cliquei no ac!!!")

    //var resultado;
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


	});
	
