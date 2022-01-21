import { Mobile } from "./Mobile";          //Importo la clase Mobile


//Creo los 3 objetos que se pedían.    
let Nokia3210:Mobile = new Mobile("Nokia3210","3210", "Nokia", 8, "rojo", false, 2, 55);
let iPhone3G:Mobile = new Mobile("iPhone3G","10", "iPhone", 32, "azul", true, 4, 115);
let Samsung:Mobile = new Mobile("SamsungGalaxy10","Galaxy 10", "Samsung", 16, "negro", true, 3, 95);


for(const atributo in Nokia3210){                //imprimo los atributos del objeto Nokia3210
    console.log(Nokia3210[atributo]);
}
for(const atributo in iPhone3G ){                //imprimo los atributos del objeto iPhone3G
    console.log(iPhone3G[atributo]);
}
for(const atributo in Samsung){                    //imprimo los atributos del objeto Samsung
    console.log(Samsung[atributo]);
}


Nokia3210.is5G = true;
Nokia3210.cameraNumber = 4;

let arrayMoviles = [Nokia3210,iPhone3G,Samsung]      //Creo un array de los 3 objetos que he creado al principio 
for(let i = 0; i< arrayMoviles.length; i++){            //Recorro el array
    for(const atributo in arrayMoviles[i]){             //Imprimo todos los atributos de los 3 objetos creados
        console.log(arrayMoviles[i][atributo]);
    }
}
