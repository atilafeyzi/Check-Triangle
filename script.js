// Challenge: Check triangle

const side1 = 5;
const side2 = 5;
const side3 = 1;

if (side1 === side2 && side2 === side3) {
  console.log("مثلت متساوی الاضلاع");
} else if (side1 === side2 || side1 == side3 || side2 === side3) {
  console.log("مثلث متساوی الساقین");
} else {
  console.log("هیچ");
}
