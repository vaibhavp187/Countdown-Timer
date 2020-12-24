const daysEl = document.getElementById("day");
const hrsEl = document.getElementById("hr");
const minsEl = document.getElementById("min");
const secsEl = document.getElementById("sec");
const newYears = "1 Jan 2021";

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    let tsec = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(tsec / 3600 / 24);
    const hours = Math.floor(tsec / 3600) % 24;
    const minutes = Math.floor(tsec / 60) % 60;
    const seconds = Math.floor(tsec) % 60;

    daysEl.innerHTML = formatTime(days);
    hrsEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    if(time < 10) {
        return `0${time}`;
    }

    else{
       return time;
    }
}

countDown();

setInterval(countDown, 1000);