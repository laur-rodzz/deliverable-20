var video;
var playbackSpeed = 1.0;  

window.addEventListener("load", function() {
    console.log("Good job opening the window");

    
    video = document.querySelector("#player1");

    
    video.autoplay = false;

   
    video.loop = false;
	}); 
    
    var playButton = document.querySelector("#play");
    var pauseButton = document.querySelector("#pause");

    
    playButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
        }
    });

    pauseButton.addEventListener("click", function() {
        if (!video.paused) {
            video.pause();
        }
    });

    var volumeSlider = document.querySelector("#slider");
    var volumeSpan = document.querySelector("#volume");

    
    volumeSlider.addEventListener("input", function() {
        var volume = volumeSlider.value;
        video.volume = volume / 100;
        volumeSpan.innerHTML = volume + "%";
    });

    
    var speedUpButton = document.querySelector("#faster");

    
    speedUpButton.addEventListener("click", function() {
        playbackSpeed += 0.1;  // Increase speed by 0.1
        video.playbackRate = playbackSpeed;
        console.log("New playback speed: " + playbackSpeed.toFixed(1));
    });
   
    var skipButton = document.querySelector("#skip");

    skipButton.addEventListener("click", function() {
        var newTime = video.currentTime + 10;
        if (newTime > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime = newTime;
        }
        console.log("Current time: " + video.currentTime.toFixed(1));
    });

    var muteButton = document.querySelector("#mute");

    muteButton.addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            muteButton.innerHTML = "Mute";
        } else {
            video.muted = true;
            muteButton.innerHTML = "Unmute";
        }
    });

    var vintageButton = document.querySelector("#vintage");
    var origButton = document.querySelector("#orig");

    vintageButton.addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    origButton.addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });

    var origButton = document.querySelector("#orig");
	
    origButton.addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });


