---
layout: default
title: Глоссарий - Урок 4
---

<a href="{{ site.baseurl }}/lessons/lesson-4" class="main-link-home">← Назад к уроку 4</a>

# Глоссарий - Урок 4

---

## CI/CD

**CI/CD (Continuous Integration/Continuous Deployment)** — методология разработки программного обеспечения, объединяющая практики непрерывной интеграции и непрерывного развертывания.

**Основные принципы:**
- Автоматизация процессов сборки, тестирования и развертывания
- Частые интеграции изменений в основную ветку
- Быстрая обратная связь о качестве кода
- Минимизация ручного труда

**Преимущества:**
- Раннее обнаружение ошибок
- Ускорение релизных циклов
- Повышение качества продукта
- Снижение рисков развертывания

---

## Continuous Integration (CI)

**Continuous Integration** — практика, при которой разработчики регулярно интегрируют свои изменения в общий репозиторий, после чего автоматически запускаются сборка и тесты.

**Основные этапы CI:**
1. **Commit** — отправка изменений в репозиторий
2. **Build** — автоматическая сборка приложения
3. **Test** — запуск автоматизированных тестов
4. **Report** — уведомление о результатах

**Пример CI pipeline:**
```yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run linting
      run: npm run lint
      
    - name: Run unit tests
      run: npm run test:unit
      
    - name: Run E2E tests
      run: npm run test:e2e
```

---

## Continuous Deployment (CD)

**Continuous Deployment** — расширение CI, где успешно протестированный код автоматически развертывается в production.

**Типы CD:**
- **Continuous Delivery** — автоматическая подготовка к релизу, но развертывание ручное
- **Continuous Deployment** — полностью автоматическое развертывание

**Этапы CD pipeline:**
1. **Build** — сборка артефактов
2. **Deploy to Staging** — развертывание в тестовую среду
3. **Integration Tests** — тесты в staging окружении
4. **Deploy to Production** — развертывание в продакшн
5. **Post-deployment Tests** — проверки после развертывания

---

## Pipeline

**Pipeline** — последовательность автоматизированных этапов, выполняемых для сборки, тестирования и развертывания приложения.

**Типичная структура pipeline:**
```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Source    │→ │    Build    │→ │    Test     │→ │   Deploy    │
│   Control   │  │             │  │  - Unit     │  │  - Staging  │
│             │  │ - Compile   │  │  - E2E      │  │  - Prod     │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
```

**Пример сложного pipeline:**
```yaml
stages:
  - source
  - build  
  - test-unit
  - test-integration
  - test-e2e
  - security-scan
  - deploy-staging
  - smoke-tests
  - deploy-production
  - post-deploy-tests
```

---

## GitHub Actions

**GitHub Actions** — встроенная в GitHub платформа для автоматизации рабочих процессов разработки (CI/CD).

**Основные концепции:**
- **Workflow** — автоматизированный процесс
- **Job** — группа шагов, выполняемых на одном runner
- **Step** — отдельная задача в job
- **Action** — переиспользуемый компонент

**Структура workflow:**
```yaml
name: Test and Deploy

# Триггеры запуска
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 2 * * 1' # Еженедельно по понедельникам в 2:00

# Переменные окружения
env:
  NODE_VERSION: '18'

jobs:
  test:
    name: Run Tests
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        browser: [chromium, firefox, webkit]
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ env.NODE_VERSION }}
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Install Playwright
      run: npx playwright install
      
    - name: Run tests
      run: npx playwright test --project=${{ matrix.browser }}
      
    - name: Upload test results
      uses: actions/upload-artifact@v3
      if: failure()
      with:
        name: playwright-report-${{ matrix.browser }}
        path: playwright-report/

  deploy:
    name: Deploy to Production
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - name: Deploy to server
      run: echo "Deploying to production..."
```

---

## Workflow

**Workflow** — автоматизированный процесс, состоящий из одного или нескольких jobs, запускаемый по определенным событиям.

