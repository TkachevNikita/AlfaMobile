import { configureStore } from '@reduxjs/toolkit'
import restaurantSlice from "./slices/restaurantSlice";
import menuSlice from "./slices/menuSlice";

export const store = configureStore({
    reducer: {
        restaurants: restaurantSlice,
        menu: menuSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch