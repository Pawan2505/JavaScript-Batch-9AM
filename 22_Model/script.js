// Show the modal after 3 seconds
setTimeout(function () {
  document.getElementById("Container").classList.add("show");
}, 3000);

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("Container");
  modal.classList.remove("show");
}
