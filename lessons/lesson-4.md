---
layout: default
title: Занятие 4
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 4

📖 **[Глоссарий к уроку 4]({{ site.baseurl }}/glossary/lesson-4-glossary)** - все термины урока с подробными определениями и примерами

---

## Тема 1: CI/CD

**Вопросы для обсуждения:**
- Что такое [**CI/CD**]({{ site.baseurl }}/glossary/lesson-4-glossary#cicd){:data-glossary-term="CI/CD" data-glossary-definition="Непрерывная интеграция и развертывание"} и зачем это нужно?
- Какие основные **этапы** [**CI/CD pipeline**]({{ site.baseurl }}/glossary/lesson-4-glossary#pipeline){:data-glossary-term="Pipeline" data-glossary-definition="Последовательность автоматизированных этапов"}?
- Как **интегрировать автоматизацию тестирования** в [**CI/CD**]({{ site.baseurl }}/glossary/lesson-4-glossary#cicd)?
- Какие **инструменты** [**CI/CD**]({{ site.baseurl }}/glossary/lesson-4-glossary#cicd) популярны сейчас?
- Что такое [**GitHub Actions**]({{ site.baseurl }}/glossary/lesson-4-glossary#github-actions){:data-glossary-term="GitHub Actions" data-glossary-definition="CI/CD платформа от GitHub"} и как настроить [**workflow**]({{ site.baseurl }}/glossary/lesson-4-glossary#workflow){:data-glossary-term="Workflow" data-glossary-definition="Набор автоматизированных шагов"}?
- Как создать [**pipeline для автоматического запуска тестов**]({{ site.baseurl }}/glossary/lesson-4-glossary#pipeline)?

**Ключевые концепции:**
- [**Continuous Integration**]({{ site.baseurl }}/glossary/lesson-4-glossary#continuous-integration-ci){:data-glossary-term="Continuous Integration" data-glossary-definition="Непрерывная интеграция кода"} (CI)
- [**Continuous Deployment**]({{ site.baseurl }}/glossary/lesson-4-glossary#continuous-deployment-cd){:data-glossary-term="Continuous Deployment" data-glossary-definition="Непрерывное развертывание продукта"} (CD)
- [**Pipeline**]({{ site.baseurl }}/glossary/lesson-4-glossary#pipeline) и его этапы
- **Интеграция тестов** в процесс разработки
- [**GitHub Actions**]({{ site.baseurl }}/glossary/lesson-4-glossary#github-actions) и [**workflow**]({{ site.baseurl }}/glossary/lesson-4-glossary#workflow)
- **Автоматический запуск тестов** при push/merge

---

## Тема 2: Docker (Virtualization vs Containerization)

**Вопросы для обсуждения:**
- Что такое [**Docker**]({{ site.baseurl }}/glossary/lesson-4-glossary#docker){:data-glossary-term="Docker" data-glossary-definition="Платформа для контейнеризации"} и зачем он нужен?
- В чём разница между [**виртуализацией** и **контейнеризацией**]({{ site.baseurl }}/glossary/lesson-4-glossary#контейнеризация-vs-виртуализация)?
- Как **запускать тесты в** [**Docker**]({{ site.baseurl }}/glossary/lesson-4-glossary#docker)?
- Какие **преимущества** даёт использование контейнеров?

**Ключевые концепции:**
- [**Контейнеризация** vs **виртуализация**]({{ site.baseurl }}/glossary/lesson-4-glossary#контейнеризация-vs-виртуализация)
- [**Dockerfile**]({{ site.baseurl }}/glossary/lesson-4-glossary#dockerfile){:data-glossary-term="Dockerfile" data-glossary-definition="Файл с инструкциями для создания Docker-образа"} и [**Docker Compose**]({{ site.baseurl }}/glossary/lesson-4-glossary#docker-compose){:data-glossary-term="Docker Compose" data-glossary-definition="Инструмент для управления многоконтейнерными приложениями"}
- **Изоляция** окружения
- **Портативность** приложений

---

## Практическое задание

> **Перед началом:** Каждое задание делай в отдельной ветке по очереди:
> - Задание 1: ветка `lesson-4.1`
> - Задание 2: ветка `lesson-4.2` 
> - Задание 3: ветка `lesson-4.3`
> 
> Отправляй на ревью после каждого задания, я аппрувлю и только потом делай следующее.

### Задание 1: Page Object Pattern
Реализуй абстракции к тестам, сделанным в занятии 3, применяя [**Page Object Pattern**]({{ site.baseurl }}/glossary/lesson-4-glossary#page-object-pattern-расширенно).

**Что нужно сделать:**
- Создай классы для страниц
- Вынеси локаторы и методы взаимодействия с элементами в соответствующие классы
- Перепиши тесты так, чтобы они использовали методы страниц вместо прямых локаторов

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
Реализуй [**Page Factory**]({{ site.baseurl }}/glossary/lesson-4-glossary#page-factory-pattern), которая будет возвращать страницы в тестах.

**Что такое** [**Page Factory**]({{ site.baseurl }}/glossary/lesson-4-glossary#page-factory-pattern)**:**
[**Page Factory**]({{ site.baseurl }}/glossary/lesson-4-glossary#page-factory-pattern) — это паттерн, который создаёт и возвращает объекты страниц. В [**Playwright**]({{ site.baseurl }}/glossary/lesson-2-glossary#playwright) это позволяет централизованно управлять созданием страниц и упростить тесты.

**Что нужно сделать:**
- Создай класс PageFactory
- Реализуй методы для получения всех страниц (getLoginPage, getProductsPage, etc.)
- Перепиши тесты так, чтобы они получали страницы через фабрику

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
Реализуй [**фикстуру**]({{ site.baseurl }}/glossary/lesson-4-glossary#фикстуры-расширенно) теста, из которой можно будет вызвать [**Page Factory**]({{ site.baseurl }}/glossary/lesson-4-glossary#page-factory-pattern).

**Что нужно сделать:**
- Создай [**фикстуру**]({{ site.baseurl }}/glossary/lesson-4-glossary#фикстуры-расширенно), которая инициализирует [**PageFactory**]({{ site.baseurl }}/glossary/lesson-4-glossary#page-factory-pattern) с переданной страницей
- Перепиши тесты так, чтобы они использовали [**фикстуру**]({{ site.baseurl }}/glossary/lesson-4-glossary#фикстуры-расширенно) фабрики

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

**Результат:**
Твои тесты должны иметь:
- [**Уровень абстракции**]({{ site.baseurl }}/glossary/lesson-3-glossary#уровни-абстракции) с бизнес-логикой ([**Page Objects**]({{ site.baseurl }}/glossary/lesson-4-glossary#page-object-pattern-расширенно))
- [**Фабрику**]({{ site.baseurl }}/glossary/lesson-4-glossary#page-factory-pattern), которая возвращает страницы
- [**Фикстуру фабрики**]({{ site.baseurl }}/glossary/lesson-4-glossary#фикстуры-расширенно), из которой можно получить любую страницу

Это создаст полноценную [**архитектуру автоматизации**]({{ site.baseurl }}/glossary/lesson-3-glossary#многослойная-архитектура) с правильным разделением ответственности. 