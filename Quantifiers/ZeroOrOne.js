const sentence = "theme.scss form.css"
console.log(sentence.match(/\.s?css/g));

const otherSentence = "User.jsx index.js"
console.log(otherSentence.match(/\.jsx?/g));