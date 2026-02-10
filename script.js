document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

  const mailtoLink = `mailto:your@email.com?subject=PixelForge Inquiry from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;

  window.location.href = mailtoLink;
});
