function sloppy_mode() {

}

function strict_mode() {
    'use strict';

	function variables_functions_and_declaration() {
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

	}

	function more_functions() {}

	function async_and_iterators() {}

	function webworkers() {}

	variables_functions_and_declaration()
	blocks()
	more_functions()
	async_and_iterators()
	webworkers()
}

strict_mode()