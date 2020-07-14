//implement duplicate([1,2,3,4,5]) ==>  [1,2,3,.4.5,1,2,3,4,5]


duplicate = (array) => { return array.concat(array)};

let result = duplicate([1,2,3,4,5]);
console.log(result);
