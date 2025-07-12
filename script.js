function toggleMenu() {
    const menu = document.getElementById('menu-mobile');
    const hamburger = document.querySelector('.hamburger'); // To potentially change hamburger icon
    
    menu.classList.toggle('active');
    
    // Optional: Change hamburger to an "X" or similar when menu is open
    // hamburger.classList.toggle('is-active'); 
}

function openTab(tabName) {
    // Cerrar el menú después de hacer clic en un enlace (if it's open)
    const menu = document.getElementById('menu-mobile');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        // Optional: Reset hamburger icon if it was changed
        // const hamburger = document.querySelector('.hamburger');
        // hamburger.classList.remove('is-active');
    }

    // Ocultar todas las secciones
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección correspondiente
    let activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    } else {
        console.error("Tab with ID '" + tabName + "' not found.");
    }

    // Scroll to the top of the page or to the section
    // window.scrollTo(0, 0); // Scrolls to top of page
    // Or if you want to scroll to the section (consider header height)
    // const headerOffset = document.querySelector('header').offsetHeight || 125;
    // const elementPosition = activeTab.getBoundingClientRect().top + window.pageYOffset;
    // const offsetPosition = elementPosition - headerOffset;
    // window.scrollTo({
    //      top: offsetPosition,
    //      behavior: "smooth"
    // });
} 

function showThankYou(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.style.display = 'none';
        document.getElementById('thank-you-message').style.display = 'block';
      } else {
        alert('Hubo un error. Intenta nuevamente.');
      }
    }).catch(() => {
      alert('No se pudo enviar el formulario. Intenta más tarde.');
    });
  }

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formulario');
  const mensajeGracias = document.getElementById('gracias');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Don't reload the page

    const datos = new FormData(form);

    fetch('https://formsubmit.co/ajax/info@davidcorp.p-e.kr', {
      method: 'POST',
      body: datos,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        form.reset(); // Clear form
        mensajeGracias.style.display = 'block'; // Show success message
      } else {
        alert("Hubo un error al enviar. Intenta nuevamente.");
      }
    })
    .catch(error => {
      console.error(error);
      alert("Error al enviar el mensaje.");
    });
  });
});


// Initialize the first tab (e.g., 'home') to be active when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Check if there's a hash in the URL (e.g., index.html#nosotros)
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        openTab(hash);
    } else {
        // If no hash or invalid hash, open the 'home' tab by default
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.classList.add('active');
        }
    }


    // Add smooth scrolling for internal links if desired (and not using openTab for all)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         const hrefAttribute = this.getAttribute('href');
    //         // Ensure it's not just a placeholder href="#"
    //         if (hrefAttribute.length > 1 && document.querySelector(hrefAttribute)) {
    //             e.preventDefault();
    //             const targetElement = document.querySelector(hrefAttribute);
    //             const headerOffset = document.querySelector('header').offsetHeight || 125;
    //             const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    //             const offsetPosition = elementPosition - headerOffset;

    //             window.scrollTo({
    //                 top: offsetPosition,
    //                 behavior: "smooth"
    //             });
    //             // If using openTab, this might conflict, so ensure openTab handles scrolling or this is disabled.
    //         }
    //     });
    // });
});