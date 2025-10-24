// Welcome message
function getName() {
  let name = "";
  do {
    name = prompt("Please enter your name (letters only):", "");
  } while (!/^[A-Za-z]+$/.test(name));
  return name;
}
const userName = getName();
document.getElementById("welcomeMessage").innerHTML = `
  Hi ${userName}, Welcome to My Portfolio<br>
  This is a brief introduction about myself and my work.
`;

// Contact form validation and display
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const resultDiv = document.getElementById("formResult");

  let resultText = `Current Time : ${new Date().toString()}<br>`;
  for (let [key, value] of formData.entries()) {
    resultText += `${key} : ${value}<br>`;
  }

  resultDiv.innerHTML = resultText;
  alert("Your information has been submitted");
  this.reset();
});
