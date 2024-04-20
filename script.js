// Home page arrow action

const arrowDiv = document.querySelector(".arrow-con");
arrowDiv.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
