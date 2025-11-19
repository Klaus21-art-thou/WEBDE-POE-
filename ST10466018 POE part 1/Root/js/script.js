
/*methods used were provided by and consulted to by chat gpt open ai*/
document.addEventListener('DOMContentLoaded', function() {
    // Typewriter Effect for Greeting
    const greetingText = "Welcome to The Gamecave!";
    let idx = 0;
    const greetingElement = document.getElementById('animatedGreeting');
    if (greetingElement) {
        function typeWriter() {
            if (idx < greetingText.length) {
                greetingElement.textContent += greetingText.charAt(idx);
                idx++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    }

    // Location Modal functionality
    const locationModal = document.getElementById('locationModal');
    const locationClose = document.getElementById('locationClose');
    const openLocationLinks = document.querySelectorAll('#openLocation');

    openLocationLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            locationModal.style.display = 'block';
        });
    });
    if (locationClose) {
        locationClose.addEventListener('click', () => {
            locationModal.style.display = 'none';
        });
    }
    window.addEventListener('click', e => {
        if (e.target === locationModal) {
            locationModal.style.display = 'none';
        }
    });

    // Gallery Lightbox functionality
    const galleryImgs = document.querySelectorAll('.gallery-img');
    const galleryLightbox = document.getElementById('galleryLightbox');
    const galleryClose = document.getElementById('galleryClose');
    const galleryImg = document.getElementById('galleryImg');

    galleryImgs.forEach(img => {
        img.addEventListener('click', () => {
            galleryLightbox.style.display = 'block';
            galleryImg.src = img.src;
            galleryImg.alt = img.alt;
        });
    });
    if (galleryClose) {
        galleryClose.addEventListener('click', () => {
            galleryLightbox.style.display = 'none';
        });
    }
    window.addEventListener('click', e => {
        if (e.target === galleryLightbox) {
            galleryLightbox.style.display = 'none';
        }
    });

    // Service Search functionality
    const serviceSearch = document.getElementById('serviceSearch');
    if (serviceSearch) {
        serviceSearch.addEventListener('input', e => {
            const filter = e.target.value.toLowerCase();
            const services = document.querySelectorAll('.service-item');
            services.forEach(service => {
                const text = service.textContent.toLowerCase();
                if (text.includes(filter)) {
                    service.style.display = '';
                } else {
                    service.style.display = 'none';
                }
            });
        });
    }

    // Contact Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const message = document.getElementById('contactMessage').value.trim();
            const feedback = document.getElementById('contactFeedback');

            // Validation
            if (!name || !email || !message) {
                feedback.textContent = "Please fill all fields.";
                feedback.style.color = 'red';
                return;
            }

            if (!validateEmail(email)) {
                feedback.textContent = "Please enter a valid email.";
                feedback.style.color = 'red';
                return;
            }

            feedback.style.color = 'lime';
            feedback.textContent = "Thank you for contacting us, " + name + "! We will get back to you shortly.";
            contactForm.reset();
        });
    }

    // Enquiry Form Validation and Submission
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', e => {
            e.preventDefault();
            const name = document.getElementById('enquiryName').value.trim();
            const email = document.getElementById('enquiryEmail').value.trim();
            const message = document.getElementById('enquiryMessage').value.trim();
            const feedback = document.getElementById('enquiryFeedback');

            // Validation
            if (!name || !email || !message) {
                feedback.textContent = "Please fill all fields.";
                feedback.style.color = 'red';
                return;
            }

            if (!validateEmail(email)) {
                feedback.textContent = "Please enter a valid email.";
                feedback.style.color = 'red';
                return;
            }

            feedback.style.color = 'lime';
            feedback.textContent = "Thank you for your feedback, " + name + "!";
            enquiryForm.reset();
        });
    }

    // Email Validation Function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});
