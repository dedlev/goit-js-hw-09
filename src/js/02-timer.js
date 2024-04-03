import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'c';

const refs = {
    inputEl: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
}

refs.startBtn.setAttribute('disabled', ''); 

const options = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        console.log(selectedDates[0])
        const deltaTime = selectedDates[0] - options.defaultDate;
        
        if (deltaTime < 0) {
            // window.alert("Please choose a date in the future");
            Notiflix.Notify.warning("Please choose a date in the future");
            return;
        }
        refs.startBtn.removeAttribute('disabled');

        const convertDeltaTime = convertMs(deltaTime);

        addLeadingZero(convertDeltaTime);            

        refs.startBtn.addEventListener('click', () => {
            timerId = setInterval(() => {
                const defaultDate = new Date();
                const deltaTime = selectedDates[0] - defaultDate;
                const convertDeltaTime = convertMs(deltaTime);
                addLeadingZero(convertDeltaTime);

                if (deltaTime < 1000) {
                    clearInterval(timerId)
                }
               
            }, 1000);
        });
    },
                    
};    

flatpickr(refs.inputEl, options);

function addLeadingZero(value) {
    refs.dataDays.textContent = value.days.toString().padStart(2, 0);
    refs.dataHours.textContent = value.hours.toString().padStart(2, 0);
    refs.dataMinutes.textContent = value.minutes.toString().padStart(2, 0);
    refs.dataSeconds.textContent = value.seconds.toString().padStart(2, 0);
}
   
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
