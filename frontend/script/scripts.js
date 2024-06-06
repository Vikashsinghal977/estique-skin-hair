document.getElementById('navbar-toggle').addEventListener('click', function() {
    const icons = document.querySelector('.navbar-icons');
    if (icons.style.display === 'flex') {
        icons.style.display = 'none';
    } else {
        icons.style.display = 'flex';
        icons.style.flexDirection = 'column';
    }
});

function bookAppointment() {
    alert('Redirecting to the appointment booking page...');
    // You can replace the alert with actual redirection code:
    // window.location.href = 'your-booking-page-url';
}