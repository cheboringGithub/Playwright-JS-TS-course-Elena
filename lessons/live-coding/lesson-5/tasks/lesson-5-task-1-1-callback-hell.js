// Что выведет код? Объясните порядок выполнения
console.log('1. Начало');

setTimeout(() => {
  console.log('2. Первый setTimeout');
}, 0);

setTimeout(() => {
  console.log('3. Второй setTimeout');
}, 100);

console.log('4. Конец');

// Дополнительно: что произойдет, если изменить время первого setTimeout на 200?
