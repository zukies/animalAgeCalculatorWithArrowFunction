"use strict";
// 1)
const calcAverageHumanAge = function (age) {
  const ag = age.map((humanAge) => {
    return humanAge <= 2 ? humanAge * 2 : 16 + humanAge * 4;
  });
  console.log(ag);

  // 2)
  const ages = ag.filter((over18) => {
    return over18 >= 18;
  });
  console.log(ages);

  // 3)
  const agess = ages.reduce((acc, curr, i, arr) => {
    return acc + curr / arr.length;
  }, 0);

  return agess;
};

const finalFunction = function (age, fn) {
  console.log(fn(age));
};

finalFunction([5, 2, 4, 1, 15, 8, 3], calcAverageHumanAge);

finalFunction([16, 6, 10, 5, 6, 1, 4], calcAverageHumanAge);
