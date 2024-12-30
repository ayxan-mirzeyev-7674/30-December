document.querySelectorAll(".imageDiv").forEach((div) => {
  div.addEventListener("click", (e) => {
    document
      .querySelector(".imageDivExtended")
      ?.classList.remove("imageDivExtended");
    e.target.classList.add("imageDivExtended");
  });
});

document.querySelectorAll(".portfoli-nav ul li").forEach((div) => {
  div.addEventListener("click", (e) => {
    document.querySelector(".selected")?.classList.remove("selected");
    e.target.classList.add("selected");
  });
});
