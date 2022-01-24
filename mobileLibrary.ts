import { Mobile } from "./Mobile";

export class MobileLibrary{

    private name:string;
    private location:string;
    private mobiles: Mobile[];
    private totalPrice:number;


    constructor(name:string, location:string, mobiles:Mobile[]){

        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    public getName():string{
        return this.name;
    }
    public setName(name:string):void{
        this.name = name;
    }

    public getLocation():string{
        return this.location;
    }
    public setLocation(location:string):void{
        this.location = location;
    }

    public getMobiles():Mobile[]{
        return this.mobiles;
    }
    public setMobiles(mobiles:Mobile[]):void{
        this.mobiles =  mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    public addMobile(mobile:Mobile):void{           
        this.mobiles.push(mobile);
        this.totalPrice = this.totalPriceCalculation();
    }

    private totalPriceCalculation():number{
        let SumaTotal = 0;
        for(let i = 0; i < this.mobiles.length; i++){
            SumaTotal += this.mobiles[i].getPrice();
        }
        return SumaTotal;
    }

    public printLibrary():void{
       
        for(let i = 0; i< this.mobiles.length; i++){
            if(i == 0){
                console.log("This is all my mobiles:");
                this.mobiles[i].printAll();
            }else if(i!== 0){
                this.mobiles[i].printAll();
            }    
        }

        console.log("Price overall: " + this.totalPrice);
    }



}

let Nokia3210:Mobile = new Mobile("Nokia3210","3210", "Nokia", 8, "rojo", false, 2, 55);
let iPhone3G:Mobile = new Mobile("iPhone3G","10", "iPhone", 32, "azul", true, 4, 115);
let Samsung:Mobile = new Mobile("SamsungGalaxy10","Galaxy 10", "Samsung", 16, "negro", true, 3, 95);
let Xiaomi:Mobile = new Mobile("Aqua5", "mi8", "Xiaomi", 8, "azul", true, 4, 90);

let moviles = [Nokia3210,iPhone3G,Samsung,Xiaomi];

let libreria1:MobileLibrary = new MobileLibrary("Librería Archena", "Archena", moviles);
libreria1.addMobile(Xiaomi);


console.log(libreria1.getMobiles());
console.log(libreria1.getName());
console.log(libreria1.getLocation());
// libreria1.totalPriceCalculation();
libreria1.printLibrary();




