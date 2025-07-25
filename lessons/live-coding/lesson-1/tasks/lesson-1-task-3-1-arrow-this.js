// Что выведет код?
const person = {
  name: "Ivan",
  sayHi: () => {
    console.log(`Hi, I'm ${this.name}`);
  }
};
person.sayHi(); // ? 