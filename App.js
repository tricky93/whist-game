import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/components/home/home';
import DetailsScreen from './src/components/details/details';
import SettingsScreen from './src/components/settings/settings';
import RulesScreen from './src/components/rules/rules';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            tabBarLabel: 'Details',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="skull" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Rules"
          component={RulesScreen}
          options={{
            tabBarLabel: 'Rules',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="robot-angry"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="cogs" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
