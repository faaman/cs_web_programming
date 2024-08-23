console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");


const character = "#";
const count = 5;
const rows = [];
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i++) {
    rows.push(padRow(i + 1, count));
  }

/*const call = padRow("Jane Austen");
console.log(call);

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i+1));
}*/
let result = ""
console.log("demo for..of loop:");
for (const row of rows) {
    result = result + "\n" + row;
}
console.log(result);