// Что выведет код? Объясните проблему callback hell
console.log('Начало');

setTimeout(() => {
  console.log('Первый шаг');
  
  setTimeout(() => {
    console.log('Второй шаг');
    
    setTimeout(() => {
      console.log('Третий шаг');
      
      setTimeout(() => {
        console.log('Четвертый шаг');
        console.log('Готово!');
      }, 100);
      
    }, 100);
    
  }, 100);
  
}, 100);

console.log('Конец');

// Как можно решить проблему callback hell?
// Какие альтернативы существуют?
