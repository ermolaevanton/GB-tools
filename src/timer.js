import { inputTimer, pause, resultTimer } from "./constantsDOM.js";
import { formatError } from "./utils.js";
// import { Howl } from "howler";
// const { Howl } = require('howler');


let runTimer;
let i;

// const sound = new Howl({
//     src: ['../sound/bum.mp3']
// });

export const timerFn = () => {
    let isPaused = false;
    i = parseInt(inputTimer.value);
    inputTimer.value = '';
    if (!Number.isInteger(i)) {
        resultTimer.innerHTML = formatError(
            'Введите целое положительное число!'
        );
    } else {
        pause.addEventListener('click', () => {
            isPaused = !isPaused
            if (isPaused) {
                pause.innerText = 'Продолжить';

            } else {
                pause.innerText = 'Пауза';
            }
        });
        runTimer = setInterval(() => {
            if (!isPaused) {
                if (i < 0) {
                    // sound.play();
                    clearInterval(runTimer);
                } else {
                    resultTimer.innerText = `Осталось ${i}`;
                }
                i--;
            }
        }, 1000)
    }

}

export const resetTimer = () => {
    clearInterval(runTimer);
    resultTimer.innerText = '';
}