function sloppy_mode() {

}

eval("debugger;")

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

	function async_and_iterators() {
		let var_a = "value"
		let outer_val = null
		const promiseA = new Promise((resolve, reject) => {
			var_a = "value2"
			debugger;
			resolve(777)
		})
		
		promiseA.then((val) => {
			outer_val = val
			debugger;
		})

		debugger;
	}

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