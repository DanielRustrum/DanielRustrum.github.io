function sloppy_mode() {

}

function strict_mode() {
    'use strict';

	const var_a = "value"
	let var_b;
	debugger;

	var var_c = "value"
	var_b = "value"

	function a() {
		function b() {
			function c() {}
            debugger;
		}
		b()
	}
	a()

	const obj_a = {
		a: this,
		b: function() {
			debugger;
			return "value"
		}
	}

	debugger;
}

strict_mode()