---
layout: default
title: Ответ к задаче 1.1
---
# Ответ к задаче 1.1: Hoisting

**Ожидаемый вывод:**

```
undefined
```

**Объяснение:**
Переменная `a` объявлена с помощью [**`var`**]({{ site.baseurl }}/glossary/lesson-2-glossary#var-устаревшее-ключевое-слово){:data-glossary-term="var" data-glossary-definition="Устаревший способ объявления переменных"}, поэтому её объявление поднимается вверх функции ([**hoisting**]({{ site.baseurl }}/glossary/lesson-2-glossary#var-устаревшее-ключевое-слово){:data-glossary-term="hoisting" data-glossary-definition="Подъем объявлений наверх области видимости"}), но инициализация происходит на месте. До строки `var a = 10;` значение `a` — `undefined`.

📖 **[Подробнее о hoisting и var]({{ site.baseurl }}/glossary/lesson-2-glossary#var-устаревшее-ключевое-слово)** 