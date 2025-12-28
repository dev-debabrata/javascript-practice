function fibonacci(n) {
    let a = 0, b = 1;
    let result = [a, b];
    for (let i = 2; i < n; i++) {
        let next = a + b;
        result.push(next);
        a = b;
        b = next
    }
    return result;
}

console.log(fibonacci(10));