const photoFrame = document.querySelector(".photo-frame");
const lightbox = document.getElementById("lightbox");
const closeLightbox = document.getElementById("closeLightbox");

photoFrame.addEventListener("click", () => {
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
});

function closePhoto() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

closeLightbox.addEventListener("click", closePhoto);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closePhoto();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePhoto();
});
