import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTimeupdate = localStorage.getItem('videoplayer-current-time');
const parsedTimeupdate = JSON.parse(savedTimeupdate);
if (parsedTimeupdate && parsedTimeupdate.seconds) {
  player.setCurrentTime(parsedTimeupdate.seconds);
}

const updateTime = throttle(function (currentTime) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify({ seconds: currentTime })
  );
}, 1000);

player.on('timeupdate', function (elem) {
  const currentTime = elem.seconds;
  updateTime(currentTime);
});

player
  .getCurrentTime()
  .then(function (seconds) {})
  .catch(function (error) {});

player
  .setCurrentTime(parsedTimeupdate.seconds)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