**Типы событий-триггеров:**
- **push** — при отправке коммитов
- **pull_request** — при создании/обновлении PR
- **schedule** — по расписанию (cron)
- **workflow_dispatch** — ручной запуск
- **release** — при создании релиза

**Пример workflow для тестов:**
```yaml
name: Playwright Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
      
    - name: Run Playwright tests
      run: npx playwright test
      
    - uses: actions/upload-artifact@v3
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```

---

## Docker

**Docker** — платформа для контейнеризации приложений, позволяющая упаковывать приложение и его зависимости в легковесные, портативные контейнеры.

**Основные компоненты:**
- **Image** — шаблон для создания контейнеров
- **Container** — запущенный экземпляр образа
- **Dockerfile** — текстовый файл с инструкциями для создания образа
- **Registry** — хранилище образов (Docker Hub)

---

## Контейнер

**Контейнер** — изолированная среда выполнения приложения, которая включает код, среду выполнения, системные инструменты, библиотеки и настройки.

**Характеристики контейнера:**
- **Изоляция** — процессы изолированы от хост-системы
- **Портативность** — работает одинаково везде
- **Легковесность** — использует ресурсы эффективнее виртуальных машин
- **Скорость** — быстрый запуск и остановка

**Жизненный цикл контейнера:**
```bash
# Создание и запуск
docker run -d --name my-app nginx

# Просмотр запущенных контейнеров
docker ps

# Остановка
docker stop my-app

# Запуск существующего
docker start my-app

# Удаление
docker rm my-app
```

**Использование в тестах:**
```bash
# Запуск тестов в контейнере
docker run --rm -v $(pwd):/app -w /app playwright:latest npm test

# Docker Compose для тестовой среды
docker-compose up -d db
docker-compose run tests npm run test:e2e
```

---

## Окружение

**Окружение (Environment)** — совокупность программных и аппаратных средств, конфигураций и настроек, в которых выполняется приложение или тесты.

**Типы окружений:**
- **Development (Dev)** — среда разработки
- **Testing (Test)** — среда тестирования
- **Staging (Stage)** — предпродакшн среда
- **Production (Prod)** — боевая среда

**Переменные окружения:**
```bash
# Установка переменных
export NODE_ENV=production
export DATABASE_URL=postgresql://user:pass@localhost/db

# В тестах Playwright
BROWSER=firefox npm test
BASE_URL=https://staging.example.com npm test
```

**Конфигурация по окружениям:**
```javascript
// playwright.config.js
const config = {
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  
  projects: [
    {
      name: 'staging',
      use: {
        baseURL: 'https://staging.example.com'
      }
    },
    {
      name: 'production',
      use: {
        baseURL: 'https://example.com'
      }
    }
  ]
};
```

---

## Docker образ

**Docker образ (Image)** — неизменяемый шаблон, содержащий код приложения, среду выполнения, библиотеки, переменные окружения и конфигурационные файлы.

**Характеристики образа:**
- **Read-only** — неизменяемый после создания
- **Слоистая структура** — состоит из слоев
- **Переиспользование** — слои могут использоваться разными образами
- **Версионирование** — имеет теги для версий

**Команды для работы с образами:**
```bash
# Просмотр образов
docker images

# Создание образа из Dockerfile
docker build -t my-app:1.0 .

# Скачивание образа
docker pull nginx:alpine

# Удаление образа
docker rmi my-app:1.0

# Просмотр истории образа
docker history my-app:1.0
```

**Пример многослойного образа:**
```dockerfile
FROM node:18-alpine          # Базовый слой
WORKDIR /app                 # Слой с рабочей директорией
COPY package*.json ./        # Слой с package.json
RUN npm ci                   # Слой с зависимостями
COPY . .                     # Слой с исходным кодом
CMD ["npm", "start"]         # Метаданные команды
```

---

## Git push

**Git push** — команда для отправки локальных коммитов в удаленный репозиторий.

**Основной синтаксис:**
```bash
git push [remote] [branch]
```

