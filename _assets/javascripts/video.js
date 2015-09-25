var video1 = document.getElementById('js-splash-video');


$(document).ready(function init() {
  video1.addEventListener('timeupdate', checkTime ,false);
  $('#js-splash-video').maximage('maxcover');
  $('#js-splash-image-fb').maximage('maxcover');
  $('#js-splash-image-fb')
    .removeClass('splash__image-fb--not-ready')
    .addClass('splash__image-fb--ready');
});


function checkTime() {
  if(this.currentTime >= 7.2) {
    this.pause();
    video1.removeEventListener('timeupdate', checkTime, false)
  }
}
