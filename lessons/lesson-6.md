---
layout: default
title: Занятие 6
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 6

📖 **[Глоссарий к уроку 6]({{ site.baseurl }}/glossary/lesson-6-glossary)** - все термины урока с подробными определениями и примерами

---

## Тема 1: Оптимизация тестов с помощью Sharding

**Ключевые вопросы:**

### 1. [**Sharding**]({{ site.baseurl }}/glossary/lesson-6-glossary#sharding){:data-glossary-term="Sharding" data-glossary-definition="Разделение тестов на параллельные части для ускорения выполнения"}
- **Что такое Sharding в Playwright?**
  - Разделение тестов на меньшие части (шарды)
  - Параллельное выполнение на разных машинах
  - Ускорение общего времени выполнения тестов

- **Как работает разделение тестов на части?**
  - Использование флага `--shard=x/y`
  - Каждый шард выполняет свою часть тестов
  - Независимое выполнение шардов

### 2. [**Уровни гранулярности**]({{ site.baseurl }}/glossary/lesson-6-glossary#уровни-гранулярности){:data-glossary-term="Уровни гранулярности" data-glossary-definition="Способы разделения тестов при sharding"}
- **Что означает `fullyParallel: true`?**
  - Тесты выполняются на уровне отдельных тестов
  - Лучшее распределение нагрузки между шардами
  - Оптимальное использование ресурсов

- **В чем разница между тестовым и файловым уровнем?**
  - Тестовый уровень: каждый тест может быть в разных шардах
  - Файловый уровень: весь файл тестов в одном шарде
  - Влияние на балансировку шардов

### 3. [**Балансировка шардов**]({{ site.baseurl }}/glossary/lesson-6-glossary#балансировка-шардов){:data-glossary-term="Балансировка шардов" data-glossary-definition="Равномерное распределение тестов между шардами"}
- **Как Playwright распределяет тесты между шардами?**
  - Автоматическое распределение по времени выполнения
  - Учет зависимостей между тестами
  - Оптимизация для минимального общего времени

- **Почему важно учитывать размер тестовых файлов?**
  - Неравномерное распределение нагрузки
  - Возможность "пустых" шардов
  - Рекомендации по организации тестов

### 4. [**Объединение отчетов**]({{ site.baseurl }}/glossary/lesson-6-glossary#объединение-отчетов){:data-glossary-term="Объединение отчетов" data-glossary-definition="Создание единого отчета из результатов всех шардов"}
- **Как работает `blob` репортер?**
  - Сохранение полной информации о тестах
  - Включение трейсов, скриншотов и других артефактов
  - Возможность объединения с другими отчетами

- **Как объединить отчеты от разных шардов?**
  - Команда `npx playwright merge-reports`
  - Загрузка blob отчетов в единую директорию
  - Создание HTML или других форматов отчетов

---

## 📚 Полезные источники

- **[Playwright Test Sharding](https://playwright.dev/docs/test-sharding) — разделение тестов на параллельные части**
- **[Playwright Parallelism Guide](https://playwright.dev/docs/test-parallel) — параллельное выполнение тестов**
- **[GitHub Actions Matrix Strategy](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs) — матричная стратегия для параллельных jobs**

---

## 🚀 Практическая часть

**Перед началом:**
- Создай ветку `task-6`.
- Выполни все задания этого блока в этой ветке.
- После выполнения создай merge request в `main` и назначь меня ревьюером.

### Задание 1: Применение Sharding к существующему workflow
**Оптимизировать выполнение тестов с помощью sharding**
- Модифицировать существующие workflows для использования sharding
- Настроить разделение тестов на 4 шарда с помощью matrix strategy
- Добавить `blob` репортер для CI окружения
- Создать отдельный job для объединения отчетов от всех шардов
- Использовать команду `npx playwright merge-reports` для создания единого отчета

**Требования:**
- Использовать `--shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}`
- Настроить `strategy.matrix` с `shardIndex: [1, 2, 3, 4]` и `shardTotal: [4]`
- Загружать blob отчеты в GitHub Actions Artifacts
- Создать job `merge-reports` для объединения отчетов
- Использовать `needs: [playwright-tests]` для правильного порядка выполнения

### Задание 2: Оптимизация конфигурации Playwright
**Настроить Playwright для эффективного sharding**
- Обновить `playwright.config.ts` для поддержки sharding
- Включить `fullyParallel: true` для лучшего распределения
- Настроить `blob` репортер для CI окружения
- Оптимизировать настройки `workers` для разных окружений
- Протестировать балансировку шардов

### Задание 3: Анализ производительности
**Сравнить производительность с sharding и без**
- Измерить время выполнения тестов без sharding
- Измерить время выполнения с 2, 4 и 8 шардами
- Проанализировать распределение тестов между шардами
- Создать отчет о влиянии sharding на производительность
- Предложить оптимальное количество шардов для проекта

---

## 💻 Примеры конфигурации

### Конфигурация Playwright для Sharding
```typescript
// playwright.config.ts
export default defineConfig({
  testDir: './tests',
  // Включаем blob репортер для CI
  reporter: process.env.CI ? 'blob' : 'html',
  // Включаем полностью параллельное выполнение для лучшего sharding
  fullyParallel: true,
  // Настройки параллелизма
  workers: process.env.CI ? 1 : undefined,
});
```

### GitHub Actions Workflow с Sharding
```yaml
# .github/workflows/playwright-sharded.yml
name: Playwright Tests with Sharding
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

jobs:
  playwright-tests:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        shardIndex: [1, 2, 3, 4]
        shardTotal: [4]
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: lts/*
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test --shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}
    - name: Upload blob report
      if: ${{ !cancelled() }}
      uses: actions/upload-artifact@v4
      with:
        name: blob-report-${{ matrix.shardIndex }}
        path: blob-report
        retention-days: 1

  merge-reports:
    if: ${{ !cancelled() }}
    needs: [playwright-tests]
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: lts/*
    - name: Install dependencies
      run: npm ci
    - name: Download blob reports
      uses: actions/download-artifact@v4
      with:
        path: all-blob-reports
        pattern: blob-report-*
        merge-multiple: true
    - name: Merge into HTML Report
      run: npx playwright merge-reports --reporter html ./all-blob-reports
    - name: Upload HTML report
      uses: actions/upload-artifact@v4
      with:
        name: html-report
        path: playwright-report
        retention-days: 14
```

---

## 💻 Live Coding

[Перейти к задачам для практики (Live Coding)]({{ site.baseurl }}/lessons/live-coding/lesson-6/live-coding-lesson-6)
