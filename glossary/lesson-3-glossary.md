---
layout: default
title: Глоссарий - Урок 3
---

<a href="{{ site.baseurl }}/lessons/lesson-3" class="main-link-home">← Назад к уроку 3</a>

# Глоссарий - Урок 3

---

## Фреймворк для автоматизированного тестирования

**Фреймворк для автоматизированного тестирования** — структурированная платформа, предоставляющая инструменты, библиотеки и соглашения для создания, выполнения и управления автоматизированными тестами.

**Отличия от фреймворков разработки:**
- **Цель:** Тестирование vs Разработка приложений
- **Фокус:** Валидация и верификация vs Создание функциональности  
- **Инструменты:** Assertions, test runners, reporting vs UI components, routing

**Основные компоненты:**
- Test runner (запуск тестов)
- Assertion library (проверки)
- Reporting system (отчеты)
- Test data management (управление тестовыми данными)
- Browser automation (автоматизация браузера)

---

## Инструменты для автоматизации тестирования

**Популярные инструменты:**

**Selenium** — самый популярный инструмент для веб-автоматизации
- Поддержка множества языков
- WebDriver API
- Большое сообщество

**Playwright** — современный инструмент от Microsoft
- Быстрое выполнение
- Встроенные ожидания
- Поддержка всех браузеров

**Cypress** — инструмент для E2E тестирования
- Отладка в реальном времени
- Автоматические скриншоты
- Time-travel debugging

**Puppeteer** — управление Chrome/Chromium
- Разработан Google
- Быстрый для Chrome
- Хорошая интеграция с Node.js

---

## Критерии выбора инструмента

**Основные критерии:**

1. **Поддержка браузеров** — какие браузеры поддерживает
2. **Язык программирования** — на каком языке пишутся тесты
3. **Скорость выполнения** — как быстро работают тесты
4. **Простота использования** — сложность изучения и настройки
5. **Сообщество и поддержка** — активность разработки и помощи
6. **Интеграция** — совместимость с CI/CD и другими инструментами
7. **Отчетность** — качество генерируемых отчетов
8. **Стабильность** — надежность и частота обновлений

---

## Многослойная архитектура

**Многослойная архитектура** — подход к организации фреймворка, где функциональность разделена на несколько уровней абстракции.

**Типичные слои:**

1. **Test Layer** — слой тестов
   - Тест-кейсы и тест-сьюты
   - Тестовые данные и сценарии

2. **Business Logic Layer** — слой бизнес-логики
   - Page Objects
   - Functional Helpers
   - Workflow methods

3. **Technical Layer** — технический слой
   - Драйверы браузеров
   - Utilities и helpers
   - Configuration

4. **Infrastructure Layer** — инфраструктурный слой
   - Reporting
   - Logging
   - CI/CD integration

```
┌─────────────────────────┐
│     Test Layer          │ ← Тест-кейсы
├─────────────────────────┤
│  Business Logic Layer   │ ← Page Objects, Workflows
├─────────────────────────┤
│   Technical Layer       │ ← Драйверы, Utils
├─────────────────────────┤
│ Infrastructure Layer    │ ← Логи, Отчеты, CI/CD
└─────────────────────────┘
```

---

## Page Object Pattern

**Page Object Pattern** — паттерн проектирования, где каждая страница веб-приложения представлена отдельным классом, инкапсулирующим элементы и действия этой страницы.

**Принципы:**
- Один класс = одна страница
- Инкапсуляция локаторов
- Методы для действий пользователя
- Возврат других Page Objects при навигации

**Пример:**
```javascript
class LoginPage {
  constructor(page) {
    this.page = page;
    // Локаторы
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-btn');
    this.errorMessage = page.locator('.error');
  }

  // Методы для действий
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    return new DashboardPage(this.page); // Возврат следующей страницы
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}

// Использование в тесте
test('login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/login');
  
  const dashboardPage = await loginPage.login('user', 'pass');
  await expect(dashboardPage.welcomeMessage).toBeVisible();
});
```

---

## Page Elements

**Page Elements** — паттерн, расширяющий Page Object, где отдельные компоненты страницы выделяются в отдельные классы.

**Пример:**
```javascript
// Элемент формы
class LoginForm {
  constructor(page) {
    this.page = page;
    this.container = page.locator('.login-form');
    this.usernameInput = this.container.locator('#username');
    this.passwordInput = this.container.locator('#password');
    this.submitButton = this.container.locator('button[type="submit"]');
  }

  async submit(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

// Страница использует элементы
class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginForm = new LoginForm(page);
    this.header = new Header(page);
  }

  async loginAs(username, password) {
    await this.loginForm.submit(username, password);
  }
}
```

---

## Functional Helpers

**Functional Helpers** — утилитарные функции, которые выполняют часто используемые операции в тестах.

