const btnTask3 = document.querySelector('.btn-3');
btnTask3.addEventListener('click', promiseHandler3);

function promiseHandler3() {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const makeTransaction = transaction => {
    return new Promise((resolve, reject) => {
      const delay = randomIntegerFromInterval(200, 500);

      setTimeout(() => {
        const canProcess = Math.random() > 0.3;

        if (canProcess) {
          const obj = { id: transaction.id, time: delay };

          resolve(obj);
        } else {
          reject(transaction.id);
        }
      }, delay);
    });
  };

  const logSuccess = ({ id, time }) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
  };

  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };

  /*
   * Работает так
   */
  // makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
  // makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
  // makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
  // makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
  /*
   * Должно работать так
   */
  makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

  makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

  makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

  makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
}