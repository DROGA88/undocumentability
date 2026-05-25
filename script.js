var button = document.querySelector(".sound-toggle");
var video = document.querySelector("video");

button.addEventListener("click", function() {

  if (video.muted) {

    video.muted = false;
    video.volume = 1;
    video.play();

    button.textContent = "mute";

  } else {

    video.muted = true;

    button.textContent = "sound";
  }

});