**Типы helpers:**
- **API Helpers** — работа с API
- **Database Helpers** — работа с БД
- **File Helpers** — работа с файлами
- **Wait Helpers** — ожидания
- **Data Helpers** — генерация тестовых данных

**Пример:**
```javascript
// API Helper
class ApiHelper {
  static async createUser(userData) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
    return response.json();
  }
}

// Wait Helper
class WaitHelper {
  static async waitForElementToDisappear(page, selector, timeout = 5000) {
    await page.waitForSelector(selector, { 
      state: 'detached', 
      timeout 
    });
  }
}

// Data Helper
class DataHelper {
  static generateRandomEmail() {
    return `test${Date.now()}@example.com`;
  }
  
  static generateUserData() {
    return {
      email: this.generateRandomEmail(),
      password: 'TestPass123!',
      firstName: 'Test',
      lastName: 'User'
    };
  }
}

// Использование в тестах
test('user registration', async ({ page }) => {
  const userData = DataHelper.generateUserData();
  await ApiHelper.createUser(userData);
  
  const loginPage = new LoginPage(page);
  await loginPage.login(userData.email, userData.password);
});
```

---

## Уровни абстракции

**Уровни абстракции** — различные слои абстракции в фреймворке, от низкоуровневых технических деталей до высокоуровневой бизнес-логики.

**Уровни (снизу вверх):**

1. **Низкий уровень** — работа с драйверами
```javascript
// Прямая работа с WebDriver
driver.findElement(By.id('username')).sendKeys('user');
```

2. **Средний уровень** — Page Objects
```javascript
// Методы страниц
loginPage.enterUsername('user');
```

3. **Высокий уровень** — бизнес-операции
```javascript
// Бизнес-логика
userWorkflow.loginAsStandardUser();
```

4. **Очень высокий уровень** — тестовые сценарии
```javascript
// Готовые сценарии
testScenarios.completeUserRegistrationFlow();
```

---

## Репортеры

**Репортеры** — компоненты фреймворка, отвечающие за сбор и представление результатов выполнения тестов.

**Основные функции:**
- Сбор результатов тестов
- Форматирование отчетов
- Сохранение артефактов (скриншоты, видео)
- Интеграция с внешними системами

**Встроенные репортеры Playwright:**
```javascript
// playwright.config.js
export default {
  reporter: [
    ['list'],           // Простой список в консоли
    ['json'],           // JSON отчет
    ['html'],           // HTML отчет
    ['junit'],          // JUnit XML
    ['allure-playwright'] // Allure отчет
  ]
};
```

---

## Кастомный репортер

**Кастомный репортер** — собственная реализация репортера для специфических требований проекта.

**Пример кастомного репортера:**
```javascript
class CustomReporter {
  onBegin(config, suite) {
    console.log(`Starting tests: ${suite.allTests().length} tests`);
  }

  onTestEnd(test, result) {
    const status = result.status;
    const duration = result.duration;
    
    console.log(`${test.title}: ${status} (${duration}ms)`);
    
    // Отправка в Slack при падении
    if (status === 'failed') {
      this.sendToSlack(test, result);
    }
  }

  onEnd(result) {
    console.log(`Tests finished: ${result.status}`);
    
    // Сохранение в базу данных
    this.saveToDatabase(result);
  }

  async sendToSlack(test, result) {
    // Логика отправки в Slack
  }

  async saveToDatabase(result) {
    // Логика сохранения в БД
  }
}

// Использование
export default {
  reporter: [['./custom-reporter.js']]
};
```

---

## Логирование

**Логирование** — процесс записи информации о выполнении тестов для последующего анализа и отладки.

**Уровни логирования:**
- **ERROR** — ошибки
- **WARN** — предупреждения  
- **INFO** — информационные сообщения
- **DEBUG** — детальная отладочная информация

**Пример:**
```javascript
class Logger {
  static info(message) {
    console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
  }
  
  static error(message, error) {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, error);
  }
  
  static debug(message) {
    if (process.env.DEBUG) {
      console.log(`[DEBUG] ${new Date().toISOString()}: ${message}`);
    }
  }
}

// Использование в тестах
test('example test', async ({ page }) => {
  Logger.info('Starting test execution');
  
  try {
    await page.goto('/login');
    Logger.debug('Navigated to login page');
    
    // ... тест
  } catch (error) {
    Logger.error('Test failed', error);
    throw error;
  }
});
```

---

## Фикстуры

**Фикстуры** — механизм подготовки и очистки данных/состояния для тестов.

**Типы фикстур в Playwright:**

