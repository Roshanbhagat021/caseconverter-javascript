// ---------Description--------------
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]



let arr=["MA", "SA", "I", "SCH", "OOL"];

let caseConvertor=(arr)=>arr.map(el=>el.toLowerCase())

let newarr=caseConvertor(arr)
console.log(newarr)



