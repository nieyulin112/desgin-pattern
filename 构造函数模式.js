function Person (name, age, sex) {
    this.name = name;
    this.age =  age;
    this.sex = sex;
    this.sayName = function () {
        console.log(this.name);
    };
};
