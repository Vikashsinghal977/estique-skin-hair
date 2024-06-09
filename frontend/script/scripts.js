document.getElementById('navbar-toggle').addEventListener('click', function() {
    const icons = document.querySelector('.navbar-icons');
    if (icons.style.display === 'flex') {
        icons.style.display = 'none';
    } else {
        icons.style.display = 'flex';
        icons.style.flexDirection = 'row';
        // icons.style.gap = '0px';
    }
});

document.getElementById('pageChanger').addEventListener('click', () => {
    window.location = '/frontend/html/Thankyou..html';
})

function bookAppointment() {
    alert('You booking have been successfully.......');
    window.location.href = '/frontend/html/Thankyou..html'
    // You can replace the alert with actual redirection code:
    // window.location.href = 'your-booking-page-url';
}

document.addEventListener('DOMContentLoaded', function() {
    // Select all the FAQ question buttons
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle the active state for the clicked question
            question.classList.toggle('active');

            // Get the next sibling element (the answer div)
            const answer = question.nextElementSibling;

            if (question.classList.contains('active')) {
                // If active, expand the answer
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                // Otherwise, collapse the answer
                answer.style.maxHeight = '0';
            }
        });
    });
});