import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from '../features/auth/SplashScreen'

const Stack = createNativeStackNavigator()

const Navigations: FC = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='SplashScreen'
            screenOptons={{headerShown: false}}
        >
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigations