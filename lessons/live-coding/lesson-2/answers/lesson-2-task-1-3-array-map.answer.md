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
[**Метод `map`**]({{ site.baseurl }}/glossary/lesson-2-glossary#методы-массивов){:data-glossary-term="map" data-glossary-definition="Метод массива, создающий новый массив с результатами вызова функции для каждого элемента" data-glossary-category="JavaScript"} возвращает новый массив, в котором каждый элемент — результат вызова переданной функции для соответствующего элемента исходного массива.

💡 **Важно:** `map` не изменяет исходный массив, а создает новый. Используется [**стрелочная функция**]({{ site.baseurl }}/glossary/lesson-2-glossary#стрелочные-функции) `x => x * x`.

📖 **[Подробнее о методах массивов]({{ site.baseurl }}/glossary/lesson-2-glossary#методы-массивов)** 