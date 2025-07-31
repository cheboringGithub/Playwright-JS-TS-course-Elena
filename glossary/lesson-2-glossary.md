---
layout: default
title: Глоссарий - Урок 2
---

<a href="{{ site.baseurl }}/lessons/lesson-2" class="main-link-home">← Назад к уроку 2</a>

# Глоссарий - Урок 2

---

## Методы массивов

**Методы массивов** — встроенные функции JavaScript для работы с массивами.

**Основные методы:**

**forEach** — выполняет функцию для каждого элемента
```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
// Выводит: 2, 4, 6
```

**map** — создает новый массив с результатами вызова функции для каждого элемента
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
// doubled = [2, 4, 6]
```

**filter** — создает новый массив с элементами, прошедшими проверку
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// evenNumbers = [2, 4]
```

**reduce** — выполняет функцию-редюсер для каждого элемента, возвращая одно результирующее значение
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
// sum = 10
```

---

## Перебираемые объекты (Iterable)

**Перебираемый объект** — объект, который реализует протокол итерации и может быть перебран в цикле `for...of`.

**Встроенные перебираемые объекты:**
- Array
- String  
- Map
- Set
- NodeList

**Пример:**
```javascript
const iterable = [1, 2, 3];

// Использование for...of
for (const value of iterable) {
  console.log(value); // 1, 2, 3
}

// Проверка на итерируемость
console.log(typeof iterable[Symbol.iterator]); // "function"
```

---

## Map и Set

**Map** — коллекция ключ-значение, где ключами могут быть любые значения.

```javascript
const map = new Map();

// Добавление элементов
map.set('name', 'John');
map.set(1, 'number key');
map.set(true, 'boolean key');

// Получение значений
console.log(map.get('name')); // "John"

// Проверка наличия ключа
console.log(map.has('name')); // true

// Размер
console.log(map.size); // 3

// Итерация
for (const [key, value] of map) {
  console.log(key, value);
}
```

**Set** — коллекция уникальных значений.

```javascript
const set = new Set();

// Добавление элементов
set.add(1);
set.add(2);
set.add(1); // дубликат не добавится

console.log(set.size); // 2

// Проверка наличия
console.log(set.has(1)); // true

// Удаление
set.delete(1);

// Итерация
for (const value of set) {
  console.log(value);
}
```

---

## Object.keys, values, entries

**Object.keys()** — возвращает массив имен свойств объекта
```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a", "b", "c"]
```

**Object.values()** — возвращает массив значений свойств объекта
```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1, 2, 3]
```

**Object.entries()** — возвращает массив пар [ключ, значение]
```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]

// Удобно для итерации
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
```

---

## Деструктурирующее присваивание

**Деструктуризация** — синтаксис, позволяющий извлекать данные из массивов и объектов в отдельные переменные.

**Деструктуризация массивов:**
```javascript
const arr = [1, 2, 3, 4, 5];

// Основной синтаксис
const [first, second] = arr;
console.log(first, second); // 1, 2

// Пропуск элементов
const [, , third] = arr;
console.log(third); // 3

// Остальные элементы
const [head, ...tail] = arr;
console.log(head, tail); // 1, [2, 3, 4, 5]

// Значения по умолчанию
const [a, b, c = 0] = [1, 2];
console.log(c); // 0
```

**Деструктуризация объектов:**
```javascript
const obj = { name: 'John', age: 30, city: 'New York' };

// Основной синтаксис
const { name, age } = obj;
console.log(name, age); // "John", 30

// Переименование переменных
const { name: userName, age: userAge } = obj;
console.log(userName, userAge); // "John", 30

// Значения по умолчанию
const { name, country = 'Unknown' } = obj;
console.log(country); // "Unknown"

// Остальные свойства
const { name, ...rest } = obj;
console.log(rest); // { age: 30, city: "New York" }
```

---

## Остаточные параметры (Rest parameters)

**Остаточные параметры** — синтаксис `...args`, позволяющий функции принимать неограниченное количество аргументов в виде массива.

```javascript
// Функция с остаточными параметрами
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(1, 2)); // 3

// Комбинирование с обычными параметрами
function greet(greeting, ...names) {
  return `${greeting} ${names.join(', ')}!`;
}

