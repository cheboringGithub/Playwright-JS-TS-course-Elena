---
layout: default
title: Ответ к задаче 1.2
---
# Ответ к задаче 1.2: Порядок выполнения

**Ожидаемый вывод:**

```
A
D
C
B
```

**Объяснение порядка выполнения:**

1. **`console.log('A')`** - синхронный код, выполняется сразу
2. **`setTimeout(() => {...}, 0)`** - регистрируется в Web APIs, колбэк попадает в **очередь макрозадач**
3. **`Promise.resolve().then(() => {...})`** - Promise создается и его колбэк попадает в **очередь микрозадач**
4. **`console.log('D')`** - синхронный код, выполняется сразу
5. **Event Loop** проверяет очередь микрозадач (Promise) и выполняет `console.log('C')`
6. **Event Loop** проверяет очередь макрозадач (setTimeout) и выполняет `console.log('B')`

**Разница между setTimeout и Promise в Event Loop:**

- **[**Promise**]({{ site.baseurl }}/glossary/lesson-5-glossary#promise){:data-glossary-term="Promise" data-glossary-definition="Объект, представляющий результат асинхронной операции"} попадает в **очередь микрозадач** (Microtask Queue) и имеет **приоритет** над макрозадачами
- **setTimeout** попадает в **очередь макрозадач** (Macrotask Queue) и выполняется **после** всех микрозадач

**Порядок приоритетов Event Loop:**
1. Синхронный код (Call Stack)
2. Микрозадачи (Promise, queueMicrotask)
3. Макрозадачи (setTimeout, setInterval, DOM события)

📖 **[Подробнее о Event Loop]({{ site.baseurl }}/glossary/lesson-5-glossary#event-loop)**
