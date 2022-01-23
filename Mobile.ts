export class Mobile
{
    public name:string;
    public model:string;
    public trademark:string;
    public sdSize:number;
    public color:string;
    public is5G:boolean;
    public cameraNumber:number;
    public price:number;

    constructor(name:string, model:string, trademark:string,
                sdSize:number, color:string, is5g:boolean,
                cameraNumber:number, price:number)
    {
        this.name=name;
        this.model=model;
        this.trademark=trademark;
        this.sdSize=sdSize;
        this.color=color;
        this.is5G=is5g;
        this.cameraNumber=cameraNumber;
        this.price=price;
    }

    public getName(){
        return this.name;
    }
    public setName(name:string){
        this.name = name;
    }
    public getModel(){
        return this.model;
    }
    public setModel(model:string){
        this.model = model;
    }
    public getTrademark(){
        return this.trademark;
    }
    public setTrademark(trademark:string){
        this.trademark = trademark;
    }
    public getSdSize(){
        return this.sdSize;
    }
    public setSdSize(sdSize:number){
        this.sdSize = sdSize;
    }
    public getColor(){
        return this.color;
    }
    public setColor(color:string){
        this.color = color;
    }
    public getIs5G(){
        return this.is5G;
    }
    public setIs5G(is5g:boolean){
        this.is5G = is5g;
    }
    public getCameraNumber(){
        return this.cameraNumber;
    }
    public setCameraNumber(cameraNumber:number){
        this.cameraNumber = cameraNumber;
    }
    public getPrice(){
        return this.price;
    }
    public setPrice(price:number){
        this.price = price;
    }
    
    
    public printAll(){

        console.log("\"The characteristics of the mobile" +this.getName() + "are\"" +
        "\nName: " + this.getName() +
        "\nModel: " + this.getModel() +
        "\nTrademark: " + this.getTrademark() +
        "\nSD Size (GB): " + this.getSdSize() +
        "\nColor: " + this.getColor() +
        "\nIs 5G?: " + this.getIs5G() +
        "\nNumber of Cameras: " + this.getCameraNumber());
    }

}


