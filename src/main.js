import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { switchBlock } from "./switchBlock.js";
import { timerFn, resetTimer } from "./timer.js";
import { dateCalcForm, dateCalcResult, start, reset } from "./constantsDOM.js";


dateCalcForm.addEventListener("submit", handleCalcDates);

switchBlock(document.querySelector('.btn-switch'));


function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError(
        "Для расчета промежутка необходимо заполнить оба поля"
    );
}

start.addEventListener('click', timerFn);
reset.addEventListener('click', resetTimer);







