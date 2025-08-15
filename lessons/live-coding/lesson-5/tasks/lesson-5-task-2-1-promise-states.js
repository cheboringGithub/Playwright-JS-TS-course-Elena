// Что выведет код? Объясните состояния Promise
const promise1 = new Promise((resolve, reject) => {
  resolve('Успех!');
});

const promise2 = new Promise((resolve, reject) => {
  reject('Ошибка!');
});

const promise3 = new Promise((resolve, reject) => {
  // Ничего не вызываем
});

promise1.then(result => console.log('Promise 1:', result));
promise2.catch(error => console.log('Promise 2:', error));
promise3.then(result => console.log('Promise 3:', result));

console.log('Promise 1 состояние:', promise1);
console.log('Promise 2 состояние:', promise2);
console.log('Promise 3 состояние:', promise3);
