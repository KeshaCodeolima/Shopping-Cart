import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState: {
        cart:[]
    },
    reducers:{

    }
})

export default CartSlice.reducer;
export const{} = CartSlice.actions;