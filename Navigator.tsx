import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomePageComponent from "./shared/components/pages/welcome-page.component";
import {NavigationContainer} from "@react-navigation/native";
import HomePageComponent from "./shared/components/pages/home-page.component";

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
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigator;