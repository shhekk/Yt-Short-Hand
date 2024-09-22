document.addEventListener("keydown", function (event) {
  const video = document.querySelector("video");
  const seekUI = document.querySelector(".ytp-doubletap-ui-legacy");
  const circle = document.querySelector(".ytp-doubletap-static-circle");
  if (!video) return; // Exit if no video element is found

  switch (event.key) {
    case "d": // Skip forward 5 seconds
      video.currentTime += 5;
      seekUI.classList.add("ytp-time-seeking");
      seekUI.setAttribute("data-side", "forward");
      seekUI.style.display = "block";
      circle.style.display = "none";
      setTimeout(() => {
        seekUI.classList.remove("ytp-time-seeking");
        seekUI.style.display = "none";
        circle.style.display = "";
      }, 700);

      break;

    case "s": // Skip backward 5 seconds
      video.currentTime -= 5;
      seekUI.classList.add("ytp-time-seeking");
      seekUI.setAttribute("data-side", "back");
      seekUI.style.display = "block";
      circle.style.display = "none";
      setTimeout(() => {
        seekUI.classList.remove("ytp-time-seeking");
        circle.style.display = "";
        seekUI.style.display = "none";
      }, 700);

      break;

    case "r":
      event.preventDefault();
      const ctrlRightArrowEvent = new KeyboardEvent("keydown", {
        key: "ArrowRight",
        code: "ArrowRight",
        ctrlKey: true,
        bubbles: true,
      });
      (document.activeElement || video).dispatchEvent(ctrlRightArrowEvent);
      break;
  }
});
