console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");


const character = "#";
const count = 8;
const rows = [];
function padRow() {

}
const call = padRow();

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i+1));
}
let result = ""
console.log("demo for..of loop:");
for (const row of rows) {
    result = result + "\n" + row;
}
console.log(result);