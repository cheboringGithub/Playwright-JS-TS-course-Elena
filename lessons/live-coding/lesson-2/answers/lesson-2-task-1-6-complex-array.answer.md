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
1. **filter** — отбираем только пользователей 18 лет и старше
2. **map с деструктуризацией** — извлекаем нужные поля и добавляем isAdult
3. **sort** — сортируем по возрасту (a.age - b.age для возрастания)

**Альтернативное решение с промежуточными переменными:**
```js
function processUsers(users) {
  const adults = users.filter(user => user.age >= 18);
  const processed = adults.map(({name, age}) => ({name, age, isAdult: true}));
  return processed.sort((a, b) => a.age - b.age);
}
``` 