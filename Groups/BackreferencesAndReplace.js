const sentence = `
/src
    - ListItem.js
    - Form.ts
    - Button.ts
`

console.log(sentence.match(/(\w+)\.(js|ts)/g));

console.log(sentence.replace(/\.(js|ts)/g, ".$1x"));

console.log(sentence.replace(/(\w+)\.(js|ts)/g, "User$1.$2x"));