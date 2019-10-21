document.addEventListener("DOMContentLoaded", function() {
  document
    .querySelector("#mySelect")
    .addEventListener("change", function(event) {
      const selectCity = event.target.value;
      if (selectCity === "nyc") {
        setNycBackgroundImage();
      } else if (selectCity === "sf") {
        setSfBackgroundImage();
      } else if (selectCity === "la") {
        setLaBackgroundImage();
      } else if (selectCity === "atx") {
        setAtxBackgroundImage();
      } else if (selectCity === "syd") {
        setSydBackgroundImage();
      } else {
        setCitiBackgroundImage();
      }
    });
});
