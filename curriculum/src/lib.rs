use wasm_bindgen::prelude::*;

// Rust uses snake_case, but JS uses camelCase
#[wasm_bindgen(js_name = multiplesOf3and5)]
pub fn multiples_of_3_and_5(n: i32) -> i32 {
    let mut t = 0;
    for i in 0..n {
        if i % 3 == 0 || i % 5 == 0 {
            t += i;
        }
    }
    t
}

#[wasm_bindgen(js_name = fiboEvenSum)]
pub fn fibo_even_sum(n: i32) -> i32 {
    n
}
