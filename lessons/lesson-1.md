---
layout: default
title: Занятие 1
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 1

📖 **[Глоссарий к уроку 1]({{ site.baseurl }}/glossary/lesson-1-glossary)** - все термины урока с подробными определениями и примерами

---

## Тема 1: Node.js & NPM

**Вопросы для обсуждения:**
- Что такое [**Node.js**]({{ site.baseurl }}/glossary/lesson-1-glossary#nodejs){:data-glossary-term="Node.js" data-glossary-definition="Среда выполнения JavaScript"}
- Что такое [**NPM**]({{ site.baseurl }}/glossary/lesson-1-glossary#npm){:data-glossary-term="NPM" data-glossary-definition="Менеджер пакетов для Node.js"}
- Для чего нужны [**NPM**]({{ site.baseurl }}/glossary/lesson-1-glossary#npm) и [**Node.js**]({{ site.baseurl }}/glossary/lesson-1-glossary#nodejs) в контексте автоматизации
- Как установить зависимость: `npm i` / `npm ci` (и в чем отличия)

**Работа с [package.json]({{ site.baseurl }}/glossary/lesson-1-glossary#packagejson){:data-glossary-term="package.json" data-glossary-definition="Файл конфигурации Node.js проекта"}:**
- Из каких блоков состоит [**package.json**]({{ site.baseurl }}/glossary/lesson-1-glossary#packagejson) и за что они отвечают
- Блок script: для чего нужен, как используем
- Блоки [**dependencies/devDependencies**]({{ site.baseurl }}/glossary/lesson-1-glossary#dependencies-vs-devdependencies){:data-glossary-term="dependencies vs devDependencies" data-glossary-definition="Основные зависимости vs зависимости для разработки"} — для чего нужны и в чем отличия
- Как установить зависимость в [**dependencies или devDependencies**]({{ site.baseurl }}/glossary/lesson-1-glossary#dependencies-vs-devdependencies)
- Что такое [**package-lock.json**]({{ site.baseurl }}/glossary/lesson-1-glossary#package-lockjson){:data-glossary-term="package-lock.json" data-glossary-definition="Файл блокировки версий зависимостей"}, для чего используется, нужно ли добавлять его в .gitignore?
- Что такое [**семантическое версионирование**]({{ site.baseurl }}/glossary/lesson-1-glossary#семантическое-версионирование)? Что означают символы (^, ~, *)

**[Yarn]({{ site.baseurl }}/glossary/lesson-1-glossary#yarn){:data-glossary-term="Yarn" data-glossary-definition="Альтернативный менеджер пакетов"} — альтернатива NPM:**
- Что такое [**Yarn**]({{ site.baseurl }}/glossary/lesson-1-glossary#yarn)?
- В чем основные отличия и сходства [**Yarn**]({{ site.baseurl }}/glossary/lesson-1-glossary#yarn) и [**NPM**]({{ site.baseurl }}/glossary/lesson-1-glossary#npm)?
- Какие команды [**Yarn**]({{ site.baseurl }}/glossary/lesson-1-glossary#yarn) аналогичны npm install, npm run, npm ci?
- Когда и почему выбирают [**Yarn**]({{ site.baseurl }}/glossary/lesson-1-glossary#yarn) вместо [**NPM**]({{ site.baseurl }}/glossary/lesson-1-glossary#npm)?
- Как устроен файл [**yarn.lock**]({{ site.baseurl }}/glossary/lesson-1-glossary#yarnlock) и чем он отличается от [**package-lock.json**]({{ site.baseurl }}/glossary/lesson-1-glossary#package-lockjson)?
- Можно ли использовать [**Yarn**]({{ site.baseurl }}/glossary/lesson-1-glossary#yarn) и [**NPM**]({{ site.baseurl }}/glossary/lesson-1-glossary#npm) в одном проекте?

**Дополнительно (со звёздочкой, если будет время):**
- .npmrc — что это и для чего нужен

---

## Тема 2: GIT & GIT Flow

**Вопросы для обсуждения:**
- В целом для чего нужна [**система контроля версий**]({{ site.baseurl }}/glossary/lesson-1-glossary#git){:data-glossary-term="Git" data-glossary-definition="Система контроля версий"} и какие проблемы она решает
- [**Основные команды Git**]({{ site.baseurl }}/glossary/lesson-1-glossary#основные-команды-git){:data-glossary-term="Git команды" data-glossary-definition="clone, pull, push, commit - основные команды"}: `git clone`, `git pull`, `git push`, `git commit` — для чего нужны и когда применяем
- Какие [**состояния**]({{ site.baseurl }}/glossary/lesson-1-glossary#состояния-файлов-в-git) бывают у файлов в [**git**]({{ site.baseurl }}/glossary/lesson-1-glossary#git)
- [**`git config`**]({{ site.baseurl }}/glossary/lesson-1-glossary#git-config) — что это и для чего используем

**Работа с [git]({{ site.baseurl }}/glossary/lesson-1-glossary#git):**
- Флаг `--hard` (для `git fetch` или `git reset`)
- Разница между [**git merge, rebase, cherry-pick**]({{ site.baseurl }}/glossary/lesson-1-glossary#git-операции) — когда какую команду применяем
- [**git stash**]({{ site.baseurl }}/glossary/lesson-1-glossary#git-операции) — для чего нужен
- [**.gitignore**]({{ site.baseurl }}/glossary/lesson-1-glossary#gitignore){:data-glossary-term=".gitignore" data-glossary-definition="Файл для игнорирования файлов в Git"} — для чего нужен
- git log — как просматривать историю
- Что такое [**Merge Request/Pull Request**]({{ site.baseurl }}/glossary/lesson-1-glossary#merge-request--pull-request), как происходит код-ревью

**[Git flow]({{ site.baseurl }}/glossary/lesson-1-glossary#git-flow):**
- Что такое [**Git flow**]({{ site.baseurl }}/glossary/lesson-1-glossary#git-flow) и какие бывают варианты — [статья Atlassian](https://www.atlassian.com/ru/git/tutorials/comparing-workflows)

**Рекомендуемые материалы:**
- [Pro Git — всё о гите от простого к сложному](https://git-scm.com/book/ru/v2)
- [Видео с практикой](https://www.youtube.com/watch?v=zZBiln_2FhM) 

---

## Тема 3: Основы ЯП (JavaScript)

Читаем раздел: [Первые шаги в JavaScript](https://learn.javascript.ru/first-steps) 

---

## Практика: Live Coding

[Перейти к задачам для практики (Live Coding)]({{ site.baseurl }}/lessons/live-coding/lesson-1/live-coding-lesson-1) 