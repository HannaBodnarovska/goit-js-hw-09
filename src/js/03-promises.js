form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstDelay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  Notiflix.Loading.pulse('Generating promises...');

  const promises = [];
  for (let i = 1; i <= amount; i++) {
    const delay = firstDelay + (i - 1) * step;
    promises.push(createPromise(i, delay));
  }

  Promise.all(promises.map(promise => promise.catch(e => e)))
    .then(results => {
      Notiflix.Loading.remove();
      results.forEach(({ position, delay }) => {
        setTimeout(() => {
          if (position === 1) {
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          } else {
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { position: 'topRight' });
          }
        }, delay);
      });
    })
    .catch(results => {
      Notiflix.Loading.remove();
      results.forEach(({ position, delay }) => {
        setTimeout(() => {
          if (position === 1) {
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          } else {
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { position: 'topRight' });
          }
        }, delay);
      });
    });
});