console.log('script is running');

document.getElementsByClassName('full-screen')[0].style.opacity = 0;

const images = document.querySelectorAll('.main-images');
const divs = document.querySelectorAll('.banner-thumb-sub-div');

window.addEventListener('load', function(){
  for(let i=0; i<images.length; i++){
    images[i].style.opacity = 0;
  }
  images[0].style.opacity = 1;
});

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('mouseover', function() {
    mouseover(i);
  });
}

function mouseover(i) {
  for(let i=0; i<images.length; i++){
    images[i].style.opacity = 0;
    images[i].style.transition = 'all .8s ease-in';
  }
  let p= i % 4;
  images[p].style.opacity = 1;
  images[p].style.transition = 'all .8s ease-in';
}

// video

new YouTubeToHtml5();

const video = document.getElementById('video');

console.log(video);

let imgSrc = ['images/play.png', 'images/pause.png'];

const playPauseDiv = document.getElementsByClassName('play-div')[0];
const centerPlayImg = document.getElementsByClassName('main-play-img')[0];
const playIcon = document.getElementsByClassName('img-icon')[1];
const stopDiv = document.getElementsByClassName('stop-div')[0];
const fullScreenBtn = document.getElementsByClassName('full-screen')[0];
const container = document.getElementsByClassName('video-with-control-div')[0];
const videoController = document.getElementsByClassName('video-control-div')[0];
const soundBig = document.getElementsByClassName('sound')[0];
const innerSoundBig = document.getElementsByClassName('inner-sound')[0];
const subSoundsBig = document.querySelectorAll('.sub-sound');
const timeRemainingBig = document.getElementsByClassName('time-remaining-div')[0];
const mainProgressbarBig = document.getElementsByClassName('progress-bar-div')[0];
const playStopBigDiv = document.getElementsByClassName('play-stop-div')[0];
const stopDivBig = document.getElementsByClassName('stop-div')[0];
const playDivBig = document.getElementsByClassName('play-div')[0];
const theBigVideo = document.getElementById('video');
const mainBigPlayPauseImg = document.getElementsByClassName('main-play-img')[0];






function isPlay() {
	if (video.paused) {
		playIcon.src = imgSrc[0];
		centerPlayImg.src = imgSrc[0];
		centerPlayImg.style.opacity = 0.5;
	} else {
		centerPlayImg.style.opacity = 0;
		playIcon.src = imgSrc[1];
		centerPlayImg.src = imgSrc[1];
	}
}

function triggerMouseOver() {
	// Create a new mouseover event
	var event = new MouseEvent('mouseover', {
		'view': window,
		'bubbles': true,
		'cancelable': true
	});
	
	// Dispatch the event on the video element
	video.dispatchEvent(event);
}

playPauseDiv.addEventListener('click', function() {
	if (video.paused) {
		video.play();
		isPlay();
	} else {
		video.pause();
		isPlay();
	}
	
	triggerMouseOver(); // Trigger mouseover event after clicking
});

video.addEventListener('mouseover', function() {
	if (video.paused) {
		isPlay();
	} else {
		centerPlayImg.style.opacity = 0.5;
		fullScreenBtn.style.opacity = 1;
	}
});

video.addEventListener('mouseout', function() {
	if (video.paused) {
		isPlay();
 		fullScreenBtn.style.opacity = 0;
	} else {
		centerPlayImg.style.opacity = 0;
		fullScreenBtn.style.opacity = 0;
	}
});

videoController.addEventListener('mouseover', function() {
	if (video.paused) {
		isPlay();
	} else {
		centerPlayImg.style.opacity = 0.5;
		fullScreenBtn.style.opacity = 1;
	}
});

videoController.addEventListener('mouseout', function() {
	if (video.paused) {
		isPlay();
 		fullScreenBtn.style.opacity = 0;
	} else {
		centerPlayImg.style.opacity = 0;
		fullScreenBtn.style.opacity = 0;
	}
});

fullScreenBtn.addEventListener('mouseover', function() {
	if (video.paused) {
		isPlay();
		fullScreenBtn.style.opacity = 1;
	} else {
		fullScreenBtn.style.opacity = 1;
	}
});

fullScreenBtn.addEventListener('mouseout', function() {
	if (video.paused) {
		isPlay();
		fullScreenBtn.style.opacity = 0;
	} else {
		fullScreenBtn.style.opacity = 0;
	}
});

video.addEventListener('click', function() {
	if (video.paused) {
		video.play();
		isPlay();
	} else {
		video.pause();
		isPlay();
	}
	
	triggerMouseOver(); // Trigger mouseover event after clicking
});

centerPlayImg.addEventListener('click', function() {
	if (video.paused) {
		video.play();
		isPlay();
	} else {
		video.pause();
		isPlay();
	}
	
	triggerMouseOver(); // Trigger mouseover event after clicking
});

