export {};

interface Car {
    model: string;
    manufacturer: string;
    year: number;
    color: string;
    inWarranty: boolean
    miles?: number;
}

const corolla: Car = {
    model: "Corolla",
    manufacturer: "Toyota",
    year: 2006,
    color: "Red",
    inWarranty: true
}

interface Console {
    model:string;
    company:string;
    cost:number;
    color:string;
}
const ps5: Console= {
    model:"ps5",
    company:"Sony",
    cost:500,
    color:"White"


}