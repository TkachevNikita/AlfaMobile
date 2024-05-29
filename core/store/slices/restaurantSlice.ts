import {IRestaurant} from "../../intrefaces/IRestaurant";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RestaurantService} from "../../services/restaurantService";

export const fetchRestaurants = createAsyncThunk(
    'restaurants/fetchRestaurants', () => {
        const restaurantsService = new RestaurantService();
        return restaurantsService.getRestaurants('60.612322166176966,56.83852677548587');
    }
);

export const selectRestaurant = createAsyncThunk(
    'restaurants/createRestaurant', (restaurant: IRestaurant) => {
        return restaurant;
    }
)

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
        restaurants: [] as IRestaurant[],
        selectedRestaurant: {} as IRestaurant,
        status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
        error: null as string | null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchRestaurants.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRestaurants.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.restaurants = action.payload;
            })
            .addCase(fetchRestaurants.rejected, (state, action) => {
                state.status = 'failed';
                state.error = 'error';
            })
            .addCase(selectRestaurant.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(selectRestaurant.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.selectedRestaurant = action.payload;
            })
            .addCase(selectRestaurant.rejected, (state, action) => {
                state.status = 'failed';
                state.error = 'error';
            });
    },
});

export default restaurantsSlice.reducer;
