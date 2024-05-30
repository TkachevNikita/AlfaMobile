import { IFood } from "../intrefaces/IFood";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class OrderService {
    private readonly _STORAGE_KEY: string = "BASKET";

    public async addToBasket(food: IFood): Promise<void> {
        try {
            const basket = await this.fetchBasket();

            if (basket) {
                basket.push(food);
                await AsyncStorage.setItem(this._STORAGE_KEY, JSON.stringify(basket));
            } else {
                await AsyncStorage.setItem(this._STORAGE_KEY, JSON.stringify([food]));
            }
        } catch (error) {
            throw("Ошибка добавления в корзину");
        }
    }

    public async fetchBasket(): Promise<IFood[]> {
        try {
            const basketString = await AsyncStorage.getItem(this._STORAGE_KEY);
            if (basketString) {
                return JSON.parse(basketString);
            } else {
                return [];
            }
        } catch (error) {
            console.error("Ошибка получения корзины");
            return [];
        }
    }

    public async removeFromBasket(foodId: string): Promise<void> {
        try {
            const basket = await this.fetchBasket();
            const index: number = basket.findIndex(obj => obj.id === foodId);
            if (index !== -1) {
                basket.splice(index, 1);
            }
            await AsyncStorage.setItem(this._STORAGE_KEY, JSON.stringify(basket));
        } catch (error) {
            throw ("Ошибка удаления из корзины");
        }
    }
}
