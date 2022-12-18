import Player from '@vimeo/player';
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LocalCurrentTimeKey = 'videoplayer-current-time';

player
    .setCurrentTime(localStorage.getItem(LocalCurrentTimeKey))
    .catch (function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay({ seconds }) {
  localStorage.setItem(LocalCurrentTimeKey, seconds);
}