console.log(greet('Hello', 'John', 'Jane', 'Bob')); 
// "Hello John, Jane, Bob!"
```

---

## Оператор расширения (Spread operator)

**Оператор расширения** — синтаксис `...`, который позволяет расширить элементы массива или свойства объекта.

**С массивами:**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Объединение массивов
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Копирование массива
const copy = [...arr1];

// Передача элементов как аргументы
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(...arr1)); // 6
```

**С объектами:**
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Объединение объектов
const combined = { ...obj1, ...obj2 };
console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }

// Копирование объекта
const copy = { ...obj1 };

// Перезапись свойств
const updated = { ...obj1, b: 10, e: 5 };
console.log(updated); // { a: 1, b: 10, e: 5 }
```

---

## Рекурсия

**Рекурсия** — техника, при которой функция вызывает сама себя для решения задачи.

**Структура рекурсивной функции:**
1. **Базовый случай** — условие выхода из рекурсии
2. **Рекурсивный случай** — вызов функции с измененными параметрами

**Примеры:**
```javascript
// Факториал
function factorial(n) {
  // Базовый случай
  if (n <= 1) {
    return 1;
  }
  
  // Рекурсивный случай
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Числа Фибоначчи
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8

// Обход вложенной структуры
function sumNested(arr) {
  let sum = 0;
  
  for (const item of arr) {
    if (Array.isArray(item)) {
      sum += sumNested(item); // рекурсивный вызов
    } else {
      sum += item;
    }
  }
  
  return sum;
}

console.log(sumNested([1, [2, 3], [4, [5, 6]]])); // 21
```

---

## Замыкания (Closures)

**Замыкание** — это функция, которая имеет доступ к переменным из внешней области видимости даже после того, как внешняя функция завершила выполнение.

**Примеры:**
```javascript
// Базовое замыкание
function outerFunction(x) {
  // Внешняя переменная
  
  function innerFunction(y) {
    // Внутренняя функция имеет доступ к x
    return x + y;
  }
  
  return innerFunction;
}

const closure = outerFunction(10);
console.log(closure(5)); // 15

// Практический пример - счетчик
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (независимый счетчик)

// Модуль с приватными переменными
function createPerson(name) {
  let privateName = name;
  
  return {
    getName() {
      return privateName;
    },
    
    setName(newName) {
      privateName = newName;
    }
  };
}

const person = createPerson('John');
console.log(person.getName()); // "John"
person.setName('Jane');
console.log(person.getName()); // "Jane"
```

---

## Hoisting

**Hoisting** — механизм JavaScript, при котором объявления переменных и функций "поднимаются" наверх их области видимости.

**Что поднимается:**
- Объявления `var` переменных (но не присваивания)
- Объявления функций (`function declaration`)
- Объявления `let` и `const` (но не инициализируются)

**Примеры с var:**
```javascript
console.log(x); // undefined (не ошибка!)
var x = 5;

// Интерпретируется как:
var x;
console.log(x); // undefined
x = 5;
```

**Примеры с функциями:**
```javascript
// Это работает благодаря hoisting
sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}

