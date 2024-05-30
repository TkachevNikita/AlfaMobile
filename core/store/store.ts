import { configureStore } from '@reduxjs/toolkit'
import restaurantSlice from "./slices/restaurantSlice";
import menuSlice from "./slices/menuSlice";
import orderSlice from "./slices/orderSlice";

export const store = configureStore({
    reducer: {
        restaurants: restaurantSlice,
        menu: menuSlice,
        order: orderSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch