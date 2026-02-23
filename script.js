function showBookingMessage(msg = 'You are booked!', timeout = 2500){
  if (document.getElementById('booking-announcement')) return;
  const el = document.createElement('div');
  el.id = 'booking-announcement';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), timeout);
}

// Add click handler for Book Now buttons
document.addEventListener('DOMContentLoaded', function() {
  const bookNowButtons = document.querySelectorAll('.book-now');
  bookNowButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      showBookingMessage();
    });
  });

  const sendMessageBtn = document.querySelector('.contact-form .btn');
  if (sendMessageBtn) {
    sendMessageBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showBookingMessage('Message sent successfully!');
    });
  }
});