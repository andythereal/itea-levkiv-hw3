var fn = Number(prompt('Your Number: '));

function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
document.write('Your Fibonacci Number: ' + fibonacci(fn));
