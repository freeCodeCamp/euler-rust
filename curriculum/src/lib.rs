use wasm_bindgen::prelude::*;

// Rust uses snake_case, but JS uses camelCase
#[wasm_bindgen(js_name = multiplesOf3and5)]
pub fn multiples_of_3_and_5(n: i32) -> i32 {
    10
}
