//FAQs DESPLEGABLES
const contenedores = document.querySelectorAll('.container');

contenedores.forEach(contenedor => {
    contenedor.addEventListener('click', ()=>{
        contenedor.classList.toggle('activa');
    });
});


//Selected language
// let seleccion = document.querySelector('#valores');

// seleccion.addEventListener('change', function(){
//     let opcionSeleccionada = this.options[this.selectedIndex];

//     if(opcionSeleccionada.value == 'Español'){
//         console.log('Opcion seleccionada Español');
//         window.location.assign('violetafilms.html');
        
//     }else{
//         console.log('Opcion seleccionada Ingles');
//         window.location.assign('violetafilms-english.html');
//     }

// });




// document.addEventListener('DOMContentLoaded', function () {
//     let otroseleccion = document.getElementById('lang');
//     console.log(otroseleccion);

//     otroseleccion.addEventListener('change', function(){
//         let opcionSeleccionada = this.options[this.selectedIndex];

//         if(opcionSeleccionada.value == 'Español'){
//             console.log('Opcion seleccionada Español');
//             window.location.assign('violetafilms.html');
            
//         } else {
//             console.log('Opcion seleccionada Ingles');
//             window.location.assign('violetafilms-english.html');
//         }
//     });
// });

/**fins aqui v1 */


let seleccion = document.querySelectorAll('.valores');

seleccion.forEach((selector) => {
    selector.addEventListener('change', (e) => {
        let idioma = e.target.value;
        console.log(idioma);

        switch (idioma) {
            case '1':
                window.location.assign('violetafilms.html');
                break;
            case '2':
                window.location.assign('violetafilms-english.html');
                break;
            case '3':
                window.location.assign('signupSP.html');
                break;
            case '4':
                window.location.assign('signup.html');
                break;
            case '5':
                window.location.assign('planformSP.html');
                break;
            case '6':
                window.location.assign('planform.html');
                break;
            case '7':
                window.location.assign('login.html');
                break;
            case '8':
                window.location.assign('loginSP.html');
                break;
            default:
                console.log(idioma);
                window.location.assign('#');
        }
    });
});