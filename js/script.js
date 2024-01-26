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

    if(opcionSeleccionada.value == 'Español'){
        console.log('Opcion seleccionada Español');
        window.location.assign('violetafilms.html');
        
    }else{
        console.log('Opcion seleccionada Ingles');
        window.location.assign('violetafilms-english.html');
    }

});




document.addEventListener('DOMContentLoaded', function () {
    let otroseleccion = document.getElementById('lang');
    // console.log(otroseleccion);

    otroseleccion.addEventListener('change', function(){
        let opcionSeleccionada = this.options[this.selectedIndex];

        if(opcionSeleccionada.value == 'Español'){
            console.log('Opcion seleccionada Español');
            window.location.assign('violetafilms.html');
            
        } else {
            console.log('Opcion seleccionada Ingles');
            window.location.assign('violetafilms-english.html');
        }
    });
});

