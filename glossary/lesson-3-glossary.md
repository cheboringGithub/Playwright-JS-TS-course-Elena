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

**Page Object Pattern** — паттерн проектирования, где каждая страница представлена отдельным классом с ее элементами и действиями.

**Зачем нужен:**
- Убирает дублирование селекторов в тестах
- Делает тесты более читаемыми и поддерживаемыми
- Централизует логику работы со страницей в одном месте
- Упрощает изменения — если селектор изменился, правим только в одном классе

**Основные принципы:**
- Один класс = одна страница
- Селекторы хранятся внутри класса
- Методы для действий пользователя (клики, заполнение форм)
- Методы возвращают другие Page Objects при переходах между страницами

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

**Functional Helpers** — утилитарные функции для часто используемых операций в тестах.

**Зачем нужны:**
- Убирают дублирование кода между тестами
- Централизуют общую логику (работу с API, генерацию данных)
- Делают тесты более читаемыми и поддерживаемыми
- Создают переиспользуемые компоненты

**Основные типы:**
- **API Helpers** — создание пользователей, работа с данными через API
- **Data Helpers** — генерация тестовых данных (email, пароли, формы)
- **Wait Helpers** — специальные ожидания и таймауты
- **Database Helpers** — очистка и подготовка БД
- **File Helpers** — работа с файлами и загрузками

**Применение:** Вспомогательные функции, которые не относятся к конкретной странице, но нужны в разных тестах

---

## Уровни абстракции

**Уровни абстракции** — различные слои в фреймворке от технических деталей до бизнес-логики.

**Зачем нужны уровни:**
- Каждый уровень решает свою задачу и скрывает сложность нижележащих
- Позволяют писать тесты на подходящем уровне сложности
- Упрощают поддержку — изменения на одном уровне не затрагивают другие

**Основные уровни (снизу вверх):**
1. **Драйвер** — прямая работа с браузером (`driver.click()`)
2. **Page Objects** — методы страниц (`loginPage.enterUsername()`)
3. **Бизнес-операции** — готовые флоу (`userFlow.loginAsAdmin()`)
4. **Тестовые сценарии** — комплексные сценарии (`scenarios.completeRegistration()`)

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

**Зачем нужен:**
- Интеграция с корпоративными системами (Slack, Jira, базы данных)
- Специфический формат отчетов для команды
- Дополнительная обработка результатов тестов
- Кастомная аналитика и метрики

**Основные методы репортера:**
- `onBegin()` — старт выполнения тестов
- `onTestEnd()` — завершение каждого теста  
- `onEnd()` — завершение всех тестов

**Применение:** Создание отчетов в нужном формате или отправка уведомлений

---

## Логирование

**Логирование** — запись информации о выполнении тестов для анализа и отладки.

**Зачем нужно:**
- Отладка падающих тестов — понять где и почему тест упал
- Мониторинг выполнения — отслеживать прогресс долгих тестов
- Анализ производительности — находить медленные операции
- Аудит — запись всех действий для расследования

**Основные уровни:**
- **ERROR** — критические ошибки, которые ломают тест
- **WARN** — предупреждения о потенциальных проблемах  
- **INFO** — общая информация о ходе выполнения
- **DEBUG** — детальная техническая информация

**Применение:** Добавление информативных сообщений в ключевых точках тестов

---

## Фикстуры

**Фикстуры** — механизм подготовки и очистки данных/состояния для тестов.

**Зачем нужны:**
- Убирают дублирование подготовительного кода в тестах
- Обеспечивают изоляцию — каждый тест получает "чистое" состояние
- Автоматизируют setup и teardown
- Позволяют переиспользовать подготовку данных между тестами

**Типы фикстур:**
- **Test Fixtures** — выполняются для каждого теста (создание пользователя, подготовка данных)
- **Worker Fixtures** — выполняются один раз для группы тестов (подключение к БД, создание тестовой среды)
- **Auto Fixtures** — выполняются автоматически без явного указания в тесте (логирование, мониторинг)

**Принцип работы:** Setup → Использование в тесте → Teardown

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