import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RestaurantService} from "../../services/restaurantService";
import {IMenu} from "../../intrefaces/IMenu";

export const fetchMenu = createAsyncThunk(
    'restaurants/fetchMenu', (orgId: string) => {
        const restaurantsService = new RestaurantService();
        return restaurantsService.getMenu(orgId);
    }
);

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menu: [] as IMenu[],
        status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
        error: null as string | null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchMenu.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMenu.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.menu = action.payload;
            })
            .addCase(fetchMenu.rejected, (state, action) => {
                state.status = 'failed';
                state.error = 'error';
            });
    },
});

export default menuSlice.reducer;
