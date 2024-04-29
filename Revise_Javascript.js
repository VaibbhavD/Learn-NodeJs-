const ProductTwo = (num) => {
  return num * 2;
};

const ans = ProductTwo(5);
console.log(ans);

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const Vaibhav = new Student("Vaibhav", 23);
console.log(Vaibhav.name);
