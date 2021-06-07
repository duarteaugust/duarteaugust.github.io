

//cortar string e coloca ... no final
function doTruncarStr(str, size){
    var shortText = str;
    if(str.length >= size+3){
        shortText = str.substring(0, size).concat('...');
    }
    return shortText;
}

$(document).ready(function(){ 

  //selecionando o filtro de busca (Todas, Fotos ou Notícias)
  //filtrando o objeto pela categoria
  var filtro; //se tiver filtro (caso não, será Todas)
  var filtrarPor;  //Todas Foto Not�cia
  $(".dropCat li a").click(function(){
    $(this).parents(".input-group-btn").find('.filtroSelect').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".input-group-btn").find('.filtroSelect').val($(this).data('value'));
    
    var filtrando = $(".filtroSelect").val();

    if(filtrando == "Fotos"){
          filtro = true;
          filtrarPor = "Foto";
    } else if (filtrando == "Notícias"){
          filtro = true;
          filtrarPor = "Not�cia";
    } else if (filtrando == "Todas") {
          filtro = false;
    } else {
      console.log("undefined");
    }
  });

var maisRecente = true;
 $(".dropDate li a").click(function(){
    $(this).parents(".dropLi").find('.filtroDate').html($(this).text() + '<span class="caret"></span>');
    $(this).parents(".dropLi").find('.filtroDate').val($(this).data('value'));
    var ordenando = $("#filtroOrdem").text();
    if(ordenando == "Mais recente"){
          maisRecente = true;
    } else if (ordenando == "Mais antiga"){
         maisRecente = false;
    } else {
      console.log("undefined");
    }
    var termoFiltrado = $('#conteudoBusca').val();
    verificarBusca();
  });

  function limparBusca(){
    $("#resultados").html("");
  }
  
  //verifica se o termo buscado está na descrição ou no titulo das notícias
  function buscar(termoFiltrado){
    var colecao = dadosJSON.filter(function(item){
      return item.descricao.toLowerCase().indexOf(termoFiltrado.toLowerCase()) != -1 ||  item.titulo.toLowerCase().indexOf(termoFiltrado.toLowerCase()) != -1;
    });


    if(colecao.length == 0){
      $(".modal-body").html("<p>Não foram encontrados resultados para o termo pesquisado ("+termoFiltrado+")</p>");
      $("#myModal").modal();
    }

    var primeira = true;  //flag para contagem e exibição dos resultados 

    //elementos criados dinamicamente conforme quantidade de resultados encontrada...
    var contadorResultados = 0;
    var texto; //aux para truncar string...

    //se a ordem for pelo mais recente
    if(maisRecente == true){    

    for (var i = 0; i < colecao.length; i++) { 

    if(filtro){  //if-else1
        if(colecao[i].categoria == filtrarPor){ 
            contadorResultados ++;
            $("#resultados").append("<div id='rowA" + i + "' class='row'>");
            
            if(primeira == true){ //if-else3
                primeira = false;
                $("#rowA"+i).append("<div id='colA"+i+"' class='col-md-2 contResult'></div>");
            } else { 
               $("#rowA"+i).append("<div id='colA"+i+"' class='col-md-2'></div>");
            }//if-else3
               $("#rowA"+i).append("<div id='colB"+i+"' class='col-md-4'></div>");
                 $("#colB"+i).append("<img class='noticia-img img-responsive' src='"+ colecao[i].imagem + "' class='img-responsive noticia-img'>");
               $("#rowA"+i).append("<div id='colC"+i+"' class='col-md-6'></div>");
                 $("#colC"+i).append("<a id='link"+i+"' class='link-noticia' href='"+colecao[i].url+"'></a>");
                 $("#colC"+i).append("<a id='link"+i+"' class='link-noticia' href='#'></a>");
                 texto = colecao[i].titulo;
                 $("#link"+i).append("<p class='chamada-txt'>"+doTruncarStr(texto, 65)+"</p>");
                 texto = colecao[i].descricao;
                 $("#colC"+i).append("<p class='noticia-txt'>"+doTruncarStr(texto, 100)+"</p>");
                 $("#colC"+i).append("<br>");
                 $("#colC"+i).append("<p class='data-txt'>"+colecao[i].hora + " - " + colecao[i].data + "</p> ");
            $("#resultados").append("<div id='rowB"+i+"' class='row'></div>");
            $("#rowB"+i).append("<div id='colD"+i+"' class='col-md-2'>.</div>");
            $("#rowB"+i).append("<div id='colE"+i+"' class='col-md-10'><hr class='hr-separador'></div>");
        }else{
            console.log("objeto " + i + " não pertence a categoria " + filtrarPor);
        }
  } else { //if-else1
     contadorResultados ++;
      $("#resultados").append("<div id='rowA" + i + "' class='row'>");
      if(primeira == true){
          primeira = false;
          $("#rowA"+i).append("<div id='colA"+i+"' class='col-md-2 contResult'></div>");
      }else{ 
        $("#rowA"+i).append("<div id='colA"+i+"' class='col-md-2'></div>");
      }
         $("#rowA"+i).append("<div id='colB"+i+"' class='col-md-4'></div>");
           $("#colB"+i).append("<img class='noticia-img img-responsive' src='"+ colecao[i].imagem + "' class='img-responsive noticia-img'>");
         $("#rowA"+i).append("<div id='colC"+i+"' class='col-md-6'></div>");
           //$("#colC"+i).append("<a id='link"+i+"' class='link-noticia' href='"+colecao[i].url+"'></a>");
           $("#colC"+i).append("<a id='link"+i+"' class='link-noticia' href='#'></a>");
           var texto = colecao[i].titulo;
           $("#link"+i).append("<p class='chamada-txt'>"+doTruncarStr(texto, 65)+"</p>");
           texto = colecao[i].descricao;
           $("#colC"+i).append("<p class='noticia-txt'>"+doTruncarStr(texto, 100)+"</p>");
           $("#colC"+i).append("<br>");
           $("#colC"+i).append("<p class='data-txt'>"+colecao[i].hora + " - " + colecao[i].data + "</p> ");
      $("#resultados").append("<div id='rowB"+i+"' class='row'></div>");
      $("#rowB"+i).append("<div id='colD"+i+"' class='col-md-2'>.</div>");
      $("#rowB"+i).append("<div id='colE"+i+"' class='col-md-10'><hr class='hr-separador'></div>");
    }//else
  }//for
 } else {  //if-else (maisRecente == true){
for (i = colecao.length-1; i >= 0; i--) { 
  if(filtro){  //if-else1
        if(colecao[i].categoria == filtrarPor){ 
            contadorResultados ++;
            $("#resultados").append("<div id='rowA" + i + "' class='row'>");
            
            if(primeira == true){ //if-else3
                primeira = false;
                $("#rowA"+i).append("<div id='colA"+i+"' class='col-md-2 contResult'></div>");
            } else { 
               $("#rowA"+i).append("<div id='colA"+i+"' class='col-md-2'></div>");
            }//if-else3
               $("#rowA"+i).append("<div id='colB"+i+"' class='col-md-4'></div>");
                 $("#colB"+i).append("<img class='noticia-img img-responsive' src='"+ colecao[i].imagem + "' class='img-responsive noticia-img'>");
               $("#rowA"+i).append("<div id='colC"+i+"' class='col-md-6'></div>");
                 $("#colC"+i).append("<a id='link"+i+"' class='link-noticia' href='"+colecao[i].url+"'></a>");
                 $("#colC"+i).append("<a id='link"+i+"' class='link-noticia' href='#'></a>");
                 texto = colecao[i].titulo;
                 $("#link"+i).append("<p class='chamada-txt'>"+doTruncarStr(texto, 65)+"</p>");
                 texto = colecao[i].descricao;
                 $("#colC"+i).append("<p class='noticia-txt'>"+doTruncarStr(texto, 100)+"</p>");
                 $("#colC"+i).append("<br>");
                 $("#colC"+i).append("<p class='data-txt'>"+colecao[i].hora + " - " + colecao[i].data + "</p> ");
            $("#resultados").append("<div id='rowB"+i+"' class='row'></div>");
            $("#rowB"+i).append("<div id='colD"+i+"' class='col-md-2'>.</div>");
            $("#rowB"+i).append("<div id='colE"+i+"' class='col-md-10'><hr class='hr-separador'></div>");
        }else{
            console.log("objeto " + i + " não pertence a categoria " + filtrarPor);
        }
  } else { //if-else1
     contadorResultados ++;
      $("#resultados").append("<div id='rowA" + i + "' class='row'>");
      if(primeira == true){
          primeira = false;
          $("#rowA"+i).append("<div id='colA"+i+"' class='col-md-2 contResult'></div>");
      }else{ 
        $("#rowA"+i).append("<div id='colA"+i+"' class='col-md-2'></div>");
      }
         $("#rowA"+i).append("<div id='colB"+i+"' class='col-md-4'></div>");
           $("#colB"+i).append("<img class='noticia-img img-responsive' src='"+ colecao[i].imagem + "' class='img-responsive noticia-img'>");
         $("#rowA"+i).append("<div id='colC"+i+"' class='col-md-6'></div>");
           $("#colC"+i).append("<a id='link"+i+"' class='link-noticia' href='"+colecao[i].url+"'></a>");
           $("#colC"+i).append("<a id='link"+i+"' class='link-noticia' href='#'></a>");
           var texto = colecao[i].titulo;
           $("#link"+i).append("<p class='chamada-txt'>"+doTruncarStr(texto, 65)+"</p>");
           texto = colecao[i].descricao;
           $("#colC"+i).append("<p class='noticia-txt'>"+doTruncarStr(texto, 100)+"</p>");
           $("#colC"+i).append("<br>");
           $("#colC"+i).append("<p class='data-txt'>"+colecao[i].hora + " - " + colecao[i].data + "</p> ");
      $("#resultados").append("<div id='rowB"+i+"' class='row'></div>");
      $("#rowB"+i).append("<div id='colD"+i+"' class='col-md-2'>.</div>");
      $("#rowB"+i).append("<div id='colE"+i+"' class='col-md-10'><hr class='hr-separador'></div>");
    }//else
  }//for
 } //if-else (maisRecente == true){
 $(".contResult").append('<hr class="hr-result">' + contadorResultados + ' resultado(s) para "' + termoFiltrado+'"');
 if (contadorResultados == 0) {
      $(".modal-body").html("<p>Não foram encontrados resultados para o termo pesquisado ("+termoFiltrado+")</p><p>Tente talvez em Outra Categoria...</p>");
      $("#myModal").modal();
 };
};//buscar()

  //iniciando a busca caso haja algum termo a ser pesquisado
  $( "#search" ).click(function() {  
    verificarBusca();
  });

  $(document).on('keydown', function(event) {
    if(event.keyCode === 13) {
        verificarBusca();
    }
  });

  var termoFiltrado;
  function verificarBusca(){
      termoFiltrado = $('#conteudoBusca').val();
      if (termoFiltrado =="") {
        $(".modal-body").html("<p>Por favor, digite o termo que deseja pesquisar.</p>");
        $("#myModal").modal();
      } else {
        limparBusca();
        buscar(termoFiltrado);
      }
  };//verificarBusca()

}); //$