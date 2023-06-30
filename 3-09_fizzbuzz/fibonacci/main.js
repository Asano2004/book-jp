console.log('fibonacci')

function fibonacci(n) {
    if (n === 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log("fibonacci")
let i = 0
while (i < 11) {
    console.log(fibonacci(i))
    i = i + 1;
}