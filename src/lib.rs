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
    if n <= 1 {
        return 0;
    } else {
        let mut even_sum = 0;
        let mut prev_fib_num = 1;
        let mut fib_num = 2;
        while fib_num <= n {
            if fib_num % 2 == 0 {
                even_sum += fib_num;
            }
            let temp = fib_num.clone();
            fib_num = prev_fib_num + fib_num;
            prev_fib_num = temp;
        }
        return even_sum;
    }
}

#[wasm_bindgen(js_name = largestPrimeFactor)]
pub fn largest_prime_factor(n: i32) -> i32 {
    n
}
