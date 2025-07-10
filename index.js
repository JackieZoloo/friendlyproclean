function openModal() {
  document.getElementById("serviceModal").style.display = "block";
}

function closeModal() {
  document.getElementById("serviceModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("serviceModal");
  if (event.target == modal) {
    closeModal();
  }
}
function openQuoteModal() {
  document.getElementById("quoteModal").style.display = "block";
}

function closeQuoteModal() {
  document.getElementById("quoteModal").style.display = "none";
}

// Optional: Close when clicking outside the form
window.onclick = function(event) {
  const quoteModal = document.getElementById("quoteModal");
  if (event.target === quoteModal) {
    closeQuoteModal();
  }
}

