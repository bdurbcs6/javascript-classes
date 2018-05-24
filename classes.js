
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
}