const downloadTrigger = document.getElementById("downloadTrigger");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

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