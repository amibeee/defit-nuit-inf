// List of video sources
const videoSources = [
  "9alb.mp4",
  "ocean.mp4"
];

// Get the video elements
const videoPlayer = document.getElementById("video-player");
const videoPlayerd = document.getElementById("video-playerd");
const videoT = document.getElementById("video-t"); // Correct ID
const videoK = document.getElementById("video-k"); // Correct ID

// Track the current video index for each player
let currentIndexPlayer1 = 0;
let currentIndexPlayer2 = 0;
let currentIndexT = 0;
let currentIndexK = 0;

// Function to change the video for the first player
function changeVideo() {
  currentIndexPlayer1 = (currentIndexPlayer1 + 1) % videoSources.length;
  videoPlayer.src = videoSources[currentIndexPlayer1];
  videoPlayer.play();
}

// Function to change the video for the second player
function changeVideod() {
  currentIndexPlayer2 = (currentIndexPlayer2 + 1) % videoSources.length;
  videoPlayerd.src = videoSources[currentIndexPlayer2];
  videoPlayerd.play();
}

// Function to change the video for the third player (t)
function changeVideoT() {
  currentIndexT = (currentIndexT + 1) % videoSources.length;
  videoT.src = videoSources[currentIndexT];
  videoT.play();
}

// Function to change the video for the fourth player (k)
function changeVideoK() {
  currentIndexK = (currentIndexK + 1) % videoSources.length;
  videoK.src = videoSources[currentIndexK];
  videoK.play();
}

// Add event listeners for each video player
videoPlayer.addEventListener("click", changeVideo);
videoPlayerd.addEventListener("click", changeVideod);
videoT.addEventListener("click", changeVideoT);
videoK.addEventListener("click", changeVideoK);
