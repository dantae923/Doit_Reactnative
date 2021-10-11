import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  useEffect(() => {

  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={}></Stack.Screen>
        {/* <Stack.Screen name="Scan" component={}></Stack.Screen>
        <Stack.Screen name="Payment" component={}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
