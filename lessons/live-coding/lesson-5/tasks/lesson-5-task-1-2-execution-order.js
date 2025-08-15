// Что выведет код? Объясните почему такой порядок
console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

Promise.resolve().then(() => {
  console.log('C');
});

console.log('D');

// Объясните разницу между setTimeout и Promise в Event Loop
