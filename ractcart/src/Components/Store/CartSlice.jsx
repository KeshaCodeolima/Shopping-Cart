import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState: {
        cart:[]
    },
    reducers:{
        addcart:(state,action)=>{
            const {id, quantity} = action.payload;
            const productquantity = (state.cart).findIndex(item=> item.id === id);
            if (productquantity >= 0) {
                state.cart[productquantity].quantity += quantity;
            }else{
                state.cart.push(action.payload)
            }
        },
        removecart: (state,action)=>{
            state.cart = state.cart.filter(x=>x.id !== action.payload.id)
        }
    }
})

export default CartSlice.reducer;
export const{addcart,removecart} = CartSlice.actions;