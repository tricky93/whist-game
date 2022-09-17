import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/home/home';
import DetailsScreen from './src/components/details/details';
import SettingsScreen from './src/components/settings/settings';
import RulesScreen from './src/components/rules/rules';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Rules" component={RulesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
