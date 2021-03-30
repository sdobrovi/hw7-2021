var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
// document.getElementsByClassName("video").controls = true;

// 	document.getElementsByClassName('video').play();
// }
video = document.getElementById('player1');
var volume = document.getElementById('slider');
var defaultspeed = 1
var setVolume = function(){
	video.volume = this.value / 100;
}
document.getElementById('pause').onclick = function(){
	video.pause();
}
document.getElementById('play').onclick = function(){
	video.play();
}
document.getElementById('slower').onclick = function(){
	video.playbackRate *= .95;
	console.log("The new time is " + video.playbackRate);
}
document.getElementById('faster').onclick = function(){
	video.playbackRate /= .95;
	console.log("The new time is " + video.playbackRate);
}

document.getElementById('skip').onclick = function(){
	if (video.currentTime < video.duration - 15) {
		video.currentTime += 15;
		// video.play();
		console.log(video.currentTime)
	} else {
		video.currentTime = 0;
		console.log("Video has restarted")
	}
}
// video.addEventListener('ended', function(){
// 	video.currentTime = 0;
// 	video.play();
// 	console.log(video.currentTime)
// })
document.getElementById('mute').onclick = function(){
	if (video.muted == true) {
		video.muted = false
		document.getElementById('mute').innerHTML = "Mute"
	} else {
		video.muted = true
		document.getElementById('mute').innerHTML = "Unmute"
	}
}


var volumeControl = document.getElementById('slider');

volumeControl.addEventListener('change',function(){
  video.volume = this.value / 100;
	console.log(video.volume)
	document.getElementById('volume').innerHTML = this.value + "%"
});



document.getElementById('vintage').onclick = function(){
	video.classList.add("oldSchool");
}
document.getElementById('orig').onclick = function(){
	video.classList.remove("oldSchool");
}
// var playButton = document.getElementById("play");
// playButton.addEventListener("click", function() {
// 	video.play();
// })
// var playButton = document.getElementById("play");
// playButton.addEventListener("click", function() {
// 	video.play();
// })
// document.getElementById('#pause').onclick = function() {pauseVid()};
document.querySelector('#play').addEventListener("click", function() {
	console.log("Play Video");
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
});