// Но это не работает (function expression)
sayBye(); // TypeError: sayBye is not a function
var sayBye = function() {
  console.log("Bye!");
};
```

**С let и const:**
```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// Temporal Dead Zone - переменная объявлена, но не доступна
```

---

## E2E тестирование

**E2E (End-to-End) тестирование** — тип тестирования, который проверяет работу приложения полностью, от начала до конца пользовательского сценария.

**Характеристики E2E тестов:**
- Тестируют полный пользовательский путь
- Включают взаимодействие с UI, API, базой данных
- Запускаются в реальной или близкой к реальной среде
- Имитируют действия реального пользователя

**Примеры E2E сценариев:**
- Регистрация → Логин → Покупка товара → Оплата
- Создание аккаунта → Заполнение профиля → Публикация контента
- Поиск товара → Добавление в корзину → Оформление заказа

**Инструменты для E2E:**
- **Playwright** — современный фреймворк
- **Cypress** — популярный инструмент
- **Selenium** — классический выбор
- **WebDriver** — стандарт автоматизации

**Пример E2E теста:**
```javascript
test('complete shopping flow', async ({ page }) => {
  // 1. Открыть сайт
  await page.goto('/shop');
  
  // 2. Найти товар
  await page.fill('[data-testid="search"]', 'laptop');
  await page.click('[data-testid="search-button"]');
  
  // 3. Добавить в корзину
  await page.click('[data-testid="add-to-cart"]');
  
  // 4. Перейти к оформлению
  await page.click('[data-testid="checkout"]');
  
  // 5. Заполнить данные
  await page.fill('[data-testid="email"]', 'user@example.com');
  await page.fill('[data-testid="address"]', '123 Main St');
  
  // 6. Оплатить
  await page.click('[data-testid="pay-button"]');
  
  // 7. Проверить успех
  await expect(page.locator('[data-testid="success"]')).toBeVisible();
});
```

---

## var (устаревшее ключевое слово)

**var** — устаревший способ объявления переменных в JavaScript (до ES6).

**Проблемы с var:**
1. **Функциональная область видимости** (не блочная)
2. **Поднятие (hoisting)** 
3. **Возможность повторного объявления**

```javascript
// Проблема с областью видимости
function example() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1 (доступна за пределами блока)
}

// С let/const
function example2() {
  if (true) {
    let y = 1;
  }
  console.log(y); // ReferenceError: y is not defined
}

// Проблема с hoisting
console.log(hoistedVar); // undefined (не ошибка!)
var hoistedVar = 5;

// Эквивалентно:
var hoistedVar;
console.log(hoistedVar); // undefined
hoistedVar = 5;

// Повторное объявление
var name = 'John';
var name = 'Jane'; // OK (плохо!)

let age = 25;
let age = 30; // SyntaxError (хорошо!)
```

---

## Стрелочные функции

**Стрелочные функции** — краткий синтаксис для объявления функций, введенный в ES6.

**Синтаксис:**
```javascript
// Обычная функция
function add(a, b) {
  return a + b;
}

// Стрелочная функция
const add = (a, b) => a + b;

// Различные формы записи
const single = x => x * 2;           // один параметр
const noParams = () => 'Hello';      // без параметров  
const multiLine = (a, b) => {        // многострочная
  const sum = a + b;
  return sum * 2;
};

// В методах массивов
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);
```

**Отличия от обычных функций:**
1. **Нет собственного this**
2. **Нет arguments**
3. **Нельзя использовать как конструктор**
4. **Краткий синтаксис**

```javascript
// this в стрелочных функциях
const obj = {
  name: 'John',
  
  regularFunction() {
    console.log(this.name); // "John"
    
    const arrow = () => {
      console.log(this.name); // "John" (наследует this)
    };
    
    function regular() {
      console.log(this.name); // undefined (свой this)
    }
    
    arrow();
    regular();
  }
};

obj.regularFunction();
```

---

## Playwright

**Playwright** — современный фреймворк для автоматизации веб-браузеров и end-to-end тестирования.

**Основные возможности:**
- Поддержка всех современных браузеров (Chrome, Firefox, Safari)
- Автоматическое ожидание элементов
- Мощные инструменты для отладки
- Встроенные assertions
- Скриншоты и видео записи

**Установка:**
```bash
npm init playwright@latest
```

**Базовый пример:**
```javascript
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('button');
  await expect(page.locator('h1')).toHaveText('Welcome');
});
```

---

## GitHub

**GitHub** — веб-сервис для хостинга IT-проектов и совместной разработки, основанный на системе контроля версий Git.

**Основные возможности:**
- Хостинг Git-репозиториев
- Pull Requests для код-ревью
- Issues для отслеживания задач
- GitHub Actions для CI/CD
- GitHub Pages для хостинга сайтов
- Интеграция с множеством инструментов

**Рабочий процесс:**
1. Fork репозитория
2. Клонирование локально
3. Создание ветки для изменений
4. Внесение изменений и коммитов
5. Push в свой fork
6. Создание Pull Request
7. Код-ревью и слияние

---

<a href="{{ site.baseurl }}/glossary" class="main-link-home">← К общему глоссарию</a>