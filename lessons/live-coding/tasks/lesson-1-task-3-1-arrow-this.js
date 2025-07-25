// lesson-1-task-3-1-arrow-this.js

// Что выведет код?
const person = {
  name: "Ivan",
  sayHi: () => {
    console.log(`Hi, I'm ${this.name}`);
  }
};
person.sayHi(); // ?

// Ваш ответ: (напишите комментарий ниже)
// Hi, I'm undefined 