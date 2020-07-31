function FirstFactorial(num) { 
  for(let i=num-1; i>0; i--){
    num = num*i;
  }
  // code goes here  
  return num; 

}
   
// keep this function call here 
console.log(FirstFactorial(8));
