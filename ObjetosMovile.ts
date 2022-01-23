import { Mobile } from "./Mobile";          //Importo la clase Mobile


//Creo los 3 objetos que se pedían.    
let Nokia3210:Mobile = new Mobile("Nokia3210","3210", "Nokia", 8, "rojo", false, 2, 55);
let iPhone3G:Mobile = new Mobile("iPhone3G","10", "iPhone", 32, "azul", true, 4, 115);
let Samsung:Mobile = new Mobile("SamsungGalaxy10","Galaxy 10", "Samsung", 16, "negro", true, 3, 95);


console.log("Móvil Nokia3210");
console.log(Nokia3210.name);
console.log(Nokia3210.model);
console.log(Nokia3210.trademark);
console.log(Nokia3210.sdSize);
console.log(Nokia3210.color);
console.log(Nokia3210.is5G);
console.log(Nokia3210.cameraNumber);
console.log(Nokia3210.price);

console.log("\nMóvil iPhone3G");
console.log(iPhone3G.name);
console.log(iPhone3G.model);
console.log(iPhone3G.trademark);
console.log(iPhone3G.sdSize);
console.log(iPhone3G.color);
console.log(iPhone3G.is5G);
console.log(iPhone3G.cameraNumber);
console.log(iPhone3G.price);

console.log("\nMóvil Samsung");
console.log(Samsung.name);
console.log(Samsung.model);
console.log(Samsung.trademark);
console.log(Samsung.sdSize);
console.log(Samsung.color);
console.log(Samsung.is5G);
console.log(Samsung.cameraNumber);
console.log(Samsung.price);

Nokia3210.is5G = true;
Nokia3210.cameraNumber = 4;
console.log("")

console.log(Nokia3210.is5G);
console.log(Nokia3210.cameraNumber);
