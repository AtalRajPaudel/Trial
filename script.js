// Name checking
function checkName() {
  const input = document.getElementById("nameInput").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Change "John" to the allowed name you want
  const correctName = "John";

  if (input === correctName) {
    // Save the fact that user is allowed
    localStorage.setItem("access", "granted");
    window.location.href = "choice.html";
  } else {
    errorMsg.textContent = "❌ Incorrect name, try again!";
  }
}

// Navigation
function goTo(page) {
  // Make sure user had access
  if (localStorage.getItem("access") === "granted") {
    window.location.href = page;
  } else {
    alert("Access denied!");
    window.location.href = "index.html";
  }
}
