---
layout: default
title: Занятие 3
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 3

📖 **[Глоссарий к уроку 3]({{ site.baseurl }}/glossary/lesson-3-glossary)** - все термины урока с подробными определениями и примерами

---

## Тема 1: Framework Architecture (Multilayered)

- [**Фреймворк тестирования**]({{ site.baseurl }}/glossary/lesson-3-glossary#фреймворк-для-автоматизированного-тестирования){:data-glossary-term="Фреймворк тестирования" data-glossary-definition="Платформа для создания автоматизированных тестов"} vs фреймворк разработки — отличия
- [**Инструменты автоматизации**]({{ site.baseurl }}/glossary/lesson-3-glossary#инструменты-для-автоматизации-тестирования){:data-glossary-term="Инструменты тестирования" data-glossary-definition="Playwright, Selenium, Cypress и др."} — обзор рынка и особенности
- [**Критерии выбора**]({{ site.baseurl }}/glossary/lesson-3-glossary#критерии-выбора-инструмента){:data-glossary-term="Критерии выбора" data-glossary-definition="Параметры для выбора фреймворка тестирования"} инструмента тестирования
- [**Многослойная архитектура**]({{ site.baseurl }}/glossary/lesson-3-glossary#многослойная-архитектура) — структура и слои фреймворка
- [**Паттерны проектирования**]({{ site.baseurl }}/glossary/lesson-3-glossary#уровни-абстракции): [**Page Object**]({{ site.baseurl }}/glossary/lesson-3-glossary#page-object-pattern){:data-glossary-term="Page Object Pattern" data-glossary-definition="Класс для страницы с ее элементами и методами"}, [**Page Elements**]({{ site.baseurl }}/glossary/lesson-3-glossary#page-elements), [**Functional Helpers**]({{ site.baseurl }}/glossary/lesson-3-glossary#functional-helpers)

---

## Тема 2: Loggers, Reporters

- [**Репортеры**]({{ site.baseurl }}/glossary/lesson-3-glossary#репортеры){:data-glossary-term="Репортеры" data-glossary-definition="Модули для создания отчетов о тестах"} — назначение и типы
- [**Встроенные репортеры Playwright**]({{ site.baseurl }}/glossary/lesson-3-glossary#репортеры) — подключение и настройка
- [**Кастомные репортеры**]({{ site.baseurl }}/glossary/lesson-3-glossary#кастомный-репортер) — создание и применение
- [**Логирование**]({{ site.baseurl }}/glossary/lesson-3-glossary#логирование) — отладка и мониторинг тестов

**Рекомендуемые материалы:**
- [Документация Playwright по репортерам](https://playwright.dev/docs/test-reporters)

---

## Тема 3: Fixtures

- [**Фикстуры**]({{ site.baseurl }}/glossary/lesson-3-glossary#фикстуры){:data-glossary-term="Фикстуры" data-glossary-definition="Подготовка данных для тестов (setup/teardown)"} — подготовка данных и решаемые проблемы
- [**Setup/Teardown**]({{ site.baseurl }}/glossary/lesson-3-glossary#setup-и-teardown) — жизненный цикл тестовых данных
- **Типы фикстур**: [**test fixtures**]({{ site.baseurl }}/glossary/lesson-3-glossary#фикстуры), **worker fixtures**, **auto fixtures** — различия и применение
- **Переиспользование кода** и **изоляция данных** между тестами

**Рекомендуемые материалы:**
- [Документация Playwright по фикстурам](https://playwright.dev/docs/test-fixtures) 

---

## Практическая часть: автоматизация тестов

**Перед началом:**
- Создай ветку `task-3`.
- Выполни все задания этого блока в этой ветке.
- После выполнения создай merge request в `main` и назначь меня ревьюером.

> **Примечание:** Все задания выполняй без создания абстракций и Page Object'ов — это будет рассмотрено в следующих занятиях.

### Тест-кейс 1: Позитивный логин
**Проверка успешной авторизации**
1. Открыть [тестовую страницу](https://www.saucedemo.com/)
2. Ввести данные: `standard_user` / `secret_sauce`
3. Нажать `Login`
4. Проверить переход на страницу **Products**

### Тест-кейс 2: Негативный логин
**Проверка обработки ошибок авторизации**
1. Открыть [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Ввести неверные данные: `wrong_user` / `wrong_pass`
3. Нажать `Login`
4. Проверить появление сообщения об ошибке

### Тест-кейс 3: Добавление в корзину
**Проверка функции добавления товаров**
1. Авторизация (`standard_user` / `secret_sauce`)
2. Выбрать товар → `Add to cart`
3. Перейти в корзину (иконка в углу)
4. Проверить наличие товара в корзине

### Тест-кейс 4: Оформление заказа
**Проверка полного цикла покупки**
1. Авторизация + добавление товара (шаги выше)
2. Корзина → `Checkout`
3. Заполнить форму контактов (любые валидные данные)
4. `Continue` → `Finish`
5. Проверить сообщение "THANK YOU FOR YOUR ORDER"

### Тест-кейс 5: Сортировка товаров
**Проверка фильтрации по цене**
1. Авторизация (см. выше)
2. Выбрать сортировку `Price (low to high)`
3. Проверить порядок цен по возрастанию

---

**API [Playwright]({{ site.baseurl }}/glossary/lesson-2-glossary#playwright):**
- [`page.goto`](https://playwright.dev/docs/api/class-page#page-goto) — навигация
- [`page.fill`](https://playwright.dev/docs/api/class-page#page-fill) — ввод текста  
- [`page.click`](https://playwright.dev/docs/api/class-page#page-click) — клики
- [`page.locator`](https://playwright.dev/docs/api/class-page#page-locator) — [**поиск элементов**]({{ site.baseurl }}/glossary/lesson-3-glossary#селектор){:data-glossary-term="Локаторы" data-glossary-definition="Способы поиска элементов на странице: CSS, XPath, text"}
- [`expect`](https://playwright.dev/docs/api/class-expect) — [**проверки**]({{ site.baseurl }}/glossary/lesson-3-glossary#assertions){:data-glossary-term="Assertions" data-glossary-definition="Проверки ожидаемых результатов в тестах"}

**Пример [псевдокода]({{ site.baseurl }}/glossary/lesson-3-glossary#псевдокод){:data-glossary-term="Псевдокод" data-glossary-definition="Упрощенный код для демонстрации логики"} для Playwright ([TypeScript]({{ site.baseurl }}/glossary/lesson-3-glossary#typescript){:data-glossary-term="TypeScript" data-glossary-definition="Типизированный JavaScript от Microsoft"}):**
```ts
import { test, expect } from '@playwright/test';

test('Позитивный сценарий логина', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('твой селектор', 'standard_user');
  await page.fill('твой селектор', 'secret_sauce');
  await page.click('твой селектор');
  await expect(page.locator('твой селектор')).toHaveText('Products');
});

test('Негативный сценарий логина', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('твой селектор', 'wrong_user');
  await page.fill('твой селектор', 'wrong_pass');
  await page.click('твой селектор');
  await expect(page.locator('твой селектор')).toBeVisible();
});

test('Добавление товара в корзину', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  // логин
  await page.fill('твой селектор', 'standard_user');
  await page.fill('твой селектор', 'secret_sauce');
  await page.click('твой селектор');
  // добавить товар
  await page.click('твой селектор');
  // перейти в корзину
  await page.click('твой селектор');
  await expect(page.locator('твой селектор')).toBeVisible();
});

test('Оформление заказа (checkout flow)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  // логин, добавить товар, перейти в корзину
  // ...
  // заполнить форму
  await page.fill('твой селектор', 'FirstName');
  await page.fill('твой селектор', 'LastName');
  await page.fill('твой селектор', 'ZipCode');
  await page.click('твой селектор'); // Continue
  await page.click('твой селектор'); // Finish
  await expect(page.locator('твой селектор')).toHaveText('THANK YOU FOR YOUR ORDER');
});

test('Проверка фильтрации товаров', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  // логин
  await page.fill('твой селектор', 'standard_user');
  await page.fill('твой селектор', 'secret_sauce');
  await page.click('твой селектор');
  // выбрать сортировку
  await page.selectOption('твой селектор', 'lohi');
  // проверить порядок цен
  // ...
});
``` 