function Person (name, age, sex) {
    var o = {};
    o.name = name;
    o.age = age;
    o.sex = sex;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
};
