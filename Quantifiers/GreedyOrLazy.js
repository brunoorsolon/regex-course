const sentence = '<p>Hello World!</p>'
console.log("GREEDY: " + sentence.match(/<.+>/g));
console.log("LAZY: " + sentence.match(/<.+?>/g));