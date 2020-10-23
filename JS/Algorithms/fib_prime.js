// get prime numbers from given fibonacci sequence

const solution = (n) => {
  // Type your solution here

  var res = fib(n).filter((x) => isPrime(x));

  return res;
};

function fib(n) {
  if (n < 2) return [0, 1];

  var num = fib(n - 1);
  num.push(num[num.length - 1] + num[num.length - 2]);

  return num;
}

function isPrime(x) {
  for (var i = 2; i < x; i++) if (x % i === 0) return false;
  return x > 1;
}

module.exports = { fibPrime: solution, fib: fib, isPrime: isPrime };
