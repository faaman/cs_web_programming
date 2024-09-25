const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

/*
the below code works to generate a pyramid:
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

/*
the below code works to generate a pyramid:
while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*this will get an upside down pyramid:
for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

/*this will also get an upside down pyramid:
for (let i = 1; i <= count; i++) {
  rows.unshift(padRow(i, count));
}*/

//choose the direction of the pyramid:
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
