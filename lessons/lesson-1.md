---
layout: default
title: Занятие 1
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 1

---

## Тема 1: Node.js & NPM

**Вопросы для обсуждения:**
- Что такое Node.js
- Что такое NPM
- Для чего нужны NPM и Node.js в контексте автоматизации
- Как установить зависимость: `npm i` / `npm ci` (и в чем отличия)

**Работа с package.json:**
- Из каких блоков состоит package.json и за что они отвечают
- Блок script: для чего нужен, как используем
- Блоки dependencies/devDependencies — для чего нужны и в чем отличия
- Как установить зависимость в dependencies или devDependencies
- Что такое package-lock.json, для чего используется, нужно ли добавлять его в .gitignore?
- Что такое семантическое версионирование? Что означают символы (^, ~, *)

**Yarn — альтернатива NPM:**
- Что такое Yarn?
- В чем основные отличия и сходства Yarn и NPM?
- Какие команды Yarn аналогичны npm install, npm run, npm ci?
- Когда и почему выбирают Yarn вместо NPM?
- Как устроен файл yarn.lock и чем он отличается от package-lock.json?
- Можно ли использовать Yarn и NPM в одном проекте?

**Дополнительно (со звёздочкой, если будет время):**
- .npmrc — что это и для чего нужен

---

## Тема 2: GIT & GIT Flow

**Вопросы для обсуждения:**
- В целом для чего нужна система контроля версий и какие проблемы она решает
- Команды: `git clone`, `git pull`, `git push`, `git commit` — для чего нужны и когда применяем
- Какие состояния бывают у файлов в git
- `git config` — что это и для чего используем

**Работа с git:**
- Флаг `--hard` (для `git fetch` или `git reset`)
- Разница между git merge, rebase, cherry-pick — когда какую команду применяем
- git stash — для чего нужен
- .gitignore — для чего нужен
- git log — как просматривать историю
- Что такое Merge Request/Pull Request, как происходит код-ревью

**Git flow:**
- Что такое и какие бывают варианты — [статья Atlassian](https://www.atlassian.com/ru/git/tutorials/comparing-workflows)

**Рекомендуемые материалы:**
- [Pro Git — всё о гите от простого к сложному](https://git-scm.com/book/ru/v2)
- [Видео с практикой](https://www.youtube.com/watch?v=zZBiln_2FhM)

---

## Тема 3: Основы ЯП (JavaScript)

Читаем раздел: [Первые шаги в JavaScript](https://learn.javascript.ru/first-steps) 

---

## Практика: Live Coding

[Перейти к задачам для практики (Live Coding)]({{ site.baseurl }}/lessons/live-coding/lesson-1/live-coding-lesson-1) 