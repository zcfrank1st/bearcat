var Bus = function(engine, wheel, num) {
	this.engine = engine;
	this.wheel = wheel;
	this.num = num;
	console.log(num);
}

Bus.prototype.run = function() {

}

module.exports = {
	func: Bus,
	id: "bus",
	// scope: "prototype",
	parent: "car",
	args: [{
		name: "engine",
		ref: "engine"
	}, {
		name: "wheel",
		ref: "wheel"
	}]
	// props: ["engine", "wheel"]
	// args: ["engine", "wheel"]
};