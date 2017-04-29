// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const webcamjs = require('webcamjs');

webcamjs.set({width: 320, height: 240});
webcamjs.attach('#my_camera');
const cameraEl = document.getElementById('my_camera');
const videoEl = document.querySelector('#my_camera video');
let isFrozen = false;
cameraEl.addEventListener('click', function(event) {
  if (isFrozen) {
    webcamjs.unfreeze();
    videoEl.style.display = 'block';
    isFrozen = false;
  }  else {
    webcamjs.freeze();
    videoEl.style.display = 'none';
    isFrozen = true;
  }
});
