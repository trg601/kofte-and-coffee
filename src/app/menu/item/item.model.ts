
export class Item {
    public name: string;
    public price: number;
    public calories: number;
    public description: string;
    public imgURL: string;

    constructor(name: string, price: number, calories: number, description: string, imgURL: string) {
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.description = description;
        this.imgURL = imgURL;
    }
}