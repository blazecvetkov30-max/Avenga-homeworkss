function checkType(value) {

let type = typeof value;

console.log("Value: " + value + ", Type: " + type);

return type;
}

checkType({name: "Blaze" });

checkType(true);

checkType(25);

checkType("Hello JavaScript");

checkType(undefined);