centerPlayImg.addEventListener('mouseover', function() {
	if (video.paused) {
		isPlay();
	} else {
		centerPlayImg.style.opacity = 0.5;
	}
});

centerPlayImg.addEventListener('mouseout', function() {
	if (video.paused) {
		isPlay();
	} else {
		centerPlayImg.style.opacity = 0;
	}
});

stopDiv.addEventListener('click', function() {
	video.pause();
	video.currentTime = 0;
	isPlay();
	fullScreenBtn.style.opacity = 0;
});

// Duration video 

const totalDuration = document.getElementById('total-duration');
const currentDuration = document.getElementById('current-duration');

video.addEventListener('loadedmetadata', function() {
  const duration = video.duration;
  const formattedDuration = formatTime(duration);
  totalDuration.textContent = formattedDuration;
});

video.addEventListener('timeupdate', function() {
  const currentTime = video.currentTime;
  const formattedCurrentTime = formatTime(currentTime);
  currentDuration.textContent = formattedCurrentTime;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

video.addEventListener('ended', function() {
video.currentTime = 0;
clicked = 0;
isPlay();
});

setInterval(function(){

const totalVidDuration = video.duration;
const currentVideoDuration = video.currentTime;

if(currentVideoDuration >= totalVidDuration -1){
stopDiv.click();
}

},1000)

//Sound System













const subSounds = document.getElementsByClassName('sub-sound');
const volumeLevels = [0.15, 0.30, 0.45, 0.60, 0.75, 1];

function setVolume(volume) {
  localStorage.setItem('volume', volume);
}

function getVolume() {
  return localStorage.getItem('volume') || '1';
}

window.addEventListener('load', function() {
  const savedVolume = getVolume();
  video.volume = savedVolume;
  fullScreenBtn.style.opacity = 0;
  //innerProgress.style.width = '0%';


  for (let i = 0; i < volumeLevels.length; i++) {
    if (volumeLevels[i] <= parseFloat(savedVolume)) {
      subSounds[i].style.background = 'white';
    } else {
      subSounds[i].style.background = '#21303c';
    }
  }
//console.log(video.volume);
});

for (let i = 0; i < subSounds.length; i++) {
  subSounds[i].addEventListener('click', function() {
    video.volume = volumeLevels[i];
    setVolume(video.volume);

    // Update the background colors of sub-sound elements
    for (let j = 0; j < subSounds.length; j++) {
      if (j <= i) {
        subSounds[j].style.background = 'white';
      } else {
        subSounds[j].style.background = '#21303c';
      }
    }
  });
}



var isVolumeLogged = false;

video.addEventListener('canplay', function() {
  if (!isVolumeLogged) {
    function updateVolume() {
     // video.volume = 1; // Set volume to maximum (1.0) if needed
      var vol = video.volume;
      console.log('vid vol ' + vol);
    }

    setTimeout(function() {
      video.muted = false; // Unmute the video after a short delay
      updateVolume();
    }, 500); // Adjust the delay as needed

    isVolumeLogged = true;
  }
});









// progressbar

const innerProgress = document.querySelector('.inner-progress');
const progressBar = document.querySelector('.progress-bar-div');

video.addEventListener('loadedmetadata', function() {
  const duration = video.duration;
  innerProgress.style.width = '0%';

  progressBar.addEventListener('click', function(event) {
    const progressBarRect = progressBar.getBoundingClientRect();
    const clickPositionX = event.clientX - progressBarRect.left;
    const progressBarWidth = progressBarRect.width;
    const clickedPercentage = (clickPositionX / progressBarWidth) * 100;

    if (clickedPercentage >= 0 && clickedPercentage <= 100) {
      const currentTime = (clickedPercentage / 100) * duration;
      video.currentTime = currentTime;
    }
  });
});

video.addEventListener('timeupdate', function() {
  const currentTime = video.currentTime;
  const duration = video.duration;
  const progressPercentage = (currentTime / duration) * 100;
  innerProgress.style.width = `${progressPercentage}%`;
});

progressBar.addEventListener('click', function(event) {
  const progressBarRect = progressBar.getBoundingClientRect();
  const clickPositionX = event.clientX - progressBarRect.left;
  const progressBarWidth = progressBarRect.width;
  const clickedPercentage = (clickPositionX / progressBarWidth) * 100;

  if (clickedPercentage >= 0 && clickedPercentage <= 100) {
    const currentTime = (clickedPercentage / 100) * video.duration;
    video.currentTime = currentTime;
  }
});







// Fullscreen

let scrollPosition = 0;

fullScreenBtn.addEventListener('click', function() {
  if (container.requestFullscreen) {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      toggleFullscreenClasses(false);
    } else {
      scrollPosition = window.pageYOffset;
      container.requestFullscreen();
      toggleFullscreenClasses(true);
    }
  }
});

document.addEventListener('fullscreenchange', function() {
  if (!document.fullscreenElement) {
    restoreScrollPosition();
    toggleFullscreenClasses(false);
  }
});

function toggleFullscreenClasses(isFullscreen) {
  container.classList.toggle('fullscreen', isFullscreen);
  videoController.classList.toggle('fullscreen-controller', isFullscreen);
  soundBig.classList.toggle('sound-big-position', isFullscreen);
  innerSoundBig.classList.toggle('inner-sound-big', isFullscreen);
  for (let i = 0; i < subSoundsBig.length; i++) {
    subSoundsBig[i].classList.toggle('sub-sound-big', isFullscreen);
  }
  timeRemainingBig.classList.toggle('time-remaining-big-div', isFullscreen);
  mainProgressbarBig.classList.toggle('big-progress-bar-div', isFullscreen);
  playStopBigDiv.classList.toggle('play-stop-big-div', isFullscreen);
  playDivBig.classList.toggle('play-and-stop-big-div', isFullscreen);
  stopDivBig.classList.toggle('play-and-stop-big-div', isFullscreen);
  theBigVideo.classList.toggle('the-big-video', isFullscreen);
  mainBigPlayPauseImg.classList.toggle('big-main-play-pause', isFullscreen);
  fullScreenBtn.classList.toggle('big-full-screen', isFullscreen);

}

function restoreScrollPosition() {
  window.scrollTo(0, scrollPosition);
}

setInterval(isFullScreen, 10);

function isFullScreen() {
  if (document.fullscreenElement) {
    fullScreenBtn.src = "images/exit-full-screen.png";
  } else {
    fullScreenBtn.src = "images/full-screen.png";
    videoController.style.opacity = 1;
  }
}

// Mouse not move to hide the controller 

let isFullscreen = false;
let isMouseMoving = false;
let timeoutId = null;

fullScreenBtn.addEventListener('click', function() {
  if (isFullscreen) {
    document.exitFullscreen();
    fullScreenBtn.src = "images/full-screen.png";
    isFullscreen = false;
    showVideoController();
  } else {
    container.requestFullscreen();
    fullScreenBtn.src = "images/exit-full-screen.png";
    isFullscreen = true;
    hideVideoController();
  }
});

document.addEventListener('fullscreenchange', function() {
  isFullscreen = !!document.fullscreenElement;
});

video.addEventListener('mousemove', function() {
  isMouseMoving = true;
  resetTimer();
});

videoController.addEventListener('mousemove', function() {
  isMouseMoving = true;
  resetTimer();
});

function resetTimer() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(function() {
    if (isFullscreen && !isMouseMoving) {
      hideVideoController();
      hideMainBigPlayPauseImg();
      hideFullScreenBtn();
      hideMousePointer();
    }
  }, 3000);
  showVideoController();
  showMainBigPlayPauseImg();
  showFullScreenBtn();
  showMousePointer();
  isMouseMoving = false;
}


