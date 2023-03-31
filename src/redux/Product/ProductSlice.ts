import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Product } from "./type";

export const ProductSlice = createSlice({
    name: "product",
    initialState: [] as Product[],
    reducers: {
        
    }
})