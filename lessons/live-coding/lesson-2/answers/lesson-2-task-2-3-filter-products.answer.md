---
layout: default
title: Ответ к задаче 2.3: Фильтрация и преобразование товаров
---
# Ответ к задаче 2.3: Фильтрация и преобразование товаров

```js
function getAvailableProducts(products) {
  return products
    .filter(({isAvailable}) => isAvailable)
    .map(({name, price, ...rest}) => ({name, price, ...rest}));
}
```

**Пояснение:**
- Сначала используем [**`filter`**]({{ site.baseurl }}/glossary/lesson-2-glossary#методы-массивов){:data-glossary-term="filter" data-glossary-definition="Отфильтровывает элементы массива"}, чтобы оставить только товары с `isAvailable: true`.
- Затем применяем [**`map`**]({{ site.baseurl }}/glossary/lesson-2-glossary#методы-массивов){:data-glossary-term="map" data-glossary-definition="Преобразует каждый элемент массива"} для преобразования каждого товара:
  - С помощью [**деструктуризации**]({{ site.baseurl }}/glossary/lesson-2-glossary#деструктурирующее-присваивание){:data-glossary-term="Деструктуризация" data-glossary-definition="Доставание значений из объектов и массивов"} выделяем поля `name` и `price`, а остальные свойства собираем в `...rest`.
  - Возвращаем новый объект, где явно указываем `name` и `price`, а остальные свойства добавляем через [**spread (`...rest`)**]({{ site.baseurl }}/glossary/lesson-2-glossary#оператор-расширения-spread-operator).
- Такой подход позволяет гибко фильтровать и трансформировать массив объектов, оставляя только нужные поля и копируя дополнительные свойства.

💡 **Техники:** Цепочка [**методов массивов**]({{ site.baseurl }}/glossary/lesson-2-glossary#методы-массивов) с [**деструктуризацией**]({{ site.baseurl }}/glossary/lesson-2-glossary#деструктурирующее-присваивание) и [**spread оператором**]({{ site.baseurl }}/glossary/lesson-2-glossary#оператор-расширения-spread-operator).

📖 **[Подробнее о методах массивов]({{ site.baseurl }}/glossary/lesson-2-glossary#методы-массивов)** 