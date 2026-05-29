var observer = new IntersectionObserver(function(entries) {

  entries.forEach(function(entry) {

    var video = entry.target;

    if (entry.isIntersecting) {

      video.play();

    } else {

      video.pause();

    }

  });

}, {
  threshold: 0.5
});

var posts = document.querySelectorAll(".post");

posts.forEach(function(post) {

  var button = post.querySelector(".sound-toggle");
  var video = post.querySelector("video");

  if (button && video) {
	  
	  observer.observe(video);

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

  }

});



const audioButtons = document.querySelectorAll('.audio-player');

audioButtons.forEach(audio => {

  const post = audio.closest('.post');

  const button = post.querySelector('.sound-toggle');

  button.addEventListener('click', () => {

    if (audio.paused) {

      audio.play();
      button.textContent = 'mute';

    } else {

      audio.pause();
      button.textContent = 'sound';

    }

  });

});




var siteTitle = document.querySelector(".site-title");
var popup = document.getElementById("aboutPopup");

siteTitle.addEventListener("click", function() {

  if (popup.style.display === "block") {

    popup.style.display = "none";

  } else {

    popup.style.display = "block";

  }

});

const notesButtons = document.querySelectorAll('.notes-toggle');

notesButtons.forEach(button => {

  button.addEventListener('click', () => {

    const post = button.closest('.post');

    const popup = post.querySelector('.notes-popup');

    popup.classList.toggle('active');

  });

});