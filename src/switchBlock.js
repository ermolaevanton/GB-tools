import { timerBlock, dateCalcForm } from "./constantsDOM.js";

export const switchBlock = (e) => {
    e.addEventListener('click', () => {
        if (timerBlock.className === 'hide') {
            timerBlock.classList.toggle('hide');
            dateCalcForm.classList.toggle('hide');
            e.innerText = 'Показать калькулятор дат';
        } else {
            timerBlock.classList.toggle('hide');
            dateCalcForm.classList.toggle('hide');
            e.innerText = 'Показать таймер';
        }
    });
}
