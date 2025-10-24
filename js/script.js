window.onload = function () {
  welcomeMessage();

  // Smooth scroll for all nav links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = this.getAttribute('href');
      e.preventDefault();

      if (target === '#home' || target === '#home-section') {
        // Scroll to very top
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        const section = document.querySelector(target);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Active navbar highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
};

// ===============================
// Welcome Message
// ===============================
function welcomeMessage() {
  let name = prompt("Enter your name (letters only):");

  while (name && !/^[A-Za-z]+$/.test(name)) {
    name = prompt("Please enter letters only (A–Z or a–z):");
  }

  if (!name) name = "Guest";

  const greet = document.getElementById("greet-name");
  greet.innerHTML = `
    Hi <strong>${name}</strong>, Welcome to My Portfolio!<br>
    This is a brief introduction about myself and my work.
  `;
  greet.classList.add("fade-in");
}

// ===============================
// Contact Form (Formspree Integration)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contactForm');
  const resultDiv = document.getElementById('formResult');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      resultDiv.innerHTML = "<p style='color:gray;'>⏳ Sending...</p>";

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          resultDiv.innerHTML = "<p style='color:green;'>✅ Message sent successfully!</p>";
          form.reset();

          // Optional fade-out after 5 seconds
          setTimeout(() => {
            resultDiv.innerHTML = "";
          }, 5000);
        } else {
          resultDiv.innerHTML = "<p style='color:red;'>❌ Failed to send message. Please try again later.</p>";
        }
      })
      .catch(() => {
        resultDiv.innerHTML = "<p style='color:red;'>⚠️ Network error. Please check your connection.</p>";
      });
    });
  }
});