**Test Fixtures** — выполняются для каждого теста
```javascript
const { test: base } = require('@playwright/test');

const test = base.extend({
  loggedInUser: async ({ page }, use) => {
    // Setup
    await page.goto('/login');
    await page.fill('#username', 'testuser');
    await page.fill('#password', 'password');
    await page.click('#login');
    
    // Предоставить фикстуру тесту
    await use(page);
    
    // Teardown
    await page.click('#logout');
  }
});

test('dashboard test', async ({ loggedInUser }) => {
  // Тест выполняется с залогиненным пользователем
  await expect(loggedInUser.locator('.dashboard')).toBeVisible();
});
```

**Worker Fixtures** — выполняются один раз для группы тестов
```javascript
const test = base.extend({
  database: [async ({}, use) => {
    // Setup один раз для всех тестов
    const db = await createTestDatabase();
    await use(db);
    
    // Cleanup после всех тестов
    await db.cleanup();
  }, { scope: 'worker' }]
});
```

**Auto Fixtures** — выполняются автоматически
```javascript
const test = base.extend({
  logger: [async ({}, use) => {
    const logger = new Logger();
    logger.start();
    
    await use(logger);
    
    logger.stop();
  }, { auto: true }] // автоматически для каждого теста
});
```

---

## Setup и Teardown

**Setup** — подготовка тестового окружения перед выполнением теста.
**Teardown** — очистка после выполнения теста.

**Глобальные setup/teardown:**
```javascript
// global-setup.js
async function globalSetup() {
  console.log('Starting test server...');
  // Запуск тестового сервера
  await startServer();
}

module.exports = globalSetup;

// playwright.config.js
export default {
  globalSetup: require.resolve('./global-setup'),
  globalTeardown: require.resolve('./global-teardown')
};
```

**Setup/Teardown в тестах:**
```javascript
test.beforeAll(async () => {
  // Выполняется один раз перед всеми тестами
  await setupDatabase();
});

test.beforeEach(async ({ page }) => {
  // Выполняется перед каждым тестом
  await page.goto('/');
});

test.afterEach(async ({ page }) => {
  // Выполняется после каждого теста
  await page.screenshot({ path: 'test-result.png' });
});

test.afterAll(async () => {
  // Выполняется один раз после всех тестов
  await cleanupDatabase();
});
```

---

## URL

**URL (Uniform Resource Locator)** — универсальный указатель ресурса, стандартизированный адрес для идентификации веб-ресурсов.

**Структура URL:**
```
https://example.com:443/path/to/page?param1=value1&param2=value2#section
│─────┤ │─────────┤│─┤ │─────────┤ │─────────────────────────────┤ │─────┤
│     │ │         ││ │ │         │ │                             │ │     │
│     │ │         ││ │ │         │ │        Query String         │ │     │
│     │ │         ││ │ │         │ └─────────────────────────────┘ │     │
│     │ │         ││ │ │         │                                │     │
│     │ │         ││ │ │         └── Path                         │     │
│     │ │         ││ │ └────────────── Port                       │     │
│     │ │         │└─┘                                           │     │
│     │ │         └─── Host/Domain                                │     │
│     │ └─────────────── Scheme/Protocol                         │     │
│     └──────────────────────────────────────────────────────────┘     │
                                                                      │     │
                                                                      └─── Fragment
```

**Компоненты:**
- **Protocol** — схема (http, https, ftp)
- **Host** — доменное имя или IP-адрес
- **Port** — порт (по умолчанию 80 для HTTP, 443 для HTTPS)
- **Path** — путь к ресурсу
- **Query** — параметры запроса
- **Fragment** — якорь на странице

**Примеры в автоматизации:**
```javascript
// Переход по URL
await page.goto('https://example.com/login');

// Проверка текущего URL
await expect(page).toHaveURL('https://example.com/dashboard');

// Проверка части URL
await expect(page).toHaveURL(/.*dashboard.*/);
```

---

## Псевдокод

**Псевдокод** — упрощенная запись алгоритма или логики программы на естественном языке, смешанном с элементами программирования.

**Характеристики псевдокода:**
- Не привязан к конкретному языку программирования
- Читается как обычный текст
- Показывает логику без синтаксических деталей
- Используется для планирования и документирования

**Пример псевдокода для теста:**
```
НАЧАЛО тест "Логин пользователя"
  1. Открыть страницу логина
  2. Ввести имя пользователя "testuser"
  3. Ввести пароль "password123"
  4. Нажать кнопку "Войти"
  5. ЕСЛИ появилась ошибка ТО
       ПРОВАЛИТЬ тест с сообщением об ошибке
     ИНАЧЕ
       ПРОВЕРИТЬ, что открылась главная страница
     КОНЕЦ ЕСЛИ
КОНЕЦ теста
```

**Соответствующий код Playwright:**
```javascript
test('Логин пользователя', async ({ page }) => {
  // 1. Открыть страницу логина
  await page.goto('/login');
  
  // 2-3. Ввести данные
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  
  // 4. Нажать кнопку
  await page.click('#login-button');
  
  // 5. Проверка
  const errorMessage = page.locator('.error-message');
  if (await errorMessage.isVisible()) {
    throw new Error('Login failed: ' + await errorMessage.textContent());
  } else {
    await expect(page).toHaveURL('/dashboard');
  }
});
```

