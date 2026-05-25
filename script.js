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