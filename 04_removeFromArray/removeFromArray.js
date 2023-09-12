const removeFromArray = function (arr, ...args) {
  let res = [];
  arr.forEach((num) => {
    if (!args.includes(num)) res.push(num);
  });
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
