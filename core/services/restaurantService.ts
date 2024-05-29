import axios from "axios";
import {RestaurantResponse} from "../responses/RestaurantResponse";
import {IRestaurant} from "../intrefaces/IRestaurant";
import {environment} from "../../environments/environment";
import {IMenu} from "../intrefaces/IMenu";

export class RestaurantService {
    public async getRestaurants(point: string): Promise<IRestaurant[]> {
        try {
            const response = await axios.get<RestaurantResponse>(
                `${environment.apiUrl}/locations/restaurants`, { params: { 'Point': point, 'Radius': 200}}
            );

            return response.data.restaurants;
        } catch (error) {
            throw error;
        }
    }

    public async getMenu(orgId: string): Promise<IMenu[]> {
        try {
            const response = await axios.get<IMenu[]>(
                `${environment.apiUrl}/restaurant/menu`, { params: { 'orgId': orgId }}
            );

            return response.data;
        }

        catch (error) {
            throw error;
        }
    }
}