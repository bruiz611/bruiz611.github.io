const link = document.getElementById("secretLink");

link.addEventListener("click", function(e) {
  e.preventDefault();
  
  alert("⚠️ IP Address Logged. Notifying Craig... ⚠️");

  setTimeout(() => {
    window.location.href = "https://www.max.com";
  }, 1500);
});
