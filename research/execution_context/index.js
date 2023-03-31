function strict() {
    'use strict';
	function a() {
		function b() {
			function c() {}
            debugger;
		}
		b()
	}
	a()
}

strict()