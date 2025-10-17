/* //Find how many times a character is repeated in a string
let s="arrchana"//works only for lower case
let count=0
let count1=0
for(let i=0;i<=s.length;i++){
    if(s.charAt(i)=='a'){
         count++
    }
    if(s.charAt(i)=='r'){
         count1++
    }
}
console.log(`count of 'a': ${count}`)*/



//Palindrome or reverse a string
let originalWord= "madam";
//let o=originalWord.split('')
//let reveresedWord=originalWord.split('').reverse().join('')
let reveresedWord = "";
//let r=reveresedWord.split('')

for(let i=originalWord.length-1;i>=0;i--){
     reveresedWord +=originalWord.charAt(i);
}

console.log(`Original word : ${originalWord}`)
console.log(`Reversed word : ${reveresedWord}`)

//string should be compared with string and character should be compared with character, here if I compare o==reveresedWord - Not a palindrome
if(originalWord==reveresedWord){
     console.log("It's a palindrome")
}else{
     console.log("Not a palindrome")
}