const phoneNumber1 = "(222) 555-1234"
const phoneNumber2 = "(333) 555-1234"
const phoneNumber3 = "(444) 555-1234"
const areaCode = /\(222\)/ 

console.log(phoneNumber1.match(areaCode));
console.log(phoneNumber2.match(areaCode));
console.log(phoneNumber3.match(areaCode));

const symbols = "1,(#"
const anySingle = /.{4}/ 


console.log(symbols.match(anySingle));

const areaCodev2 = /\(...\)/ 
const phoneNumberFake = "($%¨) 555-1234" 
console.log(phoneNumber1.match(areaCodev2)); //match area code using correct expression
console.log(phoneNumberFake.match(areaCodev2)); //demonstrate that the regex will match any character and not just numbers