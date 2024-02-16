const contentEl = document.querySelector(".content"),
  textAreaEl = contentEl.querySelector("textarea"),
  titleEl = contentEl.querySelector("h3"),
  spanEl = contentEl.querySelector("span");

textAreaEl.addEventListener("keyup", () => {
  let areaValue = textAreaEl.value;
  // console.log(areaValue.length);
  if (areaValue) {
    spanEl.innerText = `${areaValue.length}/100`;
    if (areaValue.length > 100) {
      contentEl.classList.add("active");
    } else {
      contentEl.classList.remove("active");
    }
  } else {
    spanEl.innerText = "";
  }
});
