class Person {
  constructor(name){
    this.name = name
  }

  sayMyName(){
    return `Hello world,from ${this.name}!`
  }
}


module.exports = {
  Person,
};