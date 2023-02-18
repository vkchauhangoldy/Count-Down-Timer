var interval;

function countTimer() {
    let  timerInput = Math.floor(document.getElementById('timer-input').value);
    let timer = document.getElementById('timer')

    if (interval) {
        clearInterval(interval);
    }

    if (isNaN(timerInput)) {
        timerInput = 0;
    }

    interval = setInterval(function () {
        timer.innerHTML = "Time Remains: " + timerInput;
        timerInput--;

        if (timerInput < 0) {
            clearInterval(interval);
            timer.innerHTML = 'Time Ended 0';
        }
    }, 1000);
}
