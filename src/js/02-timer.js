import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const datePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector('[data-start]');

const timerElements = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]')
};

let intervalId;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerDisplay(timeObj) {
  timerElements.days.textContent = addLeadingZero(timeObj.days);
  timerElements.hours.textContent = addLeadingZero(timeObj.hours);
  timerElements.minutes.textContent = addLeadingZero(timeObj.minutes);
  timerElements.seconds.textContent = addLeadingZero(timeObj.seconds);
}

function startTimer(endDate) {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const timeDiff = endDate - currentTime;

    if (timeDiff <= 0) {
      clearInterval(intervalId);
      updateTimerDisplay(convertMs(0));
      startButton.disabled = false;
      Notiflix.Notify.success('Time is up!');
      return;
    }

    const timeObj = convertMs(timeDiff);
    updateTimerDisplay(timeObj);
  }, 1000);

  startButton.disabled = true;
}

startButton.addEventListener('click', () => {
  const selectedDate = new Date(datePicker.value);
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    startTimer(selectedDate);
  }
});

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      datePicker.value = '';
      startButton.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startButton.disabled = false;
    }
  }
});
