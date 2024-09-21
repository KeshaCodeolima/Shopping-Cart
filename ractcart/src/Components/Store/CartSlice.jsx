import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState: {
        cart:[]
    },
    reducers:{
        addcart:(state,action)=>{
            state.cart.push(action.payload)
        }
    }
})

export default CartSlice.reducer;
export const{addcart} = CartSlice.actions;