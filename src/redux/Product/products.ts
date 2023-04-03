import { Product } from "./type";

// typing products array with Product<Array> Type
export const Products: Product[] = [
    {
        id: 1,
        name: 'Ray-Ban Wayfarer',
        code_number: 'RB3210 2112A',
        price: 120.60, 
        image_url: 'https://immagini.trovaprezzi.it/varianti/ray_ban_wayfarer_classic_original.jpg',
        sizes: [{size_number: 50, qty_of_size: 3, selectedSizeQty: 0}, {size_number: 52, qty_of_size: 2, selectedSizeQty: 0}],
    },
    {
        id: 2,
        name: 'Ray-Ban Round',
        code_number: 'RB9210 1149',
        price: 166.00, 
        image_url: 'https://immagini.trovaprezzi.it/varianti/ray_ban_wayfarer_classic_original.jpg',
        sizes: [{size_number: 50, qty_of_size: 1, selectedSizeQty: 0}, {size_number: 52, qty_of_size: 1, selectedSizeQty: 0}, {size_number: 53, qty_of_size: 2, selectedSizeQty: 0}],
    },
    {
        id: 3,
        name: 'Ray-Ban Clubmaster',
        code_number: 'RB3594 9093CB 53',
        price: 152.00, 
        image_url: 'https://immagini.trovaprezzi.it/varianti/ray_ban_wayfarer_classic_original.jpg',
        sizes: [{size_number: 50, qty_of_size: 2, selectedSizeQty: 0}, {size_number: 52, qty_of_size: 2, selectedSizeQty: 0}],
    },
    {
        id: 4,
        name: 'Ray-Ban RB3594',
        code_number: 'RB3594 2345 53',
        price: 259.90, 
        image_url: 'https://immagini.trovaprezzi.it/varianti/ray_ban_wayfarer_classic_original.jpg',
        sizes: [{size_number: 50, qty_of_size: 4, selectedSizeQty: 0}],
    },
    {
        id: 5,
        name: 'Ray-Ban Aviator',
        code_number: 'RB6211 5122A 50',
        price: 150.90,
        image_url: 'https://immagini.trovaprezzi.it/varianti/ray_ban_wayfarer_classic_original.jpg',
        sizes: [{size_number: 50, qty_of_size: 2, selectedSizeQty: 0}, {size_number: 52, qty_of_size: 1, selectedSizeQty: 0}],
    }
]