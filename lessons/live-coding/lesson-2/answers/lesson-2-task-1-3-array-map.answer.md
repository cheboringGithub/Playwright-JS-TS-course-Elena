---
layout: default
title: Ответ к задаче 2.3
---
# Ответ к задаче 2.3: Квадраты элементов (map)

```js
function squareArray(arr) {
  return arr.map(x => x * x);
}
```

**Пояснение:**
[**Метод `map`**]({{ site.baseurl }}/glossary/lesson-2-glossary#методы-массивов){:data-glossary-term="map" data-glossary-definition="Создает новый массив с преобразованными элементами"} возвращает новый массив, в котором каждый элемент — результат вызова переданной функции для соответствующего элемента исходного массива.

💡 **Важно:** `map` не изменяет исходный массив, а создает новый. Используется [**стрелочная функция**]({{ site.baseurl }}/glossary/lesson-2-glossary#стрелочные-функции){:data-glossary-term="Стрелочные функции" data-glossary-definition="Краткий синтаксис функций"} `x => x * x`.

📖 **[Подробнее о методах массивов]({{ site.baseurl }}/glossary/lesson-2-glossary#методы-массивов)** 