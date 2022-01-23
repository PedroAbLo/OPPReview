import { MobileLibrary } from "./mobileLibrary";
import { Mobile } from "./Mobile";

let Nokia3210:Mobile = new Mobile("Nokia3210","3210", "Nokia", 8, "rojo", false, 2, 55);
let iPhone3G:Mobile = new Mobile("iPhone3G","10", "iPhone", 32, "azul", true, 4, 115);
let Samsung:Mobile = new Mobile("SamsungGalaxy10","Galaxy 10", "Samsung", 16, "negro", true, 3, 95);
let Xiaomi:Mobile = new Mobile("Aqua5", "mi8", "Xiaomi", 8, "azul", true, 4, 90);

let moviles = [Nokia3210,iPhone3G,Samsung,Xiaomi];

let libreria1:MobileLibrary = new MobileLibrary("Librería Archena", "Archena", moviles);


console.log(libreria1.getMobiles());
console.log(libreria1.getName());
console.log(libreria1.getLocation());
libreria1.totalPriceCalculation();

