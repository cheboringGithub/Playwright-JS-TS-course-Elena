---
layout: default
title: Ответ к задаче 2.1
---
# Ответ к задаче 2.1: Promise состояния

**Ожидаемый вывод:**

```
Promise 1: Успех!
Promise 2: Ошибка!
Promise 1 состояние: Promise {<fulfilled>: "Успех!"}
Promise 2 состояние: Promise {<rejected>: "Ошибка!"}
Promise 3 состояние: Promise {<pending>}
```

**Объяснение состояний Promise:**

[**Promise**]({{ site.baseurl }}/glossary/lesson-5-glossary#promise){:data-glossary-term="Promise" data-glossary-definition="Объект, представляющий результат асинхронной операции"} имеет три состояния:

### 1. **Promise 1 - Fulfilled (выполнен)**
```javascript
const promise1 = new Promise((resolve, reject) => {
  resolve('Успех!'); // Явно вызываем resolve
});
```
- Состояние: `<fulfilled>`
- Результат: `"Успех!"`
- `.then()` выполнится с результатом

### 2. **Promise 2 - Rejected (отклонен)**
```javascript
const promise2 = new Promise((resolve, reject) => {
  reject('Ошибка!'); // Явно вызываем reject
});
```
- Состояние: `<rejected>`
- Результат: `"Ошибка!"`
- `.catch()` выполнится с ошибкой

### 3. **Promise 3 - Pending (ожидает)**
```javascript
const promise3 = new Promise((resolve, reject) => {
  // Ничего не вызываем - Promise остается в состоянии pending
});
```
- Состояние: `<pending>`
- Результат: `undefined`
- `.then()` **НЕ выполнится**, так как Promise не завершен

**Важно понимать:**
- Promise может быть только в одном состоянии одновременно
- Переход из `pending` в `fulfilled` или `rejected` происходит **один раз**
- После изменения состояния Promise становится **неизменяемым**

📖 **[Подробнее о Promise]({{ site.baseurl }}/glossary/lesson-5-glossary#promise)**
