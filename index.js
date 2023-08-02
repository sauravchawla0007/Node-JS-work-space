console.log("Hello World!");
function add(a,b){
    return a+b;
}

console.log(add(4,5));
console.log(process.argv);
const args = process.argv.slice(2);
console.log("Adding Numbers : ", add(parseInt(args[0]),parseInt(args[1])));