**Примеры использования:**
```bash
# Отправка текущей ветки в origin
git push

# Отправка конкретной ветки
git push origin feature-branch

# Отправка всех веток
git push --all origin

# Отправка тегов
git push --tags

# Принудительная отправка (осторожно!)
git push --force origin feature-branch

# Отправка в новую удаленную ветку
git push -u origin new-feature
```

**В контексте CI/CD:**
- Push в main/master запускает production pipeline
- Push в develop запускает staging pipeline
- Push в feature ветки запускает тесты

**Настройка автоматического push:**
```bash
# Установка upstream для ветки
git push -u origin feature-branch

# Теперь можно просто делать
git push
```

---

## Git merge

**Git merge** — команда для объединения изменений из одной ветки в другую.

**Типы слияния:**

**Fast-forward merge:**
```bash
# Простое перемещение указателя
git checkout main
git merge feature-branch
```

**3-way merge:**
```bash
# Создается merge commit
git checkout main
git merge feature-branch -m "Merge feature-branch into main"
```

**Merge с конфликтами:**
```bash
git merge feature-branch
# Auto-merging file.txt
# CONFLICT (content): Merge conflict in file.txt
# Automatic merge failed; fix conflicts and then commit the result.

# Разрешение конфликтов
vim file.txt  # Редактируем файл
git add file.txt
git commit
```

**Merge strategies:**
```bash
# Recursive (по умолчанию)
git merge -s recursive feature-branch

# Ours - использовать нашу версию при конфликтах
git merge -s ours feature-branch

# Octopus - для слияния нескольких веток
git merge -s octopus branch1 branch2
```

**В GitHub/GitLab:**
- Merge Request/Pull Request
- Автоматическое слияние после код-ревью
- Защищенные ветки требуют проверок

**Пример Dockerfile:**
```dockerfile
# Базовый образ
FROM node:18-alpine

# Рабочая директория
WORKDIR /app

# Копирование package.json
COPY package*.json ./

# Установка зависимостей
RUN npm ci --only=production

# Копирование исходного кода
COPY . .

# Открытие порта
EXPOSE 3000

# Команда запуска
CMD ["npm", "start"]
```

---

## Контейнеризация vs Виртуализация

**Виртуализация** — создание виртуальных машин с полной операционной системой.

**Контейнеризация** — изоляция приложений на уровне операционной системы.

**Сравнение:**

| Аспект | Виртуализация | Контейнеризация |
|--------|---------------|-----------------|
| **Ресурсы** | Высокое потребление | Низкое потребление |
| **Скорость запуска** | Медленно (минуты) | Быстро (секунды) |
| **Изоляция** | Полная | Процессная |
| **Портативность** | Ограниченная | Высокая |
| **Размер** | ГБ | МБ |

```
Виртуализация:
┌─────────────────────────────────────┐
│            Hardware                 │
├─────────────────────────────────────┤
│            Host OS                  │
├─────────────────────────────────────┤
│           Hypervisor                │
├─────────────┬───────────────────────┤
│   Guest OS  │      Guest OS         │
│   ┌─────────┤      ┌───────────     │
│   │   App   │      │    App        │
│   └─────────┤      └───────────     │
└─────────────┴───────────────────────┘

Контейнеризация:
┌─────────────────────────────────────┐
│            Hardware                 │
├─────────────────────────────────────┤
│            Host OS                  │
├─────────────────────────────────────┤
│        Container Runtime            │
├─────────────┬───────────────────────┤
│ Container 1 │     Container 2       │
│ ┌─────────  │     ┌───────────      │
│ │   App     │     │    App          │
│ └─────────  │     └───────────      │
└─────────────┴───────────────────────┘
```

---

## Dockerfile

**Dockerfile** — текстовый файл с инструкциями для автоматической сборки Docker образа.

**Основные инструкции:**

