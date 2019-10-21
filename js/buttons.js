function mySelect() {
  return document.querySelector("#select-a-city");
}

function selectNycButton() {
  return document.querySelecter("#nyc");
}

function selectSfButton() {
  return document.querySelector("#sf");
}

function selectLaButton() {
  return document.querySelector("#la");
}

function selectAtxButton() {
  return document.querySelector("#atx");
}

function selectSydButton() {
  return document.querySelector("#syd");
}

function onSelectACityButtonClicked(callback) {
  selectACityButton().addEventListener("click", callback);
}

function onNycButtonClicked(callback) {
  nycButton().addEventListener("click", callback);
}

function onSfButtonClicked(callback) {
  sfButton().addEventListener("click", callback);
}

function onLaButtonClicked(callback) {
  laButton().addEventListener("click", callback);
}

function onAtxButtonClicked(callback) {
  atxButton().addEventListener("click", callback);
}

function onSydButtonClicked(callback) {
  sydButton().addEventListener("click", callback);
}

function setSelectACityButtonCheck() {
  selectACityButton().classList.replace("check-mark");
}

function setNycButtonCheck() {
  nycButton().classList.replace("check-mark");
}

function setSfButtonCheck() {
  sfButton().classList.replace("check-mark");
}

function setLaButtonCheck() {
  laButton().classList.replace("check-mark");
}

function setAtxButtonCheck() {
  atxButton().classList.replace("check-mark");
}

function setSydButtonCheck() {
  sydButton().classList.replace("check-mark");
}
