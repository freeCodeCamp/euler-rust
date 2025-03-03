use wasm_bindgen::prelude::*;

// Example format to write functions:
#[wasm_bindgen(js_name = camelCaseName)] // js_name must equal function name tested on client
pub fn snake_case_name(num: i32) -> i32 {
    // Function must be public
    // All numbers in JS are 32-bit
    num
}
