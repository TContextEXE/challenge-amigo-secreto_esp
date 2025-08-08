let amigosLista = [];
actualizarLista();

function agregarAmigo(){
    let amigo = document.getElementById('amigo');
    if(!amigo.value){
        alert('Por favor, inserte un nombre');
    }else{
        amigosLista.push(amigo.value);
        actualizarLista();
    }    
    amigo.value = '';
}

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigosLista.forEach(amigo =>{
        lista.innerHTML = `${lista.innerHTML} <li>${amigo}</li>`;
    });
    
}

function sortearAmigo(){
    if(amigosLista.length != 0){
        let indexAmigo = Math.floor(Math.random()* amigosLista.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigosLista[indexAmigo];
    }
    
}