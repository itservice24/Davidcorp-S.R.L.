<script>
/* ========== 1. MENU MOBILE TOGGLE ========== */
function toggleMenu() {
    const menu = document.getElementById('menu-mobile');
    menu.classList.toggle('active');
}


/* ========== 2. TAB NAVIGATION ========== */
function openTab(tabName) {
    const menu = document.getElementById('menu-mobile');
    if (menu.classList.contains('active')) menu.classList.remove('active');

    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    } else {
        console.error("Tab with ID '" + tabName + "' not found.");
    }
}


/* ========== 3. NEWSLETTER FORM (Footer) ========== */
function showThankYou(event) {
    event.preventDefault();
    const form = document.getElementById("newsletter-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    const formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            form.style.display = "none";
            thankYouMessage.style.display = "block";

            // Optional redirect after 3s (you can change or remove)
            setTimeout(() => {
                window.location.href = "https://davidcorp.p-e.kr";
            }, 3000);
        } else {
            alert("Hubo un error al enviar. Intenta nuevamente.");
        }
    }).catch(() => {
        alert("No se pudo enviar el formulario. Intenta más tarde.");
    });
}


/* ========== 4. LIBRO DE RECLAMACIONES FORM ========== */
document.addEventListener('DOMContentLoaded', function () {
    const libroForm = document.getElementById('formulario');
    const mensajeGracias = document.getElementById('gracias');

    if (libroForm) {
        libroForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const datos = new FormData(libroForm);

            fetch('https://formsubmit.co/ajax/info@davidcorp.p-e.kr', {
                method: 'POST',
                body: datos,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    libroForm.reset();
                    mensajeGracias.style.display = 'block';
                } else {
                    alert("Hubo un error al enviar. Intenta nuevamente.");
                }
            })
            .catch(error => {
                console.error(error);
                alert("Error al enviar el mensaje.");
            });
        });
    }
});


/* ========== 5. INITIAL TAB ON LOAD ========== */
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        openTab(hash);
    } else {
        const homeSection = document.getElementById('home');
        if (homeSection) homeSection.classList.add('active');
    }
});
</script>