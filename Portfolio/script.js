
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // You can perform further actions here, like sending data to a server or displaying a confirmation message
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  
    // For demonstration purposes, alert a success message
    alert('Message sent successfully!');
  });
  