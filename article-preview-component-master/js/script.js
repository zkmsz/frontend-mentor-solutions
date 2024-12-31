const share = document.getElementById("share-icon");

const authorFooter = document.getElementById("author-footer");
const shareFooter = document.getElementById("share-footer");
const shareIcon = document.getElementById("share-icon");

const toggleShare = () => {
  if (window.innerWidth >= 1024) {
    console.log(window.innerWidth);
  } else {
    authorFooter.classList.toggle("hidden");
    shareFooter.classList.toggle("hidden");
  }
};
