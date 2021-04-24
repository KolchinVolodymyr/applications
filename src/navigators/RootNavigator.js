import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PersonListScreen} from '../screens/PersonListScreen';
import {PersonInfoScreen} from '../screens/PersonInfoScreen';

const Stack = createStackNavigator();

const forFade = ({ current, next }) => {
    const opacity = Animated.add(
        current.progress,
        next ? next.progress : 0
    ).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
    });

    return {
        leftButtonStyle: { opacity },
        rightButtonStyle: { opacity },
        titleStyle: { opacity },
        backgroundStyle: { opacity },
    };
};

export const RootNavigator = () => {
    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen
                name="PersonListScreen"
                component={PersonListScreen}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />
            <Stack.Screen
                name="PersonInfoScreen"
                component={PersonInfoScreen}
                options={{ headerStyleInterpolator: forFade }}
            />
        </Stack.Navigator>
    );
}