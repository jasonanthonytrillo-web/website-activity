document.addEventListener('DOMContentLoaded', () => {
    const sendMessageButton = document.querySelector('.contact-form .btn');
    const thankYouMessage = document.getElementById('thank-you-message');

    if (sendMessageButton && thankYouMessage) {
        sendMessageButton.addEventListener('click', () => {
            thankYouMessage.style.display = 'block';
            setTimeout(() => {
                thankYouMessage.style.display = 'none';
            }, 2000); // Hide the message after 2 seconds
        });
    }
});