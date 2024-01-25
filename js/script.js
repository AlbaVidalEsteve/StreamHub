//FAQs DESPLEGABLES
const contenedores = document.querySelectorAll('.container');

contenedores.forEach(contenedor => {
    contenedor.addEventListener('click', ()=>{
        contenedor.classList.toggle('activa');
    });
});


//Selected language
let seleccion = document.querySelector('#valores');

seleccion.addEventListener('change', function(){
    let opcionSeleccionada = this.options[this.selectedIndex];

    if(opcionSeleccionada.value == 'Espanol'){
        console.log('Opcion seleccionada Español');
        window.location.assign('violetafilms.html');
        
    }else{
        console.log('Opcion seleccionada Ingles');
        window.location.assign('violetafilms-english.html');
    }

});

let otroseleccion = document.getElementById('lang');
console.log(otroseleccion)
otroseleccion.addEventListener('change', function(){
    let opcionSeleccionada = this.options[this.selectedIndex];

    if(opcionSeleccionada.value == 'Espanol'){
        console.log('Opcion seleccionada Español');
        window.location.assign('violetafilms.html');
        
    }else{
        console.log('Opcion seleccionada Ingles');
        window.location.assign('violetafilms-english.html');
    }

});



// // Seleccionar los botones
// let botones = document.querySelectorAll('.tablinks');
// // Esperar a que se produzca click
// botones.forEach(boton => {
//     // boton.addEventListener('click', (event) => saludo(event,boton));
//     boton.addEventListener('click', (evento) => openTab(evento,boton));
    
// });

// //Funcion abrir el contenido de las pestañas
// const openTab = (evt,element) =>{   
//     console.log(element.getAttribute('id')); 
//     //Declaración de variables
//     let tabContents = document.querySelectorAll('.tab-content');
//     let tabLinks = document.querySelectorAll('tablinks');
//     let tabId = element.getAttribute('id');

//     //Inicializar todos los nodos con un display:none
//     tabContents.forEach(content => content.style.display = 'none');
//     //Inicializar todos los botones quitando la class .active
//     tabLinks.forEach(link => link.className = link.className.replace('active',''));
//     //Visualizar el contenido de la pestaña (seleccionada selecciona contendio por ID)
//     console.log(document.getElementById(`${tabId}Content`))
//     document.getElementById(`${tabId}Content`).style.display='block';
//     evt.currentTarget.className += 'active'; //
// }
