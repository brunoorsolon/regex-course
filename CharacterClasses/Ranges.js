const addressInfo = "116 Winners Cir Hessmer, Louisiana(LA), 71341"
const numbersOnly = /[0-9]/g // at the end Tweak range
const capitalOnly = /[A-Z]/g
const lowerOnly = /[a-z]/g

const allLetters = /[A-z]/g //It's important to start with capital letter and end with lowercase letter because of how javascript uses the ASCII and UNICODE
//It' important tonote that [A-z] will match the special characters [ \ ] ^ ` because of how they are positioned in the UNICODE tables
//A-Z is 65 to 90, a-z is 97 to 122 and the special characters [ \ ] ^ ` are numbers 91 to 96 in the UNICODE table

const letters = /[B-Q1-6]/g // at the end Tweak mixed range 
console.log(addressInfo.match(numbersOnly));
console.log(addressInfo.match(capitalOnly));
console.log(addressInfo.match(lowerOnly));
console.log(addressInfo.match(letters));
console.log(addressInfo.match(allLetters));