
class Person {
  constructor(props) {
    this.gender = props.gender;
    this.age = props.age;
    this.name = props.name;
    this.job = props.job;
  }

  speak () {
    return `Hey there, I'm ${this.name}`
  }
};

class Parent extends Person {
  constructor(props) {
    super(props);
    this.children = props.children;
  }
  hasChildren () {
    return `Hi,  i am ${this.name} and I have ${this.children} Children`
  }
};



const joe = new Person({
  "gender": "Male",
  "age": 42,
  "name": 'Joe',
  "job": "General Contractor"
});

const albert = new Parent({
  "name": "Albert",
  "children": 3
});

console.log(joe.speak());

console.log(albert.hasChildren());