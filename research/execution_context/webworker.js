let var_a = "value"
let var_b = "value"

function a() {
    let var_a = "value"
    let var_c = "value"
    debugger;
}


function strict_mode() {
    'use strict';
    function a() {
        let var_a = "value"
        debugger;
    }
    
}

function sloppy_mode() {
    function a() {
        let var_a = "value"
        debugger;
    }
}

strict_mode()
sloppy_mode()