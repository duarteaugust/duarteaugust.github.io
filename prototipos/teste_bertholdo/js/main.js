$( document ).ready(function(e) {
	//console.log( "ready!" + e );

    
    //tooltip
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })




    
    //menu active
     $('ul.nav > li a').click(function (e) {
           // console.log(e);
            //e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).parent().addClass('active');                
        });    
    
    
    
    //modal
    //console.log("jquery ok") 
    //alert(e);
    //alert(this);
    //alert(xx);
       
       $('#ambar').click(function(){
           $.post('projetos/ambar.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
                
           })//end .post
       })//end click

       $('#5e_videos').click(function(){
           $.post('projetos/5e_videos.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
               
           })//end .post
       })//end click
       
        $('#avarento').click(function(){
           $.post('projetos/avarento.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
               
           })//end .post
       })//end click
        
        $('#gtelecom').click(function(){
           $.post('projetos/gtelecom.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
               
           })//end .post
       })//end click
                
        $('#curso_cemig').click(function(){
           $.post('projetos/curso_cemig.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
               
           })//end .post
       })//end click
       
        $('#curso_hipertensao').click(function(){
           $.post('projetos/curso_hipertensao.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
               
           })//end .post
       })//end click
        
        
        $('#curso_estrategia').click(function(){
           $.post('projetos/curso_estrategia.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
               
           })//end .post
       })//end click
        
        $('#curso_sm').click(function(){
           $.post('projetos/curso_sm.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
               
           })//end .post
       })//end click
        
        $('#proposta_elearning').click(function(){
           $.post('projetos/proposta_elearning.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
               
           })//end .post
       })//end click
        
        
        $('#assistente_virtual').click(function(){
           $.post('projetos/assistente_virtual.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
               
           })//end .post
       })//end click
        
     
        
        
        $('#jogo_tiro').click(function(){
            $.post('projetos/jogo_tiro.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
           })//end .post
       })//end click
        
        $('#jogo_skate').click(function(){
            $.post('projetos/jogo_skate.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
           })//end .post
       })//end click
        
        $('#jogoAcampamento').click(function(){
            $.post('projetos/jogo_acampamento.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
           })//end .post
       })//end click
        
        $('#jogo_quebracabeca').click(function(){
            $.post('projetos/jogo_quebracabeca.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
           })//end .post
       })//end click
        
        $('#jogo_memoria').click(function(){
            $.post('projetos/jogo_memoria.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
           })//end .post
       })//end click
        

        
        $('#jogo_boliche').click(function(){
            $.post('projetos/jogo_boliche.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
           });//end .post
       });//end click
        
        
        $('#jogo_dados').click(function(){
            $.post('projetos/jogo_dados.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
           })//end .post
       })//end click
        
        $('#sinalsat').click(function(){
            $.post('projetos/sinalsat.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
           })//end .post
       })//end click
        
    $('#rphoto').click(function(){
            $.post('projetos/rphoto.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
           })//end .post
       })//end click

    $('#site5e').click(function(){
            $.post('projetos/site5e.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
           })//end .post
       })//end click
    
        $('#news').click(function(){
            $.post('projetos/news.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
           })//end .post
       })//end click

        $('#cursos5e').click(function(){
            $.post('projetos/cursos5e.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
           })//end .post
       })//end click

        $('#mvvs').click(function(){
            $.post('projetos/mvvs.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
                
           })//end .post
       })//end click
       
        $('#alfabicho').click(function(){
            $.post('projetos/alfabicho.html', function(xx){
               $('#modalProjetos').html(xx);
               $('#conteudoModalProjetos').modal('show').appendTo('body');
                
           })//end .post
       })//end click
        
        

    
    
    
    
    
        
        $('#port').click(function(){
            //alert(1);
            window.open('http://www.duarteaugust.eu.pn/portAntigo','mywindow');
        })
        $('#btCurriculo1, #btCurriculo2, #btCurriculo3').click(function(){
            window.open('https://drive.google.com/file/d/0B48xKlDxzWTgbERfSWVLcEJBcm8/edit?usp=sharing','mywindow');
        })
        
        
  
    
        
        
        
            $('#contactForm').submit(function(e){
                var dados = $( this ).serialize();
                e.preventDefault();
                $.ajax({
                    type: "POST",
                    url: "//formspree.io/duarteaugust@gmail.com",
                    data: dados,
                    success: function(data){
                            //alert("mensagem enviada com sucesso");
                        $( "#msgRetorno" ).append( "<strong>Obrigado por sua Mensagem. Entrarei em contato assim que possível.</strong>" );
                    }, 
                    error: function(err) {
                        $( "#msgRetorno" ).append( "<strong>Obrigado por sua Mensagem. Entrarei em contato assim que possível.</strong>" );
                        //alert("algo deu errado" + err);
                        //var r = jQuery.parseJSON(err.responseText);
                       //alert("Message: " + r.Message);
                       //alert("StackTrace: " + r.StackTrace);
                       //alert("ExceptionType: " + r.ExceptionType);
                    }
                });
                return false;
            });
        

    
    
    


    
    
        
});  //end jquery



function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
} 




