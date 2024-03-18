// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import CounterScreen from './screens/CounterScreen';
import { Provider } from 'react-redux';

// import store from './context/store';
import {store} from './store/store'

const Stack = createNativeStackNavigator();

function App() {
  return (

    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Counter' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignupScreen} />
          <Stack.Screen name="Counter" component={CounterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
          
    </Provider>

  );
}

export default App;