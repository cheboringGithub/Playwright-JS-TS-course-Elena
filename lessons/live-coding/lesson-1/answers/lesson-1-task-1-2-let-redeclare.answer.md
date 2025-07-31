---
layout: default
title: Ответ к задаче 1.2
---
# Ответ к задаче 1.2: let redeclare

**Ожидаемый вывод:**

```
SyntaxError: Identifier 'x' has already been declared
```

**Объяснение:**
Переменные, объявленные с помощью `let` и `const`, нельзя переобъявлять в одной области видимости. Это вызовет синтаксическую ошибку.

💡 **Важно:** В отличие от [**`var`**]({{ site.baseurl }}/glossary/lesson-2-glossary#var-устаревшее-ключевое-слово), которое позволяет переобъявление, `let` и `const` более строгие и предотвращают случайные ошибки.

📖 **[Подробнее о различиях var, let, const]({{ site.baseurl }}/glossary/lesson-2-glossary#var-устаревшее-ключевое-слово)** 