```dockerfile
# Базовый образ
FROM node:18-alpine

# Метаданные
LABEL maintainer="developer@example.com"
LABEL version="1.0"

# Переменные окружения
ENV NODE_ENV=production
ENV PORT=3000

# Рабочая директория
WORKDIR /app

# Копирование файлов
COPY package*.json ./
COPY src/ ./src/

# Выполнение команд при сборке
RUN npm ci --only=production && \
    npm cache clean --force

# Открытие портов
EXPOSE $PORT

# Создание пользователя (безопасность)
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

USER nextjs

# Команда по умолчанию
CMD ["npm", "start"]

# Альтернативная точка входа
ENTRYPOINT ["docker-entrypoint.sh"]
```

**Лучшие практики:**
- Использовать multi-stage сборки
- Минимизировать количество слоев
- Использовать .dockerignore
- Не запускать от root пользователя

---

## Docker Compose

**Docker Compose** — инструмент для определения и запуска многоконтейнерных Docker приложений.

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  # Веб-приложение
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
    depends_on:
      - db
      - redis
    volumes:
      - .:/app
      - /app/node_modules

  # База данных
  db:
    image: postgres:14
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  # Redis для кеширования
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  # Тесты E2E
  e2e-tests:
    build:
      context: .
      dockerfile: Dockerfile.test
    depends_on:
      - web
    environment:
      - BASE_URL=http://web:3000
    volumes:
      - ./tests:/app/tests
      - ./test-results:/app/test-results

volumes:
  postgres_data:

networks:
  default:
    driver: bridge
```

**Команды Docker Compose:**
```bash
# Запуск всех сервисов
docker-compose up

# Запуск в фоне
docker-compose up -d

# Пересборка образов
docker-compose up --build

# Остановка
docker-compose down

# Просмотр логов
docker-compose logs web

# Выполнение команды в контейнере
docker-compose exec web bash
```

---

## Page Object Pattern (расширенно)

**Page Object Pattern** — паттерн проектирования для автоматизации тестирования, где каждая страница или компонент представлены отдельным классом.

**Расширенный пример:**
```javascript
// base-page.js - базовый класс для всех страниц
class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async waitForLoadState() {
    await this.page.waitForLoadState('networkidle');
  }

  async takeScreenshot(name) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }
}

// login-page.js
class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    
    // Локаторы
    this.usernameInput = page.locator('[data-testid="username"]');
    this.passwordInput = page.locator('[data-testid="password"]');
    this.loginButton = page.locator('[data-testid="login-button"]');
    this.errorMessage = page.locator('[data-testid="error-message"]');
    this.forgotPasswordLink = page.locator('text=Forgot Password?');
  }

  // Действия
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.waitForLoadState();
  }

  async loginAsAdmin() {
    await this.login('admin', 'admin123');
    return new DashboardPage(this.page);
  }

  async loginAsUser() {
    await this.login('user', 'user123');
    return new UserDashboardPage(this.page);
  }

  // Проверки
  async isErrorDisplayed() {
    return await this.errorMessage.isVisible();
  }

  async getErrorText() {
    return await this.errorMessage.textContent();
  }

  // Навигация
  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
    return new ForgotPasswordPage(this.page);
  }
}

// Использование в тестах
test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto('/login');
  
  const dashboardPage = await loginPage.loginAsAdmin();
  await expect(dashboardPage.welcomeMessage).toBeVisible();
});
```

---

## Page Factory Pattern

**Page Factory Pattern** — паттерн, предоставляющий централизованный способ создания и управления объектами страниц.

**Реализация Page Factory:**
```javascript
// page-factory.js
class PageFactory {
  constructor(page) {
    this.page = page;
    this._pages = new Map();
  }

  // Создание страниц с кешированием
  getLoginPage() {
    if (!this._pages.has('login')) {
      this._pages.set('login', new LoginPage(this.page));
    }
    return this._pages.get('login');
  }

  getDashboardPage() {
    if (!this._pages.has('dashboard')) {
      this._pages.set('dashboard', new DashboardPage(this.page));
    }
    return this._pages.get('dashboard');
  }

  getProductsPage() {
    if (!this._pages.has('products')) {
      this._pages.set('products', new ProductsPage(this.page));
    }
    return this._pages.get('products');
  }

