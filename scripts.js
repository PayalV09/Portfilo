// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Modal Functionality for Subscription
const modal = document.getElementById('subscribeModal');
const subscribeBtn = document.getElementById('subscribeBtn');
const closeModal = document.querySelector('.close');
const subscribeForm = document.getElementById('subscribeForm');

// Show the modal when "Subscribe" button is clicked
subscribeBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

// Close the modal when the "X" is clicked
closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle form submission with an alert message
subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing! We'll send updates to ${email}.`);
    modal.style.display = 'none'; // Close the modal after submission
    subscribeForm.reset(); // Clear the form
});

// Button hover effect
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.transform = 'translateY(-5px)';
    ctaButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
});
ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.transform = 'translateY(0)';
    ctaButton.style.boxShadow = 'none';
});
// Function to show project details in the modal
function showProjectDetails(projectId) {
    const projectDetails = document.getElementById('projectDetails');
    const modal = document.getElementById('projectModal');
    
    // Set project details based on projectId
    let content = '';
    switch (projectId) {
        case 'popcorn':
            content = `
                <h3>Popcorn Pass</h3>
                <p>Popcorn Pass is an online ticket booking app inspired by Book My Show. It allows users to search for movies, check showtimes, and book tickets seamlessly. The app is built with Java and Android, incorporating features like secure payment integration, user authentication, and interactive UI design.</p>
                <ul>
                    <li>Technologies: Java, Android, FireBase</li>
                    <li>Features: Secure payments, user authentication, ticket management.</li>
                </ul>`;
            break;
        case 'pzara':
            content = `
                <h3>P Zara</h3>
                <p>P Zara is a landing page for a beauty product brand that showcases featured products, customer reviews, and promotional content. The page is designed with a modern, responsive layout using HTML, CSS, and JavaScript. It includes interactive elements like image sliders, a newsletter signup form, and contact forms.</p>
                <ul>
                    <li>Technologies: HTML, CSS, JavaScript</li>
                    <li>Features: Responsive design, user interaction, optimized for SEO.</li>
                </ul>`;
            break;
        case 'bloomtown':
            content = `
                <h3>Bloomtown</h3>
                <p>Bloomtown is an online flower shop management system designed to help businesses manage their inventory, sales, and customer orders efficiently. Developed using a full-stack approach with PHP and MySQL, the system supports customer order management, product catalog updates, and analytics.</p>
                <ul>
                    <li>Technologies: HTML, CSS, PHP, MySQL, JavaScript</li>
                    <li>Features: Inventory management, order tracking, customer management, reporting tools.</li>
                </ul>`;
            break;
        default:
            content = `<p>No project details available.</p>`;
    }

    // Display the project details in the modal
    projectDetails.innerHTML = content;
    modal.style.display = 'block';
}

// Close the modal when the "X" is clicked
const modalClose = document.querySelector('.modal .close');
modalClose.addEventListener('click', function () {
    document.getElementById('projectModal').style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', function (event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        
        // Clear previous feedback
        feedback.innerHTML = '';

        // Gather form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple client-side validation
        if (name && email && message) {
            feedback.innerHTML = '<p class="success-message">Thank you for your message! We will get back to you soon.</p>';
            feedback.style.color = 'green';
            form.reset(); // Reset the form after successful submission
        } else {
            feedback.innerHTML = '<p class="error-message">Please fill out all fields before submitting.</p>';
            feedback.style.color = 'red';
        }
    });

    // Real-time validation feedback
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (input.checkValidity()) {
                input.style.borderColor = 'green';
            } else {
                input.style.borderColor = 'red';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Dynamic Year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to top
        });
    });
});
