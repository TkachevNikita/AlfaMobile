import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomePageComponent from "./shared/components/pages/home-page.component";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
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