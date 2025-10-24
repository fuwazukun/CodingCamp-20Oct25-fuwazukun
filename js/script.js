// Welcome message
function greet-name() {
  let name = prompt("Enter your name";
  do {
    name = prompt("Please enter your name (letters only):", "");
  } while (!/^[A-Za-z]+$/.test(name));
  return name;
}
const name = getName();{
document.getElementById("greet-name").innerHTML = `
  Hi ${name}, Welcome to My Portfolio
  This is a brief introduction about myself and my work.
`;}

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
