/* given two strings, return true if they are anagrams of one another
   anagram is a word or phrase formed by rearring the letters of another
   example spar frmed by rasp
   mary is anagram of Army

   -----logic---------
   1. convert the strings to same case
   2. convert string into array by sperating the word 
   3. Apply array sort method
   4. join the array back to string
   5. compare  the new sorted strings

   -----------methods used---------------------
   split ==> string split method split the sting into array of  substring
            let string ='hello';
            string.split("");    //["h", "e", "l", "l", "o"]

   sort ===> array sort method sort the array by default in alphabetical order in ascending 
             ["h", "e", "l", "l", "o"].sort()  //["e", "h", "l", "l", "o"]

   join ==> array join method returns array as string
            ["e", "h", "l", "l", "o"].join("");  //"ehllo"
*/

isAnagram = (string1, string2) => {
    let newString1 = string1.toLowerCase();
    let newString2 = string2.toLowerCase();

    newString1 = newString1.split("").sort().join("");
    newString2 = newString2.split("").sort().join("");
    return (newString1 === newString2);
}

console.log(isAnagram('mary', 'army'));
