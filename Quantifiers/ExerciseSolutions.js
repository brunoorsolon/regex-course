const exe1 = ["123-45-6789","110-82-0919","177.32-1896","154-54-8599","my-ss-nmbr","5-773-5469"];
console.log(exe1.join("\n").match(/\d{3}-\d{2}-\d{4}/g));
const exe2 = ["(202) 555-0187","(410) 555-0132","515-555-0125","303 555 0105",")225(-555-0153","800-600-4243","(404) 555 5423","(21) 98888 6666","(21) 98888-6666"]

console.log(exe2.join("\n").match(/\(\d{2,3}\)[ ]\d{3,}[\- ]\d{4,}/g));

const exe3 = ["bruno@test.ca","bruno.orsolon@gmail.com","ERRO.ca","cmacgauhy.1@bloomber.co.uk", "teste@email.com.br","afidge_0@friendfeed.us","cmacgauhy.1@bloomberg.org","rhaseley2@ow.ly","i_billiard4@sohu.@","fbrandel3@gmail.com","rgoldring6@timesonline."];
console.log(exe3.join("\n").match(/[\w.]+@\w+\.\w{2,4}(.\w{2,3})?/g));
