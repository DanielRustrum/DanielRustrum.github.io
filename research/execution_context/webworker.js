let var_a = "value"
let var_b = "value"

console.log(this)

function strict_mode() {
    'use strict';

    function a() {
        console.log(a)
        let var_a = "value"
        let var_c = "value"
        debugger;
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