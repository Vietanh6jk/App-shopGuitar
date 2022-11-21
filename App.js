import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ComponentScreen1 from './src/components/ComponentScreen1';
import ComponentLogin from './src/components/ComponentLogin';
import ComponenHome from './src/components/ComponenHome';
import ComponentDetail from './src/components/ComponentDetail';
import ComponentCart from './src/components/ComponentCart';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ComponentScreen1" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ComponentScreen1" component={ComponentScreen1} />
                <Stack.Screen name="ComponentLogin" component={ComponentLogin} />
                <Stack.Screen name="ComponenHome" component={ComponenHome} />
                <Stack.Screen name="ComponentDetail" component={ComponentDetail} />
                <Stack.Screen name="ComponentCart" component={ComponentCart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


