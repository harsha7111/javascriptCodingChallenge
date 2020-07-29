//sort array without using sort method

let array = [7,4,8,3,0,1,3];

for(let i=0; i<array.length; i++){
  for(let j=0; j<array.length; j++) {
   if(array[i]- array[j] < 0) {
     let temp = array[i];
     array[i] = array[j];
     array[j] = temp;
   }
  }
}
console.log(array);
