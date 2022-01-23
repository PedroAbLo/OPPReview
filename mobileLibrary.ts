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
        this.totalPrice = 0;
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
    }

    public totalPriceCalculation():void{
        let SumaTotal = 0;
        for(let i = 0; i < this.mobiles.length; i++){
            SumaTotal += this.mobiles[i].getPrice();
        }
        console.log(SumaTotal);

    }



}

