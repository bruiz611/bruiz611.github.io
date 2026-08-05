const link = document.getElementById("secretLink");

link.addEventListener("click", function(e) {
  e.preventDefault();
  
  alert("⚠️ IP Address Logged. Notifying Craig... ⚠️");

  setTimeout(() => {
    window.location.href = "https://www.max.com";
  }, 1500);
});

const startDate = new Date("2025-11-17T07:30:00");

function updateCounter() {
  const now = new Date;
  const difference = now - startDate;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("daysCounter").textContent = `${days} Days, ${hours} Hours`;
}

updateCounter();
setInterval(UpdateCounter, 1000);
