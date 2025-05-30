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
    event.preventDefault(); // Stop default form submission

    const form = document.getElementById("newsletter-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    if (form && thankYouMessage) {
        form.style.display = "none"; // Hide form
        thankYouMessage.style.display = "block"; // Show thank-you message

        // Optional: Submit the form data using Fetch API or XMLHttpRequest if needed
        // For FormSubmit.co, the default action is usually sufficient.
        // If you need to handle the submission purely in JS:
        /*
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json' // Or 'text/html' depending on FormSubmit settings
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                console.error('Form submission failed');
                // Optionally show form again or an error message
                // form.style.display = "block";
                // thankYouMessage.style.display = "none";
                // alert("Hubo un problema al enviar el formulario.");
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            // form.style.display = "block";
            // thankYouMessage.style.display = "none";
            // alert("Hubo un error de red.");
        });
        */
        
        // The original script submits the form after a delay,
        // which might not be ideal if the user navigates away.
        // FormSubmit.co handles the redirect itself after submission.
        // If you want to keep the redirect:
        setTimeout(() => {
            // This will submit the form via its action attribute
            // form.submit(); // This might cause a full page reload before FormSubmit's AJAX
            // For FormSubmit.co, typically you let it handle the submission and redirect.
            // If you want a custom redirect *after* FormSubmit does its thing,
            // FormSubmit has a _next parameter: <input type="hidden" name="_next" value="your_redirect_url">
            // Or if you want to redirect from JS after a delay:
             window.location.href = "davidcorp.p-e.kr"; // Or your desired redirect page
        }, 3000); // Redirect after 3 seconds
    } else {
        console.error("Form or thank you message element not found.");
    }
}

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