function sloppy_mode() {

}

function strict_mode() {
    'use strict';

	function variables_and_declaration() {
		const var_a = "value"
		let var_b;
		debugger;
	
		var var_c = "value"
		let var_d = "value"
		const var_e = "value"
		var_b = "value"

		const obj_a = {
			a: this,
			b: function() {
				debugger;
				return "value"
			},
			c: {
				a: this
			}
		}
	
		obj_a.b()
		debugger;
	}

	function blocks() {
		let var_a = "value"
		let var_b = "value"
		debugger;
		{
			let var_b = "value"
			let var_c = "value"
			var var_e = "value"
			debugger;
		}
		let var_d = "value"
		debugger;
	}

	function functions() {}

	function closures() {}

	function async_and_iterators() {}

	function webworkers() {
		debugger;
		const myWorker = new Worker("webworker.js");
		debugger;
	}

	variables_and_declaration()
	blocks()
	closures()
	functions()
	async_and_iterators()
	webworkers()
}

strict_mode()
sloppy_mode()