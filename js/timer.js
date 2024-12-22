'use strict';

const goal = new Date(2023, 3, 9);

function countdown(due) {
    const now = new Date();
    const rest = due.getTime() - now.getTime();
    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);
    const count = [days, hours, min, sec];

    return count;
}

function recalc() {
    const counter = countdown(goal);
    document.getElementById('day').textContent = counter[0];
    document.getElementById('hour').textContent = counter[1];
    document.getElementById('min').textContent = counter[2];
    document.getElementById('sec').textContent = counter[3];
    refresh();
}
function refresh() {
    setTimeout(recalc, 1000);
}
