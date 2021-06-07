 
 //assim que fechar o modal, remove todas as imagens dele
 var idModal = document.getElementById('idModal')
 idModal.addEventListener('hide.bs.modal', function () {
    //console.log("fechou o modal")
    var qnteElementos = document.getElementById('idModal').getElementsByClassName('img_interna_modal').length;
    for (let i = 0; i < qnteElementos; i++) {
        var elemento = document.querySelector(".img_interna_modal");
        elemento.parentNode.removeChild(elemento);
    }
  })

  
  //cria imagens dinamicamente
  function fn_criarImagens (qnte) {
    for (let i = 1; i <= qnte; i++) {
      //console.log("cria novo elemento img " + i)
      var  imgNova = document.createElement("img");
      var id_modal_local_imgs = document.getElementById("id_modal_local_imgs");
      imgNova.src = "txt1.png";
      imgNova.id = "img"+i;
      imgNova.class = "img_interna_modal";
      imgNova.classList.add("img_interna_modal");
      id_modal_local_imgs.appendChild(imgNova);
    }
  }


  //ao exibir o modal, busca as imagens e campos de texto com base nos atributos html de cada projeto
  idModal.addEventListener('show.bs.modal', function (event) {
      // Button that triggered the modal
      var button = event.relatedTarget
      // Extract info from data-bs-* attributes
      var caminho = button.getAttribute('data-bs-caminho')
      var qnte = button.getAttribute('data-bs-qnte')
      var titulo = button.getAttribute('data-bs-titulo');
      var desc = button.getAttribute('data-bs-desc');
      
      fn_criarImagens (qnte);
      
      // If necessary, you could initiate an AJAX request here
      // and then do the updating in a callback.
      // Update the modal's content.
      
      var modalTitle = idModal.querySelector('.modal-title')
      modalTitle.textContent = 'Projeto: ' + titulo;  //título do modal

      var descricaoProjeto = idModal.querySelector('.descricaoProjeto')
      descricaoProjeto.textContent = desc;  //descrição do projeto exibida dentro do modal
      
      for (let i = 1; i <= qnte; i++) {
        //var modalImg4 = idModal.querySelector('#img4')
        eval("modalImg"+i+"=idModal.querySelector('#img"+i+"')")
        //modalImg2.src = "img/projetos/"+caminho+"/"+caminho+"2.jpg"
        eval("modalImg"+i+".src = 'img/projetos/"+caminho+"/"+caminho+i+".jpg'")
      }
      
  })












      /*
      var modalBodyInput = idModal.querySelector('.modal-body input')
      var modalBodyP = idModal.querySelector('.meuP')
      var modalImg = idModal.querySelector('.minhaImg')
      var modalImg1 = idModal.querySelector('#img1')
      var modalImg2 = idModal.querySelector('#img2')
      var modalImg3 = idModal.querySelector('#img3')
      var modalImg4 = idModal.querySelector('#img4')
      */  


    //var myModal = document.getElementById('idModal');
    /*
    console.log("i = "+i+ " de "+ qnte + " --> ")
    if(comImagens){
      removeImagensCriadas();
    } 
    console.log(event);
    modalBodyInput.value = caminho
    modalBodyP.textContent = 'p conteúdo = ' + caminho
    modalImg.src = "img/projetos/"+caminho+"/"+caminho+"_1.jpg"
    modalImg2.src = "img/projetos/"+caminho+"/"+caminho+"2.jpg"
    modalImg3.src = "img/projetos/"+caminho+"/"+caminho+"3.jpg"
    */

  /*
  function quem_e(prefixoProjeto){
    projetoAtual = prefixoProjeto
    console.log(prefixoProjeto);
    //document.body.innerHTML = "<img src='img/projetos/5e_videos/5e_videos_4.jpg' alt='imagem detalhada sobre o projeto'>"
  } 
  */

  /* 
  function removeImagensCriadas() {
    //document.getElementsByClassName("img-thumbnail").remove()
    var elemento = document.querySelector(".img_interna_modal");
    elemento.parentNode.removeChild(elemento);
  }
 */