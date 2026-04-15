// DARK MODE
function toggleDark() {
  document.body.classList.toggle("dark");
}

// ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

// CONTACT MESSAGE
function sendMsg(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Message sent successfully!";
}
