const urls = ["www.google.com", "wwwww.amazon.com", "www.this_will.co", "www.not.com", "match.com", "www.spring.io"]
const sentence = urls.join("\n")
console.log(sentence.match(/w{3}\.\w+.\w{3}/g));
console.log(sentence.match(/w{3}\.\w+.\w{2,3}/g));
console.log(sentence.match(/w{3,}\.\w+.\w{2,3}/g));