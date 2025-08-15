// Что выведет код? Объясните работу методов Promise
const fastPromise = new Promise(resolve => setTimeout(() => resolve('Быстрый'), 100));
const slowPromise = new Promise(resolve => setTimeout(() => resolve('Медленный'), 500));
const errorPromise = new Promise((resolve, reject) => setTimeout(() => reject('Ошибка'), 200));

// Promise.race - кто первый?
Promise.race([fastPromise, slowPromise, errorPromise])
  .then(result => console.log('Race результат:', result))
  .catch(error => console.log('Race ошибка:', error));

// Promise.all - все или ничего
Promise.all([fastPromise, slowPromise])
  .then(results => console.log('All результаты:', results))
  .catch(error => console.log('All ошибка:', error));

// Promise.allSettled - все с результатами
Promise.allSettled([fastPromise, slowPromise, errorPromise])
  .then(results => console.log('AllSettled результаты:', results));
