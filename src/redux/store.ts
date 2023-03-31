import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Slice } from "./Product/Slice";

// store configuration with reducers
export const store = configureStore({
    reducer: {
        slice: Slice.reducer,
    }
});

// Dispatch and Selectors constants for efficient usability
// UseDispatch returns the store's dispatch to dispatch actions
export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
// UseSelector reads a value from the store state
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;