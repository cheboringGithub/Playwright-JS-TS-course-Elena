---
layout: default
title: Ответ к задаче 1.1
---
# Ответ к задаче 1.1: Порядок выполнения и Event Loop

**Ожидаемый вывод:**

```
A
D
C
B
```

**Объяснение Event Loop и порядка выполнения:**

1. **`console.log('A')`** - синхронный код, выполняется сразу
2. **`setTimeout(() => {...}, 0)`** - регистрируется в Web APIs, колбэк попадает в **очередь макрозадач**
3. **`Promise.resolve().then(() => {...})`** - Promise создается и его колбэк попадает в **очередь микрозадач**
4. **`console.log('D')`** - синхронный код, выполняется сразу
5. **Event Loop** проверяет очередь микрозадач (Promise) и выполняет `console.log('C')`
6. **Event Loop** проверяет очередь макрозадач (setTimeout) и выполняет `console.log('B')`

**Почему setTimeout(0) не выполняется сразу?**

[**Event Loop**]({{ site.baseurl }}/glossary/lesson-5-glossary#event-loop){:data-glossary-term="Event Loop" data-glossary-definition="Механизм JavaScript для обработки асинхронных операций"} работает по принципу "сначала синхронный код, потом асинхронный". Даже `setTimeout(0)` попадает в очередь макрозадач и выполняется только после завершения всего синхронного кода.

**Дополнительно:** Если изменить первый setTimeout на 200мс, порядок будет: `1, 4, 3, 2` (второй setTimeout выполнится раньше первого).

📖 **[Подробнее о Event Loop]({{ site.baseurl }}/glossary/lesson-5-glossary#event-loop)**
