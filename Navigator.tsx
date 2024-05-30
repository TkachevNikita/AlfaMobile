import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomePageComponent from "./shared/components/pages/welcome-page.component";
import {NavigationContainer} from "@react-navigation/native";
import HomePageComponent from "./shared/components/pages/home-page.component";
import ShakePageComponent from "./shared/components/pages/shake-page.component";
import RestaurantPageComponent from "./shared/components/pages/restaurant-page.component";
import Menu from "./shared/components/Menu";

const Stack = createNativeStackNavigator();
const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomePageComponent}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Home"
                    component={HomePageComponent}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Shake"
                    component={ShakePageComponent}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Restaurant"
                    component={RestaurantPageComponent}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Test"
                    component={Menu}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigator;