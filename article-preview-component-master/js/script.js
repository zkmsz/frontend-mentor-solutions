const share = document.getElementById("share-icon");

const authorFooter = document.getElementById("author-footer");
const shareFooter = document.getElementById("share-footer");
const desktopTooltip = document.getElementById("desktop-tooltip");

const toggleShare = () => {
  if (window.innerWidth >= 1024) {
    desktopTooltip.classList.toggle("hidden");
  } else {
    authorFooter.classList.toggle("hidden");
    shareFooter.classList.toggle("hidden");
  }
};
