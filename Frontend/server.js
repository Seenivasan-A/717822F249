const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 9876;

app.use(cors());

function generatePrimes(n = 10) {
    const primes = [];
    let num = 2;
    while (primes.length < n) {
        if (primes.every(p => num % p !== 0)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

function generateFibonacci(n = 10) {
    const fib = [0, 1];
    while (fib.length < n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}

function generateEven(n = 10) {
    return Array.from({ length: n }, (_, i) => i * 2);
}

function generateRandom(n = 10) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * 100));
}

// API Endpoints
app.get("/numbers/:type", (req, res) => {
    const { type } = req.params;
    let numbers = [];

    switch (type) {
        case "primes":
            numbers = generatePrimes();
            break;
        case "fibo":
            numbers = generateFibonacci();
            break;
        case "even":
            numbers = generateEven();
            break;
        case "rand":
            numbers = generateRandom();
            break;
        default:
            return res.status(400).json({ error: "Invalid type" });
    }

    res.json({ numbers });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
