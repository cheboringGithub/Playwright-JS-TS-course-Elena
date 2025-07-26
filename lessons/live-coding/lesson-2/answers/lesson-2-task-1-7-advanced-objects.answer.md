---
layout: default
title: Ответ к задаче 2.7
---
# Ответ к задаче 2.7: Анализ данных объектов (составная задача)

```js
function analyzeData(data) {
  return Object.entries(data).reduce((stats, [key, value]) => {
    stats.count++;
    stats.sum += value;
    stats.average = stats.sum / stats.count;
    return stats;
  }, { count: 0, sum: 0, average: 0 });
}
```

**Пояснение:**
1. **Object.entries** — получаем массив пар [ключ, значение]
2. **reduce** — накапливаем статистику, используя деструктуризацию `[key, value]`
3. **Начальное значение** — объект с нулевыми значениями для count, sum, average
4. **Обновление average** — пересчитываем среднее на каждой итерации

**Альтернативное решение с отдельным вычислением среднего:**
```js
function analyzeData(data) {
  const entries = Object.entries(data);
  const sum = entries.reduce((acc, [key, value]) => acc + value, 0);
  return {
    count: entries.length,
    sum: sum,
    average: sum / entries.length
  };
}
``` 