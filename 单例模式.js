var singleton = function (name) {
    this.name = name;
    this.instance = null;
};
singleton.prototype.getName = function () {
    console.log(name);
};
singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new singleton(name);
    }
    return this.instance;
};
var a = singleton.getInstance('2222');
var b = singleton.getInstance('cccc');
console.log(a === b);
