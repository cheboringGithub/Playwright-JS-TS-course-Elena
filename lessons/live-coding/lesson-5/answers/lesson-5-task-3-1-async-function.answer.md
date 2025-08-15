---
layout: default
title: Ответ к задаче 3.1
---
# Ответ к задаче 3.1: Async функция

**Ожидаемый вывод:**

```
getData() результат: Promise {<fulfilled>: "Данные получены"}
getDataWithDelay() результат: Promise {<pending>}
regularFunction() результат: "Обычная функция"
```

**Объяснение работы async функций:**

### 1. **Async функция всегда возвращает Promise**
```javascript
async function getData() {
  return 'Данные получены';
}
```
- Ключевое слово `async` автоматически **оборачивает** возвращаемое значение в Promise
- `return 'Данные получены'` превращается в `Promise.resolve('Данные получены')`
- **Результат:** `Promise {<fulfilled>: "Данные получены"}`

### 2. **Async функция с await**
```javascript
async function getDataWithDelay() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return 'Данные с задержкой';
}
```
- `await` приостанавливает выполнение функции до завершения Promise
- Функция **не завершена** на момент вывода в консоль
- **Результат:** `Promise {<pending>}` (Promise еще выполняется)

### 3. **Обычная функция**
```javascript
function regularFunction() {
  return 'Обычная функция';
}
```
- Возвращает значение **напрямую**
- **Результат:** `"Обычная функция"` (строка, не Promise)

**Что произойдет с await?**

```javascript
// С await - получаем реальные значения
const data1 = await getData();           // "Данные получены"
const data2 = await getDataWithDelay();  // "Данные с задержкой" (через 100мс)
const data3 = await regularFunction();   // "Обычная функция" (Promise.resolve автоматически)
```

**Ключевые принципы async функций:**

1. **Всегда возвращают Promise** - даже если возвращаете примитив
2. **await можно использовать только внутри async функций**
3. **await приостанавливает выполнение** до завершения Promise
4. **Обычные функции автоматически оборачиваются в Promise** при использовании с await

**Практическое применение в тестировании:**
- Ожидание загрузки страницы: `await page.waitForLoadState()`
- Ожидание элемента: `await page.waitForSelector('.button')`
- Последовательные действия: `await page.click('.button'); await page.waitForResponse()`

📖 **[Подробнее о Async/Await]({{ site.baseurl }}/glossary/lesson-5-glossary#async-await)**
