function toggleMenu() {
    const menu = document.getElementById('menu-mobile');
    const hamburger = document.querySelector('.hamburger'); // To potentially change hamburger icon
    
    menu.classList.toggle('active');
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

        // 🔒 Scroll after a short delay to ensure visibility
        setTimeout(() => {
            const yOffset = -100; // Height of your sticky header
            const y = activeTab.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }, 10);
    } else {
        console.error("Tab with ID '" + tabName + "' not found.");
    }

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

});

// Close menu when clicking outside
document.addEventListener("click", function(event) {
  const menu = document.getElementById("menu-mobile");
  const hamburger = document.querySelector(".hamburger");

  const isClickInside = menu.contains(event.target) || hamburger.contains(event.target);

  if (!isClickInside) {
    menu.classList.remove("active");
  }
});