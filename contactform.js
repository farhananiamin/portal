

const modal = document.getElementById("formModal");
const btn = document.getElementById("myBtn");
const closeBtn = document.getElementById("closeBtn");

// When user clicks YOUR purple button, show the form
btn.onclick = function() {
  modal.style.display = "block";
}

// When user clicks (X), hide the form
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When user clicks anywhere OUTSIDE the white box, hide it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}