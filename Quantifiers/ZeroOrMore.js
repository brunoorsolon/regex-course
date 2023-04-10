const sentence = "1 10 100 1000..."
console.log(sentence.match(/10*/g));


const files = ["1", "20", "300", "4000", "90000"]
const exercise = files.join("\n")

console.log(exercise.match(/\d0*/g));