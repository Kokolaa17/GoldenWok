import { Products } from "./products";

export interface CategoryProducts {
    id: number;
    name: string;
    products: Products[];
}
