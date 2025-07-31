---
layout: default
title: Занятие 3
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 3

📖 **[Глоссарий к уроку 3]({{ site.baseurl }}/glossary/lesson-3-glossary)** - все термины урока с подробными определениями и примерами

---

## Тема 1: Framework Architecture (Multilayered)

**Вопросы для обсуждения:**
- Что такое [**фреймворк для автоматизированного тестирования**]({{ site.baseurl }}/glossary/lesson-3-glossary#фреймворк-для-автоматизированного-тестирования){:data-glossary-term="Фреймворк тестирования" data-glossary-definition="Структурированная платформа для создания, выполнения и управления автоматизированными тестами" data-glossary-category="Тестирование"} (и в чем отличие от того, что называют фреймворком разработчики)?
- Какие основные [**инструменты для автоматизации тестирования**]({{ site.baseurl }}/glossary/lesson-3-glossary#инструменты-для-автоматизации-тестирования) существуют сейчас на рынке (их особенности и различия)?
- Какие [**критерии выбора инструмента**]({{ site.baseurl }}/glossary/lesson-3-glossary#критерии-выбора-инструмента) существуют?
- Из каких **слоев (уровней)** может состоять [**фреймворк**]({{ site.baseurl }}/glossary/lesson-3-glossary#многослойная-архитектура)?
- Какие **паттерны** применяют для разных [**уровней абстракции**]({{ site.baseurl }}/glossary/lesson-3-glossary#уровни-абстракции) в фреймворке и в особенности какие паттерны применяют для уровня бизнес-логики ([**PageObject**]({{ site.baseurl }}/glossary/lesson-3-glossary#page-object-pattern), [**PageElements**]({{ site.baseurl }}/glossary/lesson-3-glossary#page-elements), [**Functional Helpers**]({{ site.baseurl }}/glossary/lesson-3-glossary#functional-helpers))?

**Ключевые концепции:**
- [**Многослойная архитектура**]({{ site.baseurl }}/glossary/lesson-3-glossary#многослойная-архитектура) фреймворка
- [**Page Object Pattern**]({{ site.baseurl }}/glossary/lesson-3-glossary#page-object-pattern) и его вариации
- [**Уровни абстракции**]({{ site.baseurl }}/glossary/lesson-3-glossary#уровни-абстракции) в автоматизации тестирования

---

## Тема 2: Loggers, Reporters

**Вопросы для обсуждения:**
- Что такое [**репортеры**]({{ site.baseurl }}/glossary/lesson-3-glossary#репортеры) и для чего они нужны?
- Какие существуют [**репортеры в Playwright**]({{ site.baseurl }}/glossary/lesson-3-glossary#репортеры) и как они подключаются?
- Как сделать [**кастомный репортер**]({{ site.baseurl }}/glossary/lesson-3-glossary#кастомный-репортер) и для чего он может быть полезен?

**Ключевые концепции:**
- [**Логирование**]({{ site.baseurl }}/glossary/lesson-3-glossary#логирование) в автоматизированных тестах
- **Отчетность** и её важность
- [**Кастомизация**]({{ site.baseurl }}/glossary/lesson-3-glossary#кастомный-репортер) репортеров

**Рекомендуемые материалы:**
- [Документация Playwright по репортерам](https://playwright.dev/docs/test-reporters)

---

## Тема 3: Fixtures

**Вопросы для обсуждения:**
- Что такое [**фикстуры**]({{ site.baseurl }}/glossary/lesson-3-glossary#фикстуры) и для чего они нужны в автоматизированном тестировании?
- Какие **проблемы решают фикстуры** и как они улучшают качество тестов?
- Как работают [**setup и teardown**]({{ site.baseurl }}/glossary/lesson-3-glossary#setup-и-teardown) в контексте фикстур?
- Какие бывают типы [**фикстур в Playwright**]({{ site.baseurl }}/glossary/lesson-3-glossary#фикстуры) — **test fixtures**, **worker fixtures**, **auto fixtures** — и чем они отличаются друг от друга?

**Ключевые концепции:**
- [**Setup и Teardown**]({{ site.baseurl }}/glossary/lesson-3-glossary#setup-и-teardown) в тестах
- **Переиспользование** кода между тестами
- **Изоляция** тестовых данных

**Рекомендуемые материалы:**
- [Документация Playwright по фикстурам](https://playwright.dev/docs/test-fixtures) 

---

## Практическая часть: автоматизация тестов

**Перед началом:**
- Создай ветку `task-3`.
- Выполни все задания этого блока в этой ветке.
- После выполнения создай merge request в `main` и назначь меня ревьюером.

> **Примечание:** Все задания выполняй без создания абстракций и Page Object'ов — это будет рассмотрено в следующих занятиях.

### Тест-кейс 1: Позитивный сценарий логина
**Цель:** Проверить успешный вход с валидными данными

**Шаги:**
1. Перейдите на [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Введите логин: `standard_user`
3. Введите пароль: `secret_sauce`
4. Нажмите кнопку `Login`
5. Убедитесь, что открылась страница **Products** (отображается заголовок "Products")

---

### Тест-кейс 2: Негативный сценарий логина
**Цель:** Проверить ошибку при вводе неверных данных

**Шаги:**
1. Перейдите на [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Введите невалидный логин и/или пароль (например, `wrong_user` / `wrong_pass`)
3. Нажмите кнопку `Login`
4. Убедитесь, что появляется сообщение об ошибке (**Error message**)

---

### Тест-кейс 3: Добавление товара в корзину
**Цель:** Проверить добавление товара в корзину

**Шаги:**
1. Залогиниться как `standard_user` / `secret_sauce`
2. На странице товаров нажать `Add to cart` у любого товара
3. Перейти в корзину (иконка корзины в правом верхнем углу)
4. Убедиться, что выбранный товар отображается в корзине

---

### Тест-кейс 4: Оформление заказа (checkout flow)
**Цель:** Проверить успешное оформление заказа

**Шаги:**
1. Залогиниться как `standard_user` / `secret_sauce`
2. Добавить товар в корзину
3. Перейти в корзину и нажать `Checkout`
4. Заполнить форму: First Name, Last Name, Zip/Postal Code (любые валидные значения)
5. Нажать `Continue`, затем `Finish`
6. Убедиться, что отображается сообщение "THANK YOU FOR YOUR ORDER"

---

### Тест-кейс 5: Проверка фильтрации товаров
**Цель:** Проверить сортировку товаров по цене (от меньшей к большей)

**Шаги:**
1. Залогиниться как `standard_user` / `secret_sauce`
2. На странице товаров выбрать сортировку `Price (low to high)`
3. Убедиться, что товары отсортированы по цене по возрастанию

---

**Полезные методы [Playwright]({{ site.baseurl }}/glossary/lesson-2-glossary#playwright):**
- [`page.goto`](https://playwright.dev/docs/api/class-page#page-goto) — переход по URL
- [`page.fill`](https://playwright.dev/docs/api/class-page#page-fill) — ввод текста в поле
- [`page.click`](https://playwright.dev/docs/api/class-page#page-click) — клик по элементу
- [`page.locator`](https://playwright.dev/docs/api/class-page#page-locator) — поиск элементов ([**селекторы**]({{ site.baseurl }}/glossary/lesson-3-glossary#селектор))
- [`expect`](https://playwright.dev/docs/api/class-expect) — проверки/[**assertions**]({{ site.baseurl }}/glossary/lesson-3-glossary#assertions)

**Пример псевдокода для Playwright (TypeScript):**
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