import { Mobile } from "./Mobile";          //Importo la clase Mobile

//Creo los 3 objetos que se pedían.    
let Nokia3210:Mobile = new Mobile("Nokia3210","3210", "Nokia", 8, "rojo", false, 2, 55);
let iPhone3G:Mobile = new Mobile("iPhone3G","10", "iPhone", 32, "azul", true, 4, 115);
let Samsung:Mobile = new Mobile("SamsungGalaxy10","Galaxy 10", "Samsung", 16, "negro", true, 3, 95);



console.log("Móvil Nokia3210");
console.log(Nokia3210.getName());
console.log(Nokia3210.getModel());
console.log(Nokia3210.getTrademark());
console.log(Nokia3210.getSdSize());
console.log(Nokia3210.getColor());
console.log(Nokia3210.getIs5G());
console.log(Nokia3210.getCameraNumber());
console.log(Nokia3210.getPrice());
Nokia3210.printAll();

let arrayMoviles = [Nokia3210,iPhone3G,Samsung]      //Creo un array de los 3 objetos que he creado al principio 
for(let i = 0; i< arrayMoviles.length; i++){            //Recorro el array
  arrayMoviles[i].printAll();
}