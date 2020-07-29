let array =[5,7,2,9,3,9,4,5];

//expected o/p  = [7,2,3,4]


//solution1
var newArray =[];

for(let i=0;i<array.length;i++) {
  if(array.filter(value => value === array[i]).length === 1)
  newArray.push(array[i]);
}
console.log(newArray);


//solution2

let output=[];
array.map(function(currentValue, index, array){
  if(array.filter(currentValue => currentValue === array[index]).length === 1)
  output.push(currentValue);
})

console.log(output);

