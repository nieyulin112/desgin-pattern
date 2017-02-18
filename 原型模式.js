function Person () {
};
Person.prototype.name = 'name';
Person.prototype.age = 'age';
Person.prototype.sayName = function () {
    console.log(this.name);
};
