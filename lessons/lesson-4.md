---
layout: default
title: Занятие 4
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 4

---

## Тема 1: CI/CD

**Вопросы для обсуждения:**
- Что такое **CI/CD** и зачем это нужно?
- Какие основные **этапы CI/CD pipeline**?
- Как **интегрировать автоматизацию тестирования** в CI/CD?
- Какие **инструменты CI/CD** популярны сейчас?
- Что такое **GitHub Actions** и как настроить workflow?
- Как создать **pipeline для автоматического запуска тестов**?

**Ключевые концепции:**
- **Continuous Integration** (CI)
- **Continuous Deployment** (CD)
- **Pipeline** и его этапы
- **Интеграция тестов** в процесс разработки
- **GitHub Actions** и **workflow**
- **Автоматический запуск тестов** при push/merge

---

## Тема 2: Docker (Virtualization vs Containerization)

**Вопросы для обсуждения:**
- Что такое **Docker** и зачем он нужен?
- В чём разница между **виртуализацией** и **контейнеризацией**?
- Как **запускать тесты в Docker**?
- Какие **преимущества** даёт использование контейнеров?

**Ключевые концепции:**
- **Контейнеризация** vs **виртуализация**
- **Dockerfile** и **Docker Compose**
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
Реализуй абстракции к тестам, сделанным в занятии 3, применяя **Page Object Pattern**.

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
Реализуй **Page Factory**, которая будет возвращать страницы в тестах.

**Что такое Page Factory:**
Page Factory — это паттерн, который создаёт и возвращает объекты страниц. В Playwright это позволяет централизованно управлять созданием страниц и упростить тесты.

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
Реализуй фикстуру теста, из которой можно будет вызвать Page Factory.

**Что нужно сделать:**
- Создай фикстуру, которая инициализирует PageFactory с переданной страницей
- Перепиши тесты так, чтобы они использовали фикстуру фабрики

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
- **Уровень абстракции** с бизнес-логикой (Page Objects)
- **Фабрику**, которая возвращает страницы
- **Фикстуру фабрики**, из которой можно получить любую страницу

Это создаст полноценную архитектуру автоматизации с правильным разделением ответственности. 