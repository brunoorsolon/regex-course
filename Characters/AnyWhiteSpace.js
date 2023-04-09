// Any white space meta character "\s" matches \t \n \r and \f besides the actual white spaces

const userData = `{
	"name": "John",
	"age": 43,
	"email": "john@smith.com"
}`
console.log(userData.match(/\s\s/g));