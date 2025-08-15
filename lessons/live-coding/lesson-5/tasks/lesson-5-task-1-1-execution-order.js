// Что выведет код? Объясните Event Loop и порядок выполнения
console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

Promise.resolve().then(() => {
  console.log('C');
});

console.log('D');

// Объясните:
// 1. Почему setTimeout(0) не выполняется сразу?
// 2. Разницу между setTimeout и Promise в Event Loop
// 3. Порядок выполнения микрозадач и макрозадач
