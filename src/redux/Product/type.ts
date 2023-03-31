export interface Product {
    id: number,
    name: string,
    code_number: string,
    price: number,
    image_url: string,
    sizes: Sizes[],
    itemsInStock: number,
}

export interface Sizes {
    size_number: number,
    qty_of_size: number,
    selectedSize: number
}

export interface CartProduct extends Product {
    qty: number,
    index?: number
}