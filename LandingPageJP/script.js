// MOSTRAR LAS DIAPOSITVAS SEGUN VAMOS HACIENDO SCROLL

function checkVisibility() {
    const diapositivas = document.querySelectorAll('.diapositiva');
  
    diapositivas.forEach(diapositiva => {
        const rect = diapositiva.getBoundingClientRect(); //metodo del dom para calcular las cordenadas de cada diapositiva para mostrarlaa
        const windowHeight = window.innerHeight;
  
        // Si la diapositiva está en el viewport (visible en la pantalla)
        if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
            diapositiva.classList.add('visible');
        } else {
            diapositiva.classList.remove('visible'); 
        }
    });
}
  

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
  

checkVisibility();

// MODALES MOSTRAR Y DESPLEGAR MAS FONDO BACKDROP
// MODALES MOSTRAR Y DESPLEGAR MÁS FONDO BACKDROP
document.getElementById('sendMessageButton').addEventListener('click', function () {
    // Obtener las instancias de las modales desde el DOM
    var firstModal = document.getElementById('exampleModal');
    var secondModal = document.getElementById('thankYouModal');

    // Cerrar la primera modal
    var modal1 = bootstrap.Modal.getInstance(firstModal);  // Obtiene la instancia de la primera modal
    modal1.hide();

    // Eliminar el fondo oscuro (backdrop) de la primera modal
    var backdrop1 = document.querySelector('.modal-backdrop');
    if (backdrop1) {
        backdrop1.remove();
    }

    // Crear nueva instancia de la segunda modal
    var modal2 = new bootstrap.Modal(secondModal);
    modal2.show();

    // Cerrar automáticamente la segunda modal después de 3 segundos
    setTimeout(function () {
        modal2.hide();  // Cierra el modal

        // Eliminar el backdrop (fondo oscuro) de la segunda modal
        var backdrop2 = document.querySelector('.modal-backdrop');
        if (backdrop2) {
            backdrop2.remove();
        }
    }, 2000);  
});


var closeButton = document.querySelector('#thankYouModal .btn-close');
closeButton.addEventListener('click', function () {
    var modal2 = bootstrap.Modal.getInstance(document.getElementById('thankYouModal'));
    modal2.hide();

    // Eliminar el fondo oscuro (backdrop) de la segunda modal
    var backdrop2 = document.querySelector('.modal-backdrop');
    if (backdrop2) {
        backdrop2.remove();
    }
});


const scrollToTopBtn = document.getElementById("scrollToTop");

// Función para mostrar el botón cuando se hace scroll hacia abajo
window.onscroll = function() {
  if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
    scrollToTopBtn.style.display = "block";  // Mostrar el botón cuando se hace scroll hacia abajo
  } else {
    scrollToTopBtn.style.display = "none";  // Ocultar el botón cuando se vuelve a la parte superior
  }
};

// Función para hacer scroll hacia arriba cuando se hace click en el botón
scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
});




//FUNCIONALIDAD DEL SCROLL + EFECTO FOOTER DE CONTACTO

// Seleccionamos los textos y la imagen
const firstText = document.querySelector('.firstTextoDiv');
const secondText = document.querySelector('.SecondTextoDiv');
const img = document.querySelector('.imgSeconddiv');

// Al hacer hover sobre la imagen, mostrar el segundo texto
img.addEventListener('mouseenter', () => {
    firstText.style.display = 'none'; // Ocultar el primer texto
    secondText.style.display = 'block'; // Mostrar el segundo texto
});

// Al quitar el hover, volver a mostrar el primer texto
img.addEventListener('mouseleave', () => {
    firstText.style.display = 'block'; // Mostrar el primer texto
    secondText.style.display = 'none'; // Ocultar el segundo texto
});

  // Sppiner

  






    





  


