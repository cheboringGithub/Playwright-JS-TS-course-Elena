// Что выведет код? Объясните работу async функций
async function getData() {
  return 'Данные получены';
}

async function getDataWithDelay() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return 'Данные с задержкой';
}

function regularFunction() {
  return 'Обычная функция';
}

console.log('getData() результат:', getData());
console.log('getDataWithDelay() результат:', getDataWithDelay());
console.log('regularFunction() результат:', regularFunction());

// Что произойдет, если вызвать эти функции с await?
