import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ComponentScreen1 from './src/components/ComponentScreen1';
import ComponentLogin from './src/components/ComponentLogin';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ComponentScreen1" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ComponentScreen1" component={ComponentScreen1} />
                <Stack.Screen name="ComponentLogin" component={ComponentLogin} />
                {/* <Stack.Screen name="Layout_1c" component={Layout1c} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}


