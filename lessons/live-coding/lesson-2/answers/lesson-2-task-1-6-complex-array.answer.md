---
layout: default
title: Ответ к задаче 2.6
---
# Ответ к задаче 2.6: Обработка пользователей (составная задача)

```js
function processUsers(users) {
  return users
    .filter(user => user.age >= 18)
    .map(({name, age}) => ({name, age, isAdult: true}))
    .sort((a, b) => a.age - b.age);
}
```

**Пояснение:**
1. [**filter**]({{ site.baseurl }}/glossary/lesson-2-glossary#методы-массивов) — отбираем только пользователей 18 лет и старше
2. [**map с деструктуризацией**]({{ site.baseurl }}/glossary/lesson-2-glossary#деструктурирующее-присваивание) — извлекаем нужные поля и добавляем isAdult
3. [**sort**]({{ site.baseurl }}/glossary/lesson-2-glossary#методы-массивов) — сортируем по возрасту (a.age - b.age для возрастания)

💡 **Техники:** Цепочка [**методов массивов**]({{ site.baseurl }}/glossary/lesson-2-glossary#методы-массивов) с [**деструктуризацией**]({{ site.baseurl }}/glossary/lesson-2-glossary#деструктурирующее-присваивание) в параметрах функции.

📖 **[Подробнее о методах массивов]({{ site.baseurl }}/glossary/lesson-2-glossary#методы-массивов)**

**Альтернативное решение с промежуточными переменными:**
```js
function processUsers(users) {
  const adults = users.filter(user => user.age >= 18);
  const processed = adults.map(({name, age}) => ({name, age, isAdult: true}));
  return processed.sort((a, b) => a.age - b.age);
}
``` 