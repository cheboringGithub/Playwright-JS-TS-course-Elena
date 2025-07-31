---
layout: default
title: Занятие 1
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 1

📖 **[Глоссарий к уроку 1]({{ site.baseurl }}/glossary/lesson-1-glossary)** - все термины урока с подробными определениями и примерами

---

## Тема 1: Node.js & NPM

**Ключевые вопросы:**
- [**Node.js**]({{ site.baseurl }}/glossary/lesson-1-glossary#nodejs){:data-glossary-term="Node.js" data-glossary-definition="Среда выполнения JavaScript"} и [**NPM**]({{ site.baseurl }}/glossary/lesson-1-glossary#npm){:data-glossary-term="NPM" data-glossary-definition="Менеджер пакетов для Node.js"} — назначение в автоматизации тестирования
- [**`npm i` vs `npm ci`**]({{ site.baseurl }}/glossary/lesson-1-glossary#npm-i-vs-npm-ci){:data-glossary-term="npm i vs npm ci" data-glossary-definition="npm install vs npm clean install - отличия команд"} — различия команд установки

**Конфигурация проекта:**
- Структура [**package.json**]({{ site.baseurl }}/glossary/lesson-1-glossary#packagejson){:data-glossary-term="package.json" data-glossary-definition="Файл конфигурации Node.js проекта"} — блоки и их назначение
- Скрипты — автоматизация команд
- [**dependencies/devDependencies**]({{ site.baseurl }}/glossary/lesson-1-glossary#dependencies-vs-devdependencies){:data-glossary-term="dependencies vs devDependencies" data-glossary-definition="Основные зависимости vs зависимости для разработки"} — типы зависимостей и установка
- [**package-lock.json**]({{ site.baseurl }}/glossary/lesson-1-glossary#package-lockjson){:data-glossary-term="package-lock.json" data-glossary-definition="Файл блокировки версий зависимостей"} — блокировка версий и Git
- [**Семантическое версионирование**]({{ site.baseurl }}/glossary/lesson-1-glossary#семантическое-версионирование) — символы (^, ~, *)

**Альтернативы NPM:**
- [**Yarn**]({{ site.baseurl }}/glossary/lesson-1-glossary#yarn){:data-glossary-term="Yarn" data-glossary-definition="Альтернативный менеджер пакетов"} vs [**NPM**]({{ site.baseurl }}/glossary/lesson-1-glossary#npm) — отличия и сходства
- Соответствие команд: `yarn` ↔ `npm install`, `yarn <script>` ↔ `npm run`
- Критерии выбора менеджера пакетов
- [**yarn.lock**]({{ site.baseurl }}/glossary/lesson-1-glossary#yarnlock) vs [**package-lock.json**]({{ site.baseurl }}/glossary/lesson-1-glossary#package-lockjson) — различия форматов
- Совместимость в одном проекте

**Дополнительно (со звёздочкой, если будет время):**
- .npmrc — что это и для чего нужен

---

## Тема 2: GIT & GIT Flow

**Основы Git:**
- [**Система контроля версий**]({{ site.baseurl }}/glossary/lesson-1-glossary#git){:data-glossary-term="Git" data-glossary-definition="Система контроля версий"} — решаемые проблемы
- [**Базовые команды**]({{ site.baseurl }}/glossary/lesson-1-glossary#основные-команды-git){:data-glossary-term="Git команды" data-glossary-definition="clone, pull, push, commit - основные команды"}: `clone`, `pull`, `push`, `commit`
- [**Состояния файлов**]({{ site.baseurl }}/glossary/lesson-1-glossary#состояния-файлов-в-git){:data-glossary-term="Состояния файлов в Git" data-glossary-definition="Untracked, Staged, Modified, Committed - статусы файлов"} — жизненный цикл
- [**Конфигурация**]({{ site.baseurl }}/glossary/lesson-1-glossary#git-config) — настройка пользователя

**Продвинутые операции:**
- Флаг `--hard` в `git fetch`/`git reset`
- [**Слияние изменений**]({{ site.baseurl }}/glossary/lesson-1-glossary#git-операции): `merge`, `rebase`, `cherry-pick`
- [**Временное сохранение**]({{ site.baseurl }}/glossary/lesson-1-glossary#git-операции) — `git stash`
- [**Игнорирование файлов**]({{ site.baseurl }}/glossary/lesson-1-glossary#gitignore){:data-glossary-term=".gitignore" data-glossary-definition="Файл для игнорирования файлов в Git"} — `.gitignore`
- [**Просмотр истории**]({{ site.baseurl }}/glossary/lesson-1-glossary#git-log){:data-glossary-term="git log" data-glossary-definition="Команда для просмотра истории коммитов"} — `git log`
- [**Код-ревью**]({{ site.baseurl }}/glossary/lesson-1-glossary#код-ревью){:data-glossary-term="Код-ревью" data-glossary-definition="Процесс проверки кода другими разработчиками"} через [**Pull Request**]({{ site.baseurl }}/glossary/lesson-1-glossary#merge-request--pull-request)

**Методологии:**
- [**Git Flow**]({{ site.baseurl }}/glossary/lesson-1-glossary#git-flow) — стратегии ветвления ([подробнее](https://www.atlassian.com/ru/git/tutorials/comparing-workflows))

**Рекомендуемые материалы:**
- [Pro Git — всё о гите от простого к сложному](https://git-scm.com/book/ru/v2)
- [Видео с практикой](https://www.youtube.com/watch?v=zZBiln_2FhM) 

---

## Тема 3: Основы ЯП (JavaScript)

Читаем раздел: [Первые шаги в JavaScript](https://learn.javascript.ru/first-steps) 

---

## Практика: Live Coding

[Перейти к задачам для практики (Live Coding)]({{ site.baseurl }}/lessons/live-coding/lesson-1/live-coding-lesson-1) 