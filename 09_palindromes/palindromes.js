const palindromes = function (str) {
  let processedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // '' is required in split since we want each char to be its own element
  // '' is required in join since we want result to NOT have commas in between
  return processedString === processedString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
