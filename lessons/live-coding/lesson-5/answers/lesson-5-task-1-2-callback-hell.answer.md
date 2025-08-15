---
layout: default
title: Ответ к задаче 1.3
---
# Ответ к задаче 1.2: Callback Hell

**Ожидаемый вывод:**

```
Начало
Конец
Первый шаг
Второй шаг
Третий шаг
Четвертый шаг
Готово!
```

**Объяснение проблемы callback hell:**

### 1. **Что происходит в коде:**
- Синхронный код выполняется: `Начало` → `Конец`
- Затем асинхронные операции выполняются последовательно с задержкой 100мс
- Каждый следующий шаг ждет завершения предыдущего

### 2. **Проблемы callback hell:**
- **Читаемость** - код становится похож на пирамиду
- **Сложность отладки** - трудно понять порядок выполнения
- **Обработка ошибок** - сложно обрабатывать ошибки на каждом уровне
- **Поддержка** - код становится трудным для понимания и изменения

### 3. **Решения callback hell:**

#### **Promise (ES6):**
```javascript
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

delay(100)
  .then(() => {
    console.log('Первый шаг');
    return delay(100);
  })
  .then(() => {
    console.log('Второй шаг');
    return delay(100);
  })
  .then(() => {
    console.log('Третий шаг');
    return delay(100);
  })
  .then(() => {
    console.log('Четвертый шаг');
    console.log('Готово!');
  });
```

#### **Async/Await (ES2017):**
```javascript
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function executeSteps() {
  await delay(100);
  console.log('Первый шаг');
  
  await delay(100);
  console.log('Второй шаг');
  
  await delay(100);
  console.log('Третий шаг');
  
  await delay(100);
  console.log('Четвертый шаг');
  console.log('Готово!');
}

executeSteps();
```

### 4. **Практическое применение в тестировании:**

#### **Callback hell в тестах (плохо):**
```javascript
page.click('.button', () => {
  page.waitForSelector('.modal', () => {
    page.fill('.input', 'text', () => {
      page.click('.submit', () => {
        page.waitForResponse('/api/submit', () => {
          expect(page.locator('.success')).toBeVisible();
        });
      });
    });
  });
});
```

#### **Async/await в тестах (хорошо):**
```javascript
await page.click('.button');
await page.waitForSelector('.modal');
await page.fill('.input', 'text');
await page.click('.submit');
await page.waitForResponse('/api/submit');
expect(await page.locator('.success')).toBeVisible();
```

**Ключевые принципы:**
1. **Избегайте вложенных колбэков** - используйте Promise или async/await
2. **Разбивайте сложные операции** на простые функции
3. **Используйте современный синтаксис** для лучшей читаемости
4. **Обрабатывайте ошибки** с помощью try/catch или .catch()

📖 **[Подробнее о колбэках]({{ site.baseurl }}/glossary/lesson-5-glossary#колбэк-callback)**