setInterval(function(){
if(!isFullscreen){
  showVideoController();
  showMousePointer();
  isMouseMoving = false;
}
},1);


function hideVideoController() {
  if (isFullscreen) {
    videoController.style.transform = 'translateY(100px)';
    videoController.style.transition = 'transform .4s ease-in';
  }
}

function showVideoController() {
  videoController.style.transform = 'translateY(0)';
  videoController.style.transition = 'transform .4s ease-in';
}

function hideMainBigPlayPauseImg() {
  mainBigPlayPauseImg.style.opacity = 0;
  mainBigPlayPauseImg.style.transition = '.4s ease-in';
}

function showMainBigPlayPauseImg() {
  mainBigPlayPauseImg.style.opacity = .5;
  mainBigPlayPauseImg.style.transition = '.4s ease-in';
}

function hideFullScreenBtn() {
  fullScreenBtn.style.transform = 'translateY(100px)';
  fullScreenBtn.style.transition = '.4s ease-in';
}

function showFullScreenBtn() {
  fullScreenBtn.style.transform = 'translateY(0)';
  fullScreenBtn.style.transition = '.4s ease-in';
  
}

function hideMousePointer() {
container.style.cursor = 'none';
video.style.cursor = 'none';
videoController.style.cursor = 'none';
mainProgressbarBig.style.cursor = 'none';
innerProgress.style.cursor = 'none';
}

function showMousePointer() {
container.style.cursor = 'default';
video.style.cursor = 'pointer';
videoController.style.cursor = 'default';
mainProgressbarBig.style.cursor = 'pointer';
innerProgress.style.cursor = 'pointer';
}

resetTimer();



new YouTubeToHtml5({
  formats: [ '1080p', '720p', '480p', '360p' ],
});

//console.log(videoid);
video.setAttribute("poster", "images/thumb.jpg");




