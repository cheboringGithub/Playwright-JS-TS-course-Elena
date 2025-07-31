---
layout: default
title: Ответ к задаче 2.4
---
# Ответ к задаче 2.4: Значения объекта (Object.values)

```js
function getObjectValues(obj) {
  return Object.values(obj);
}
```

**Пояснение:**
[**Метод `Object.values`**]({{ site.baseurl }}/glossary/lesson-2-glossary#objectkeys-values-entries) возвращает массив значений всех собственных перечисляемых свойств объекта.

💡 **Важно:** В отличие от `Object.keys`, возвращает именно значения свойств, а не их имена.

📖 **[Подробнее о Object.keys, values, entries]({{ site.baseurl }}/glossary/lesson-2-glossary#objectkeys-values-entries)** 