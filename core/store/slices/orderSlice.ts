import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {OrderService} from "../../services/orderService";
import {IFood} from "../../intrefaces/IFood";

export const fetchBasket = createAsyncThunk(
    'order/fetchBasket', async () => {
        const orderService = new OrderService();
        return await orderService.fetchBasket();
    }
);

export const orderAddToBasket = createAsyncThunk(
    'order/addToBasket', async (item: IFood) => {
        const orderService = new OrderService();
        return await orderService.addToBasket(item);
    }
);

export const removeFromBasket = createAsyncThunk(
    'order/removeFromBasket', async (id: string) => {
        const orderService = new OrderService();
        return await orderService.removeFromBasket(id);
    }
);

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: null,
        basket: [] as IFood[],
        status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
        error: null as string | null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchBasket.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBasket.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.basket = action.payload;
            })
            .addCase(fetchBasket.rejected, (state, action) => {
                state.status = 'failed';
                state.error = 'error';
            });
    },
});

export default orderSlice.reducer;
