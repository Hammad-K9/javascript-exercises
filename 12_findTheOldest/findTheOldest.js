const getAge = (birth, death) => {
    if (!death)
      death = new Date().getFullYear();
    return death - birth;
};

const findTheOldest = function(people) {
  return people.reduce((p1, p2) => {
    return getAge(p1.yearOfBirth, p1.yearOfDeath) > 
    getAge(p2.yearOfBirth, p2.yearOfDeath) ? p1 : p2;
    }, {});
};



// Do not edit below this line
module.exports = findTheOldest;