  getCartPage() {
    if (!this._pages.has('cart')) {
      this._pages.set('cart', new CartPage(this.page));
    }
    return this._pages.get('cart');
  }

  // Универсальный метод для получения любой страницы
  getPage(pageName) {
    const pageClasses = {
      'login': LoginPage,
      'dashboard': DashboardPage,
      'products': ProductsPage,
      'cart': CartPage
    };

    if (!this._pages.has(pageName)) {
      const PageClass = pageClasses[pageName];
      if (!PageClass) {
        throw new Error(`Page '${pageName}' not found`);
      }
      this._pages.set(pageName, new PageClass(this.page));
    }
    
    return this._pages.get(pageName);
  }

  // Очистка кеша страниц
  clearCache() {
    this._pages.clear();
  }
}

// Использование в тестах
test('e2e shopping flow', async ({ page }) => {
  const factory = new PageFactory(page);
  
  // Логин
  const loginPage = factory.getLoginPage();
  await loginPage.goto('/login');
  await loginPage.loginAsUser();
  
  // Каталог товаров
  const productsPage = factory.getProductsPage();
  await productsPage.addToCart('laptop');
  await productsPage.addToCart('mouse');
  
  // Корзина
  const cartPage = factory.getCartPage();
  await cartPage.goto();
  await expect(cartPage.itemsCount).toHaveText('2 items');
  
  await cartPage.checkout();
});
```

---

## Фикстуры (расширенно)

**Фикстуры** — механизм для управления состоянием и ресурсами тестов.

**Расширенные примеры фикстур:**

```javascript
// fixtures.js
const { test: base } = require('@playwright/test');

// Фикстура для авторизованного пользователя
const test = base.extend({
  // Test fixture - для каждого теста
  authenticatedUser: async ({ page }, use) => {
    const factory = new PageFactory(page);
    const loginPage = factory.getLoginPage();
    
    await loginPage.goto('/login');
    await loginPage.loginAsUser();
    
    await use(factory);
    
    // Teardown - выход из системы
    await page.goto('/logout');
  },

  // Worker fixture - один раз для группы тестов
  testDatabase: [async ({}, use) => {
    // Setup database
    const db = await createTestDatabase();
    await db.migrate();
    await db.seed();
    
    await use(db);
    
    // Cleanup
    await db.cleanup();
  }, { scope: 'worker' }],

  // Auto fixture - автоматически для всех тестов
  testReporter: [async ({}, use, testInfo) => {
    const reporter = new CustomReporter();
    reporter.startTest(testInfo.title);
    
    await use(reporter);
    
    reporter.endTest();
  }, { auto: true }],

  // Фикстура с параметрами
  userWithRole: async ({ page }, use) => {
    const createUserWithRole = async (role) => {
      const factory = new PageFactory(page);
      const loginPage = factory.getLoginPage();
      
      await loginPage.goto('/login');
      
      if (role === 'admin') {
        await loginPage.loginAsAdmin();
      } else {
        await loginPage.loginAsUser();
      }
      
      return factory;
    };
    
    await use(createUserWithRole);
  }
});

// Использование фикстур
test('user can view products', async ({ authenticatedUser }) => {
  const productsPage = authenticatedUser.getProductsPage();
  await productsPage.goto();
  
  await expect(productsPage.productsList).toBeVisible();
});

test('admin can manage users', async ({ userWithRole }) => {
  const factory = await userWithRole('admin');
  const adminPage = factory.getPage('admin');
  
  await adminPage.goto();
  await expect(adminPage.userManagementSection).toBeVisible();
});

// Композиция фикстур
test('database operations', async ({ testDatabase, authenticatedUser }) => {
  // Работа с БД
  await testDatabase.createTestUser('testuser@example.com');
  
  // Работа через UI
  const userPage = authenticatedUser.getPage('users');
  await userPage.searchUser('testuser@example.com');
  
  await expect(userPage.userCard).toBeVisible();
});
```

---

<a href="{{ site.baseurl }}/glossary" class="main-link-home">← К общему глоссарию</a>