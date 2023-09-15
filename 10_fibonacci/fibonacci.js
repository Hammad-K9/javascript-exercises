const fibonacci = function(num) {
  let n = num - 1;
  if (n < 0)
    return "OOPS";
  if (n == 0 || n == 1)
    return 1;
  return fibonacci(num-1) + fibonacci(num-2);
};

// Do not edit below this line
module.exports = fibonacci;
