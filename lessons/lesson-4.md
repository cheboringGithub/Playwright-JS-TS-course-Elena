---
layout: default
title: Занятие 4
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 4

📖 **[Глоссарий к уроку 4]({{ site.baseurl }}/glossary/lesson-4-glossary)** - все термины урока с подробными определениями и примерами

---

## Тема 1: CI/CD

- [**CI/CD**]({{ site.baseurl }}/glossary/lesson-4-glossary#cicd){:data-glossary-term="CI/CD" data-glossary-definition="Непрерывная интеграция и развертывание"} — назначение и преимущества
- [**Pipeline**]({{ site.baseurl }}/glossary/lesson-4-glossary#pipeline){:data-glossary-term="Pipeline" data-glossary-definition="Последовательность автоматизированных этапов"} — основные этапы и структура
- **Интеграция тестирования** в процесс разработки
- **Популярные инструменты** — обзор рынка CI/CD решений
- [**GitHub Actions**]({{ site.baseurl }}/glossary/lesson-4-glossary#github-actions){:data-glossary-term="GitHub Actions" data-glossary-definition="CI/CD платформа от GitHub"} — настройка [**workflow**]({{ site.baseurl }}/glossary/lesson-4-glossary#workflow){:data-glossary-term="Workflow" data-glossary-definition="Набор автоматизированных шагов"}
- **Автоматизация тестов** при [**push**]({{ site.baseurl }}/glossary/lesson-4-glossary#git-push){:data-glossary-term="Git push" data-glossary-definition="Отправка локальных изменений в удаленный репозиторий"}/[**merge**]({{ site.baseurl }}/glossary/lesson-4-glossary#git-merge){:data-glossary-term="Git merge" data-glossary-definition="Слияние веток в Git"}

---

## Тема 2: Docker и контейнеризация

- [**Docker**]({{ site.baseurl }}/glossary/lesson-4-glossary#docker){:data-glossary-term="Docker" data-glossary-definition="Платформа для контейнеризации"} — назначение и возможности
- [**Контейнеризация vs виртуализация**]({{ site.baseurl }}/glossary/lesson-4-glossary#контейнеризация-vs-виртуализация) — сравнение подходов
- **Запуск тестов** в [**контейнерах**]({{ site.baseurl }}/glossary/lesson-4-glossary#контейнер){:data-glossary-term="Контейнер" data-glossary-definition="Изолированная среда выполнения приложения"}
- **Инструменты**: [**Dockerfile**]({{ site.baseurl }}/glossary/lesson-4-glossary#dockerfile){:data-glossary-term="Dockerfile" data-glossary-definition="Файл с инструкциями для создания Docker-образа"}, [**Docker Compose**]({{ site.baseurl }}/glossary/lesson-4-glossary#docker-compose){:data-glossary-term="Docker Compose" data-glossary-definition="Инструмент для управления многоконтейнерными приложениями"}
- **Преимущества**: изоляция [**окружений**]({{ site.baseurl }}/glossary/lesson-4-glossary#окружение){:data-glossary-term="Окружение" data-glossary-definition="Среда разработки/тестирования/продакшена"}, портативность [**образов**]({{ site.baseurl }}/glossary/lesson-4-glossary#docker-образ){:data-glossary-term="Docker образ" data-glossary-definition="Шаблон для создания контейнеров"}

---

## Практическое задание

> **Перед началом:** Каждое задание делай в отдельной ветке по очереди:
> - Задание 1: ветка `lesson-4.1`
> - Задание 2: ветка `lesson-4.2` 
> - Задание 3: ветка `lesson-4.3`
> 
> Отправляй на ревью после каждого задания, я аппрувлю и только потом делай следующее.

### Задание 1: Page Object Pattern
Реализуй абстракции к тестам из занятия 3, применяя [**Page Object Pattern**]({{ site.baseurl }}/glossary/lesson-4-glossary#page-object-pattern-расширенно).

**Задачи:**
- Создание классов для страниц
- Вынос локаторов и методов взаимодействия
- Переписывание тестов с использованием методов страниц

**Пример структуры:**
```js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async login(username, password) {
    // твой код здесь
  }
}

// В тесте:
test('login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
  // проверки
});
```

---

### Задание 2: Page Factory Pattern
Реализуй [**Page Factory**]({{ site.baseurl }}/glossary/lesson-4-glossary#page-factory-pattern) — паттерн для централизованного создания объектов страниц в [**Playwright**]({{ site.baseurl }}/glossary/lesson-2-glossary#playwright).

**Задачи:**
- Класс PageFactory с методами создания страниц  
- Методы получения: `getLoginPage()`, `getProductsPage()`, etc.
- Интеграция фабрики в тесты

**Пример структуры:**
```js
class PageFactory {
  constructor(page) {
    this.page = page;
  }

  getLoginPage() {
    // твой код здесь
  }

  getProductsPage() {
    // твой код здесь
  }
}

// В тесте:
test('test with factory', async ({ page }) => {
  const factory = new PageFactory(page);
  const loginPage = factory.getLoginPage();
  // использование
});
```

---

### Задание 3: Фикстуры с Page Factory
Реализуй [**фикстуру**]({{ site.baseurl }}/glossary/lesson-4-glossary#фикстуры-расширенно) для инициализации [**Page Factory**]({{ site.baseurl }}/glossary/lesson-4-glossary#page-factory-pattern).

**Задачи:**
- Фикстура с инициализацией PageFactory  
- Интеграция фикстуры в тесты

**Пример структуры:**
```js
// В playwright.config.js или test файле:
const { test } = require('@playwright/test');

// Создание фикстуры для фабрики:
test.extend({
  pageFactory: async ({ page }, use) => {
    const factory = new PageFactory(page);
    await use(factory);
  }
});

// Использование в тесте:
test('test with factory fixture', async ({ pageFactory }) => {
  const loginPage = pageFactory.getLoginPage();
  const productsPage = pageFactory.getProductsPage();
  
  await loginPage.login('user', 'pass');
  await productsPage.addToCart();
  // проверки
});
```

---

**Итоговая архитектура:**
- [**Page Objects**]({{ site.baseurl }}/glossary/lesson-4-glossary#page-object-pattern-расширенно) — бизнес-логика страниц
- [**Page Factory**]({{ site.baseurl }}/glossary/lesson-4-glossary#page-factory-pattern) — централизованное создание страниц  
- [**Фикстуры**]({{ site.baseurl }}/glossary/lesson-4-glossary#фикстуры-расширенно) — управление жизненным циклом

Результат — полноценная [**многослойная архитектура**]({{ site.baseurl }}/glossary/lesson-3-glossary#многослойная-архитектура) с четким разделением ответственности. 