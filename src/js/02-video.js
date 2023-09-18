import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTimeupdate = localStorage.getItem('videoplayer-current-time');
const parsedTimeupdate = JSON.parse(savedTimeupdate);
if (parsedTimeupdate) {
  player.setCurrentTime(parsedTimeupdate);
}

const updateTime = throttle(function (currentTime) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}, 1000);

player.on('timeupdate', function (elem) {
  const currentTime = elem.seconds;
  updateTime(currentTime);
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
