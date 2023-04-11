const sentence = ["SuperSonic","HyperSonic","UltraSonic"]

console.log(sentence.join("\n").match(/((Su|Hy)per|Ultra)Sonic/g));

console.log(sentence.join("\n").match(/(?<pre>(?<fix>Su|Hy|Ul)per|Ultra)Sonic/g));