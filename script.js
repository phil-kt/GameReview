var path = document.querySelector('#logo');
var length = path.getTotalLength();

path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;

// frame based animation
Metronome({
  type: 'frame',
  frames: 120,
  easing: 'easeInOutQuad',
  draw: function(handle, progress) {
    path.style.strokeDashoffset = Math.floor(length * (1 - progress));
  },
  complete: function() {
    alert('Jerbs done');
  }
});
