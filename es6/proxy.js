var proxy = new Proxy({}, {
	get: function(target, property) {
		return 35;
	}
})

var person = {
	name: '张山'
}
var proxy = new Proxy(person, {
	get: function(target, property) {
		if (property in target) {
			return target[property];
		} else {
			throw new ReferenceError(property + 'is not exist');
		}
	}
})
