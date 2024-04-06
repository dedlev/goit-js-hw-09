import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  let delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);
 
  for (let i = 1; i <= amount; i += 1)  {
    createPromise(i, delay)
    delay += step;
  }
  
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}


