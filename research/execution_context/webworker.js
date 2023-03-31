let var_a = "value"
let var_b = "value"

debugger;

function strict_mode() {
    'use strict';

    function a() {
        function b() {
            debugger;
        }

        console.log(a)
        let var_a = "value"
        let var_c = "value"
        debugger;
        b()
    }
    
    a()
}

function sloppy_mode() {
    function a() {
        let var_a = "value"
        let var_c = "value"
        debugger;
    }

    a()
}

strict_mode()
sloppy_mode()