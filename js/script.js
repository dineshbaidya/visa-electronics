console.log('script is running');

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

const navbar = document.getElementsByClassName('navbar-div')[0];
const navbarLi = document.getElementsByClassName('navbar-ul')[0].querySelectorAll('li');

if (navbar.scrollHeight > 35) {
  navbarLi.forEach((li) => {
    li.style.borderBottom = "1px solid #39c";
  });
} else {
  navbarLi.forEach((li) => {
    li.style.borderBottom = "0px";
  });
}

//video

var video;

function onYouTubeIframeAPIReady() {
  video = new YT.Player('player', {
    height: '1000',
    width: '1000',
    videoId: 'FT3ODSg1GFE',
    playerVars: {
      autoplay: 1,
      controls: 0
    },
    events: {
      onReady: onPlayerReady
    }
  });
}

let isLoaded = false;

function onPlayerReady(event) {
  const iframe = event.target.getIframe();
  iframe.style.height = '300px';
  iframe.style.position = 'absolute';
  iframe.style.top = '-72px';

  var isPlaying = false;
  isLoaded = true;

  if (isLoaded == true) {
    const first = document.querySelector('.ytp-watermark');
    const second = document.querySelector('.yt-uix-sessionlink');
    const third = document.querySelector('.ytp-watermark-small');
  }

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
  const theBigVideo = document.getElementsByClassName('my-video')[0];
  const mainBigPlayPauseImg = document.getElementsByClassName('main-play-img')[0];
  const duplicateDiv = document.getElementsByClassName('upper-div-for-video-control')[0];
  const totalDurationDiv = document.getElementById('total-duration');
  const currentDuration = document.getElementById('current-duration');
  const videoPlayerMainDiv = document.getElementsByClassName('video-player-main-div')[0];
  const thumb = document.getElementsByClassName('thumb')[0];

  function isDocumentFullscreen() {
    return (
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    );
  }

  playPauseDiv.addEventListener('click', startOrPause);
  centerPlayImg.addEventListener('click', startOrPauseAnother);
  duplicateDiv.addEventListener('click', startOrPauseAnother);
  thumb.addEventListener('click', startOrPauseAnother);
  
  let clicked = 1;

  function startOrPause() {
    if (isPlaying) {
      video.pauseVideo();
      isPlaying = false;
      playIcon.src = imgSrc[0];
      centerPlayImg.src = imgSrc[0];
      centerPlayImg.style.opacity = 0.5;
    } else {
      video.playVideo();
      isPlaying = true;
      playIcon.src = imgSrc[1];
      centerPlayImg.src = imgSrc[1];
      showHideTheCenterImageAccordingly();
      setTimeout(noneThumb,100);
      function noneThumb(){
      thumb.style.display = "none";
      centerPlayImg.style.opacity = 0;
      fullScreenBtn.style.opacity = 0;
      }
    }
  }

  function startOrPauseAnother() {
    if (isPlaying) {
      video.pauseVideo();
      isPlaying = false;
      playIcon.src = imgSrc[0];
      centerPlayImg.src = imgSrc[0];
      centerPlayImg.style.opacity = 0.5;
    } else {
      video.playVideo();
      isPlaying = true;
      playIcon.src = imgSrc[1];
      centerPlayImg.src = imgSrc[1];
      showHideTheCenterImageAccordingly();
      setTimeout(noneThumb,100);
      function noneThumb(){
      thumb.style.display = "none";
      }
    }
  }

// Functions for hiding Elements

function showHideTheCenterImageAccordingly(){

duplicateDiv.addEventListener('mouseover', function(){
centerPlayImg.style.opacity = '.5';
fullScreenBtn.style.opacity = 1;
});
duplicateDiv.addEventListener('mouseout', function(){
centerPlayImg.style.opacity = '0';
fullScreenBtn.style.opacity = 0;
});
centerPlayImg.addEventListener('mouseover', function(){
centerPlayImg.style.opacity = '.5';
fullScreenBtn.style.opacity = 1;
});
centerPlayImg.addEventListener('mouseout', function(){
centerPlayImg.style.opacity = '0';
fullScreenBtn.style.opacity = 0;
});
document.addEventListener('mouseover', function(){
centerPlayImg.style.opacity = '0';
});
}

// Volume System

const soundArray = ['15', '30', '45', '60', '75', '100'];
const innerSoundSystem = document.querySelectorAll('.sub-sound');
const volumeKey = 'videoVolume';

for (let i = 0; i < innerSoundSystem.length; i++) {
  innerSoundSystem[i].addEventListener('click', function() {
    const volume = parseInt(soundArray[i]);
    video.setVolume(volume);
    localStorage.setItem(volumeKey, volume);
    //console.log('Sound level:', volume);
  });
}

function getSavedVolume() {
  const savedVolume = localStorage.getItem(volumeKey);
  return savedVolume ? parseInt(savedVolume) : null;
}

function restoreVolume() {
  const savedVolume = getSavedVolume();
  const defaultVolume = 100;

  if (savedVolume !== null) {
    video.setVolume(savedVolume);
    //console.log('Restored volume:', savedVolume);
    if(savedVolume>10 && savedVolume<20){
    //console.log(15);
    innerSoundSystem[0].style.background = 'white';
    innerSoundSystem[1].style.background = '#21303c';
    innerSoundSystem[2].style.background = '#21303c';
    innerSoundSystem[3].style.background = '#21303c';
    innerSoundSystem[4].style.background = '#21303c';
    innerSoundSystem[5].style.background = '#21303c';

    }else if(savedVolume>20 && savedVolume<40){
    //console.log(30); 
    innerSoundSystem[0].style.background = 'white';
    innerSoundSystem[1].style.background = 'white';
    innerSoundSystem[2].style.background = '#21303c';
    innerSoundSystem[3].style.background = '#21303c';
    innerSoundSystem[4].style.background = '#21303c';
    innerSoundSystem[5].style.background = '#21303c';
   
    }else if(savedVolume>40 && savedVolume<55){
    //console.log(45); 
    innerSoundSystem[0].style.background = 'white';
    innerSoundSystem[1].style.background = 'white';
    innerSoundSystem[2].style.background = 'white';
    innerSoundSystem[3].style.background = '#21303c';
    innerSoundSystem[4].style.background = '#21303c';
    innerSoundSystem[5].style.background = '#21303c';
      
    }else if(savedVolume>55 && savedVolume<65){
    //console.log(60);  
    innerSoundSystem[0].style.background = 'white';
    innerSoundSystem[1].style.background = 'white';
    innerSoundSystem[2].style.background = 'white';
    innerSoundSystem[3].style.background = 'white';
    innerSoundSystem[4].style.background = '#21303c';
    innerSoundSystem[5].style.background = '#21303c';
        
    }else if(savedVolume>65 && savedVolume<80){
    //console.log(75);
    innerSoundSystem[0].style.background = 'white';
    innerSoundSystem[1].style.background = 'white';
    innerSoundSystem[2].style.background = 'white';
    innerSoundSystem[3].style.background = 'white';
    innerSoundSystem[4].style.background = 'white';
    innerSoundSystem[5].style.background = '#21303c';
            
    }else{
    //console.log(100);
    innerSoundSystem[0].style.background = 'white';
    innerSoundSystem[1].style.background = 'white';
    innerSoundSystem[2].style.background = 'white';
    innerSoundSystem[3].style.background = 'white';
    innerSoundSystem[4].style.background = 'white';
    innerSoundSystem[5].style.background = 'white';
        
    }



  } else {
    video.setVolume(defaultVolume);
    //console.log('Default volume set:', defaultVolume);
    for(let i=0; i<innerSoundSystem.length; i++){
    innerSoundSystem[i].style.background = 'grey';
    }
  }

}

window.addEventListener('load', restoreVolume);
setInterval(restoreVolume, 100); 

// Stop The Video

stopDiv.addEventListener('click', stopTheVideo);

function stopTheVideo(){
  video.pauseVideo();
  video.seekTo(0);
  centerPlayImg.style.opacity = .5;
  playIcon.src = imgSrc[0];
  centerPlayImg.src = imgSrc[0];
  isPlaying = false;
  fullScreenBtn.style.opacity = 0;
}

//Fullscreen 

let theScreenFull = true;

let scrollPosition = 0;

fullScreenBtn.addEventListener('click', function() {
  if (container.requestFullscreen) {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      toggleFullscreenClasses(false);
    } else {
      scrollPosition = window.pageYOffset;
      //container.requestFullscreen();
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
  mainBigPlayPauseImg.classList.toggle('big-main-play-pause', isFullscreen);
  fullScreenBtn.classList.toggle('big-full-screen', isFullscreen);
  duplicateDiv.classList.toggle('upper-div-for-video-control-big', isFullscreen);
  videoPlayerMainDiv.classList.toggle('bigger-video-player-main-div', isFullscreen);
  thumb.classList.toggle('bigger-video-player-main-div', isFullscreen);
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

setInterval(nowFullScreen, 10);

function nowFullScreen(){
if(isFullscreen){
iframe.style.height = '120vh';
iframe.style.width = '100vw';
iframe.style.position = 'absolute';
iframe.style.top = '-120px';
}else{
iframe.style.height = '300px';
iframe.style.width = '';
iframe.style.position = 'absolute';
iframe.style.top = '-72px';
}
}

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

duplicateDiv.addEventListener('mousemove', function() {
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
      hideMousePointer();
      hidefullScreen();
    }
  }, 3000);
  showVideoController();
  showMainBigPlayPauseImg();
  showMousePointer();
  showfullScreen();
  isMouseMoving = false;
}

function hideVideoController() {
  if (isFullscreen) {
    videoController.style.opacity = 0;
  }
}

function showVideoController() {
  videoController.style.opacity = 1;
}

function hideMainBigPlayPauseImg() {
  mainBigPlayPauseImg.style.opacity = 0;
}

function showMainBigPlayPauseImg() {
  mainBigPlayPauseImg.style.opacity = .5;
}

function hidefullScreen() {
  fullScreenBtn.style.opacity = 0;
}

function showfullScreen() {
  fullScreenBtn.style.opacity = 1;
}


function hideMousePointer() {
duplicateDiv.style.cursor = 'none';
}

function showMousePointer() {
duplicateDiv.style.cursor = 'pointer';
}

resetTimer();

setInterval(hoverShowHide,10);

function hoverShowHide(){
if(isPlaying){

duplicateDiv.addEventListener('mouseover', function(){
centerPlayImg.style.opacity = '.5';
fullScreenBtn.style.opacity = 1;
});
duplicateDiv.addEventListener('mouseout', function(){
centerPlayImg.style.opacity = '0';
fullScreenBtn.style.opacity = 0;
});
centerPlayImg.addEventListener('mouseover', function(){
centerPlayImg.style.opacity = '.5';
fullScreenBtn.style.opacity = 1;
});
centerPlayImg.addEventListener('mouseout', function(){
centerPlayImg.style.opacity = '0';
fullScreenBtn.style.opacity = 0;
});
document.addEventListener('mouseover', function(){
centerPlayImg.style.opacity = '0';
});
fullScreenBtn.addEventListener('mouseover', function(){
fullScreenBtn.style.opacity = 1;
});
fullScreenBtn.addEventListener('mouseout', function(){
fullScreenBtn.style.opacity = 0;
});

}else{

duplicateDiv.addEventListener('mouseover', function(){
centerPlayImg.style.opacity = '.5';
fullScreenBtn.style.opacity = 1;
});
duplicateDiv.addEventListener('mouseout', function(){
centerPlayImg.style.opacity = '.5';
fullScreenBtn.style.opacity = 0;
});
centerPlayImg.addEventListener('mouseover', function(){
centerPlayImg.style.opacity = '.5';
fullScreenBtn.style.opacity = 1;
});
centerPlayImg.addEventListener('mouseout', function(){
centerPlayImg.style.opacity = '.5';
fullScreenBtn.style.opacity = 0;
});
document.addEventListener('mouseover', function(){
centerPlayImg.style.opacity = '.5';
});
fullScreenBtn.addEventListener('mouseover', function(){
fullScreenBtn.style.opacity = 1;
});
fullScreenBtn.addEventListener('mouseout', function(){
fullScreenBtn.style.opacity = 0;
});
videoController.addEventListener('mouseover', function() {
fullScreenBtn.style.opacity = 0;
});
videoController.addEventListener('mouseout', function() {
fullScreenBtn.style.opacity = 0;
});

}
}

// Video Duration

const innerProgress = document.getElementsByClassName('inner-progress')[0];
const progressBar = document.getElementsByClassName('progress-bar-div')[0];
const currentTimeElement = document.getElementById('current-duration');

const durationInSecondsOfYt = video.getDuration();

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}

const durationInSeconds = durationInSecondsOfYt - 2;
const formattedDuration = formatTime(durationInSeconds);
totalDurationDiv.innerHTML = formattedDuration;

progressBar.addEventListener('click', function(event) {
  const progressBarRect = progressBar.getBoundingClientRect();
  const clickPositionX = event.clientX - progressBarRect.left;
  const progressBarWidth = progressBarRect.width;
  const clickedPercentage = (clickPositionX / progressBarWidth) * 100;
  const newTime = (clickedPercentage / 100) * durationInSecondsOfYt;

  video.seekTo(newTime, true);
});

// Progress Bar

function updateProgress(currentTime, duration) {
  const percentage = (currentTime / duration) * 100;
  innerProgress.style.width = percentage + '%';
}

setInterval(function() {
  const currentTimeInSeconds = video.getCurrentTime();
  updateProgress(currentTimeInSeconds, durationInSecondsOfYt);

  const formattedTime = formatTime(currentTimeInSeconds);
  currentTimeElement.textContent = formattedTime;

  if (currentTimeInSeconds >= durationInSecondsOfYt - 2) {
    stopDiv.click();
  }
}, 1000);
}