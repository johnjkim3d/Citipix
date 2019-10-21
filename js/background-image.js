function backgroundImage() {
  return document.querySelector("#bg-container");
}

function clearBackgroundImage() {
  backgroundImage().classList.remove("citipix-bg");
  backgroundImage().classList.remove("nyc-bg");
  backgroundImage().classList.remove("sf-bg");
  backgroundImage().classList.remove("la-bg");
  backgroundImage().classList.remove("atx-bg");
  backgroundImage().classList.remove("syd-bg");
}

function setCitiBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("citipix-bg");
}

function setNycBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("nyc-bg");
}

function setSfBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("sf-bg");
}

function setLaBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("la-bg");
}

function setAtxBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("atx-bg");
}

function setSydBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("syd-bg");
}
