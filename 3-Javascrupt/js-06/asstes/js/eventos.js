//onclick

    function saludar(){
        alert("saludos");
    }

    //addventListener()
    const boton= document.getElementById('boton') //imrpime loq eu vamos a trabakar
    console.log(boton);

    boton.addEventListener('click',(evento)=>{
        //alert("saludar");
        console.log(evento.target);
    });

    const formulario = document.getElementById('form');
    formulario.addEventListener('submit', (e) =>{
        e.preventDefault();
       alert(formulario[0].value);
    })