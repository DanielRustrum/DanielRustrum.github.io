function base() {
	function a() {
		function b() {
			function c() {}
            debugger;
		}
		b()
	}
	a()
}