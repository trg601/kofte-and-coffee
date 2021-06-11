import { ItemOptions } from './itemOptions.model';

export class Item {
    public name: string;
    public price: number;
    public calories: number;
    public description: string;
    public imgURL: string;
    public options: ItemOptions[];

    constructor(name: string, price: number, calories: number, description: string, imgURL: string) {
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.description = description;
        this.imgURL = imgURL;
        this.options = new Array<ItemOptions>();
    }

    public addOption(optionName: string, options: string[]) {
        this.options.push(new ItemOptions(optionName, options));
    }
}