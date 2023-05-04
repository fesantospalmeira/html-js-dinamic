//funções de som
function tocaSom (seletorAudio){

   const elemento = document.querySelector(seletorAudio);

   if (elemento && elemento.localName === 'audio'){
        elemento.play(); 

   }
   
   else{
    console.log('Elemento ou seletor inválido');

   }

}

//lista dos sons
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){  
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(event){

        if (event.code === 'Space' || event.code === 'Enter'){
        tecla.classList.add('ativa');
        }

    }
    
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}