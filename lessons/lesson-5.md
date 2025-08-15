---
layout: default
title: Занятие 5
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 5

📖 **[Глоссарий к уроку 5]({{ site.baseurl }}/glossary/lesson-5-glossary)** - все термины урока с подробными определениями и примерами

---

## Тема 1: Асинхронность в JavaScript

**Ключевые вопросы:**

### 1. [**Асинхронность**]({{ site.baseurl }}/glossary/lesson-5-glossary#асинхронность){:data-glossary-term="Асинхронность" data-glossary-definition="Способ выполнения операций без блокировки основного потока"}
- **Что такое асинхронность?**
  - Выполнение операций без блокировки основного потока
  - Возможность выполнять несколько задач одновременно
  - Нелинейный порядок выполнения кода

- **Для чего она нужна в тестах?**
  - Ожидание загрузки страниц и элементов
  - Работа с API запросами
  - Обработка событий пользовательского интерфейса
  - Параллельное выполнение тестов

### 2. [**Колбэки (Callbacks)**]({{ site.baseurl }}/glossary/lesson-5-glossary#колбэк-callback){:data-glossary-term="Колбэк (Callback)" data-glossary-definition="Функция, которая передается как аргумент другой функции и выполняется после завершения определенной операции"}
- **Что такое колбэки?**
  - Функции, передаваемые как аргументы другим функциям
  - Выполняются после завершения асинхронной операции
  - Основа асинхронного программирования в JavaScript

- **В чем заключаются их недостатки?**
  - Callback Hell (пирамида колбэков)
  - Сложность обработки ошибок
  - Трудности с параллельным выполнением
  - Проблемы с отладкой

### 3. [**Promise**]({{ site.baseurl }}/glossary/lesson-5-glossary#promise){:data-glossary-term="Promise" data-glossary-definition="Объект, представляющий результат асинхронной операции, которая может завершиться успешно или с ошибкой"}
- **Что такое Promise и как он работает?**
  - Объект, представляющий результат асинхронной операции
  - Три состояния: pending, fulfilled, rejected
  - Цепочка методов .then() и .catch()

- **Какие у Promise существуют методы?**
  - `Promise.all()` — выполнение всех промисов параллельно
  - `Promise.race()` — выполнение первого завершившегося промиса
  - `Promise.allSettled()` — выполнение всех промисов с результатами
  - `Promise.any()` — выполнение первого успешного промиса

### 4. [**Async/Await**]({{ site.baseurl }}/glossary/lesson-5-glossary#async-await){:data-glossary-term="Async/Await" data-glossary-definition="Синтаксический сахар над Promise, позволяющий писать асинхронный код в синхронном стиле"}
- **Что на самом деле означает этот синтаксис?**
  - Синтаксический сахар над Promise
  - Позволяет писать асинхронный код как синхронный
  - Упрощает обработку ошибок с try/catch

- **Что нам говорит тот факт, что функция объявлена как async?**
  - Функция всегда возвращает Promise
  - Внутри можно использовать await
  - Автоматическая обработка ошибок

### 5. [**Event Loop**]({{ site.baseurl }}/glossary/lesson-5-glossary#event-loop){:data-glossary-term="Event Loop" data-glossary-definition="Механизм JavaScript, который координирует выполнение синхронного и асинхронного кода"}
- **Что такое Event Loop?**
  - Механизм JavaScript для обработки асинхронных операций
  - Бесконечный цикл, проверяющий очереди задач
  - Координирует выполнение синхронного и асинхронного кода

- **Как он работает?**
  - Call Stack — стек вызовов функций
  - Web APIs — асинхронные операции браузера
  - Callback Queue — очередь колбэков
  - Microtask Queue — очередь микрозадач (Promise)

---

## 📚 Полезные источники

### 📖 **Теоретические материалы**
- **[learn.javascript.ru](https://learn.javascript.ru/) — Промисы, async/await**

### 🎥 **Видео по асинхронности**
- **[Асинхронность](https://www.youtube.com/watch?v=vIZs5tH-HGQ&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=4)**
- **[Promise](https://www.youtube.com/watch?v=1idOY3C1gYU&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=5)**
- **[Async/Await](https://www.youtube.com/watch?v=SHiUyM_fFME&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=8)**

---

## 🚀 Практическая часть

**Перед началом:**
- Создай ветку `task-5`.
- Выполни все задания этого блока в этой ветке.
- После выполнения создай merge request в `main` и назначь меня ревьюером.



### Задание 1: Создание pipeline в GitHub Actions
**Создать workflow в GitHub Actions с ручным запуском**
- Создать pipeline (workflow) в GitHub Actions
- Использовать `workflow_dispatch` для ручного запуска
- Pipeline должен позволять выбирать браузер и набор тестов

### Задание 2: Создание pipeline по расписанию
**Создать workflow в GitHub Actions с автоматическим запуском**
- Создать pipeline (workflow) в GitHub Actions
- Использовать `cron` для запуска по расписанию
- Настроить автоматическое выполнение тестов



---

## 📚 Полезные ссылки

- **[Документация Playwright по интеграции](https://playwright.dev/docs/ci)**
- **[GitHub Actions: Events that trigger workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)**
- **[GitHub Actions: Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)**
- **[Документация по cron](https://crontab.guru/)**


---

## 💻 Live Coding

[Перейти к задачам для практики (Live Coding)]({{ site.baseurl }}/lessons/live-coding/lesson-5/live-coding-lesson-5)

**6 практических задач по асинхронности:**
- **Колбэки** - понимание Event Loop и порядка выполнения
- **Promise** - состояния, методы, цепочки
- **Async/Await** - синтаксис, обработка ошибок, практическое применение
