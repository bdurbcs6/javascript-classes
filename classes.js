
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
    this.children = props.children;
    this.gchildren = props.gchildren;
  }
  hasChildren () {
    return `Hi,  i am ${this.name} and I have ${this.children} Children`
  }
};

class Child extends Parent {
  constructor(props) {
    super(props);
    this.favAnimal = props.favAnimal;
    this.kid = props.kid;
  }
  animal () {
    return `Hey, I'm ${this.name}, my fav animal is ${this.favAnimal}`
  }
  hadKid (parent) {
    const amount = this.kid += 1;
    return `${parent.name} has a new gchild, ${this.name} now has ${amount} children`
  }
};



const joe = new Person({
  gender: "Male",
  "age": 42,
  "name": 'Joe',
  "job": "General Contractor"
});

const albert = new Parent({
  "name": "Albert",
  "children": 3,
});

const cindy = new Child({
  "name": "Cindy",
  "kid": 0
});


console.log(joe.speak());

console.log(albert.hasChildren());

console.log(cindy.hadKid(joe));
console.log(cindy.hadKid(joe));
console.log(cindy.hadKid(joe));
console.log(cindy.hadKid(joe));
console.log(cindy.hadKid(joe));
console.log(cindy.hadKid(albert));
