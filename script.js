const link = document.getElementById("secretLink");

link.addEventListener("click", function(e) {
  e.preventDefault();
  
  alert("⚠️ IP Address Logged. Notifying Craig... ⚠️");

  setTimeout(() => {
    window.location.href = "https://www.max.com";
  }, 1500);
});

const startDate = new Date("2025-11-17T08:30:00");

function updateCounter() {
  const now = new Date();
  const difference = now - startDate;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("daysCounter").textContent = `${days} Days, ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

updateCounter();
setInterval(updateCounter, 1000);
