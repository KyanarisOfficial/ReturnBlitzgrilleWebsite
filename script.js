const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const downloadTrigger = document.getElementById("downloadTrigger");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggleBtn.querySelector("i").classList.replace("fa-moon", "fa-sun");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const icon = toggleBtn.querySelector("i");

  if (body.classList.contains("light")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  }
});

downloadTrigger.addEventListener("click", (e) => {
  e.preventDefault();
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

modalClose.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});