/* ==================== EMAIL JS ============== */
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact_message');

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_gl60whl', 'template_grxpwww', '#contact-form', 'KbfC3xhEWTQmotVO_')
            .then(() => {
                contactMessage.textContent = 'Message sent successfully ✅';
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
                contactForm.reset();
            })
            .catch(() => {
                contactMessage.textContent = 'Message not sent (ERROR)';
            });
    }

contactForm.addEventListener('submit', sendEmail);

// SHOW SCROLL UP
/* ==================== SCROLL UP ==================== */

// Function to show/hide the scroll-up button
const scrollUp = () => {
    const scrollup = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
        scrollup.classList.add('show-scroll');
    } else {
        scrollup.classList.remove('show-scroll');
    }
};

// Add scroll event listener
window.addEventListener('scroll', scrollUp);

// Smooth scroll to top when the button is clicked
document.getElementById('scroll-up').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
});
/* ============ Scroll Sections Active -==================== */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__list a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);
/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // Animations repeat
})

sr.reveal(`.perfil, .contact__form`)
sr.reveal(`.info`, {origin: 'left', delay: 800})
sr.reveal(`.skills`, {origin: 'left', delay: 1000})
sr.reveal(`.about`, {origin: 'right', delay: 1200})
sr.reveal(`.projects__card, .services__card, .experience__card`, {interval: 100})