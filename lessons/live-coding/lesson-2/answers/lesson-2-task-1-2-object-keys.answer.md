---
layout: default
title: Ответ к задаче 2.2
---
# Ответ к задаче 2.2: Ключи объекта (Object.keys)

```js
function getObjectKeys(obj) {
  return Object.keys(obj);
}
```

**Пояснение:**
[**Метод `Object.keys`**]({{ site.baseurl }}/glossary/lesson-2-glossary#objectkeys-values-entries) возвращает массив строк — собственных перечисляемых ключей объекта.

💡 **Важно:** Возвращает только собственные (не унаследованные) ключи объекта в том же порядке, в котором они были добавлены.

📖 **[Подробнее о Object.keys, values, entries]({{ site.baseurl }}/glossary/lesson-2-glossary#objectkeys-values-entries)** 