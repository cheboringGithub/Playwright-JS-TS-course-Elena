---
layout: default
title: Ответ к задаче 3.3
---
# Ответ к задаче 3.3: this в стрелочной и обычной функции

**Код:**

```js
const user = {
  name: "Elena",
  sayHiArrow: () => {
    console.log(`Hi, I'm ${this.name}`);
  },
  sayHiRegular() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

user.sayHiArrow();
user.sayHiRegular();
```

**Ожидаемый вывод:**

```
Hi, I'm undefined
Hi, I'm Elena
```

**Пояснение:**
- В [**стрелочной функции**]({{ site.baseurl }}/glossary/lesson-2-glossary#стрелочные-функции){:data-glossary-term="Стрелочные функции" data-glossary-definition="Функции без собственного this"} `this` берётся из внешнего контекста (глобальный объект), поэтому `this.name` — undefined.
- В [**обычной функции**]({{ site.baseurl }}/glossary/lesson-2-glossary#стрелочные-функции) `this` ссылается на сам объект `user`, поэтому `this.name` — "Elena".

📖 **[Подробнее о стрелочных функциях и this]({{ site.baseurl }}/glossary/lesson-2-glossary#стрелочные-функции)** 