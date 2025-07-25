document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("emailForm");
  const emailInput = document.getElementById("emailInput");
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
      errorMsg.textContent = "❌ Please enter a valid email address.";
      errorMsg.style.display = "block";
      successMsg.style.display = "none";
      emailInput.style.border = "1px solid red";
    } else {
      successMsg.textContent = "✅ Email successfully submitted!";
      successMsg.style.display = "block";
      errorMsg.style.display = "none";
      emailInput.style.border = "1px solid limegreen";

      // Optionally reset
      setTimeout(() => {
        emailInput.value = "";
        emailInput.style.border = "1px solid grey";
        successMsg.style.display = "none";
      }, 3000);
    }
  });
});
