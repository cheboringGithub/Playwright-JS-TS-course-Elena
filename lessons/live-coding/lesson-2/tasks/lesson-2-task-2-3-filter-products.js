// Напишите функцию getAvailableProducts(products), которая принимает массив товаров
// и возвращает новый массив только с доступными товарами (isAvailable: true),
// где каждый товар содержит только поля name, price и копирует остальные свойства через spread.
// 
// Пример:
// getAvailableProducts([
//   {name: "Phone", price: 500, isAvailable: true, color: "black"},
//   {name: "Tablet", price: 800, isAvailable: false, color: "white"}
// ])
// 
// Результат:
// [
//   {name: "Phone", price: 500, color: "black"}
// ] 