---

## TypeScript

**TypeScript** — типизированный язык программирования от Microsoft, надстройка над JavaScript, добавляющая статическую типизацию.

**Основные возможности:**
- Статическая типизация
- Интерфейсы и классы
- Современный синтаксис ES6+
- Компиляция в JavaScript
- Поддержка IDE с автодополнением

**Преимущества в автоматизации тестов:**
- Лучшая поддержка IDE
- Раннее обнаружение ошибок
- Улучшенная читаемость кода
- Автодополнение методов и свойств

**Пример теста на TypeScript:**
```typescript
import { test, expect, Page } from '@playwright/test';

interface LoginCredentials {
  username: string;
  password: string;
}

class LoginPage {
  constructor(private page: Page) {}

  async login(credentials: LoginCredentials): Promise<void> {
    await this.page.fill('#username', credentials.username);
    await this.page.fill('#password', credentials.password);
    await this.page.click('#login-button');
  }

  async getErrorMessage(): Promise<string | null> {
    const errorElement = this.page.locator('.error-message');
    return await errorElement.isVisible() 
      ? await errorElement.textContent() 
      : null;
  }
}

test('successful login', async ({ page }: { page: Page }) => {
  const loginPage = new LoginPage(page);
  const credentials: LoginCredentials = {
    username: 'testuser',
    password: 'password123'
  };

  await page.goto('/login');
  await loginPage.login(credentials);
  
  await expect(page).toHaveURL('/dashboard');
});
```

---

## Селектор

**Селектор** — строка, которая идентифицирует элемент(ы) на веб-странице для взаимодействия или проверки.

**Типы селекторов:**

**CSS селекторы:**
```javascript
// По id
page.locator('#username')

// По классу  
page.locator('.button-primary')

// По атрибуту
page.locator('[data-testid="submit-button"]')

// Комбинированные
page.locator('form .input-field[type="email"]')
```

**XPath селекторы:**
```javascript
// Абсолютный путь
page.locator('//html/body/div/form/input')

// Относительный путь
page.locator('//input[@type="password"]')

// По тексту
page.locator('//button[text()="Submit"]')

// По содержимому
page.locator('//div[contains(@class, "error")]')
```

**Playwright селекторы:**
```javascript
// По тексту
page.locator('text=Submit')

// По роли
page.locator('role=button[name="Submit"]')

// По data-testid
page.locator('[data-testid=submit-btn]')

// Комбинированные
page.locator('form >> text=Submit')
```

**Лучшие практики:**
- Использовать data-testid для стабильности
- Избегать зависимости от стилей (классы CSS)
- Предпочитать семантические селекторы (role, text)
- Делать селекторы специфичными, но не хрупкими

---

## Assertions

**Assertions** — проверки, которые определяют, прошел ли тест или провалился.

**Типы assertions в Playwright:**

**Элементы:**
```javascript
// Видимость
await expect(page.locator('.header')).toBeVisible();
await expect(page.locator('.popup')).toBeHidden();

// Текст
await expect(page.locator('h1')).toHaveText('Welcome');
await expect(page.locator('.error')).toContainText('Invalid');

// Атрибуты
await expect(page.locator('input')).toHaveAttribute('type', 'email');
await expect(page.locator('button')).toBeDisabled();

// Состояние
await expect(page.locator('input')).toBeFocused();
await expect(page.locator('checkbox')).toBeChecked();
```

**Страница:**
```javascript
// URL
await expect(page).toHaveURL('https://example.com/dashboard');
await expect(page).toHaveURL(/.*dashboard.*/);

// Заголовок
await expect(page).toHaveTitle('Dashboard - MyApp');

// Скриншот
await expect(page).toHaveScreenshot('homepage.png');
```

**Кастомные matchers:**
```javascript
// Добавление собственного matcher
expect.extend({
  async toHaveLoadingSpinner(page) {
    const spinner = page.locator('.loading-spinner');
    const isVisible = await spinner.isVisible();
    
    return {
      pass: isVisible,
      message: () => `Expected page ${isVisible ? 'not ' : ''}to have loading spinner`
    };
  }
});

// Использование
await expect(page).toHaveLoadingSpinner();
```

**Soft assertions (мягкие проверки):**
```javascript
// Тест продолжится даже при падении проверки
await expect.soft(page.locator('.title')).toHaveText('Expected Title');
await expect.soft(page.locator('.subtitle')).toBeVisible();

// Все мягкие проверки будут показаны в отчете
```

---

<a href="{{ site.baseurl }}/glossary" class="main-link-home">← К общему глоссарию</a>