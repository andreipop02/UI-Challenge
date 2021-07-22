import React from 'react';
import {Icon} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import roots from './roots';
import Onboarding from '../screens/OnboardingScreen';
import Home from '../screens/HomeScreen';
import {colors, metrics} from '../constants';
import Profile from '../screens/ProfileScreen';
import LocalStorage from '../screens/LocalStorageScreen';
import Notifications from '../screens/NotificationsScreen';
import Upload from '../components/Upload';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultNavigationOptions = () => ({
  gestureEnabled: false,
  headerShown: false,
});
const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={defaultNavigationOptions}
      initialRouteName={roots.homeScreen}
      tabBarOptions={{showLabel: false,
      activeTintColor:colors.dodgerBlue,
      inactiveTintColor: colors.gullGray}}>
      <Tab.Screen
        name={roots.homeScreen}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              type="font-awesome"
              size={metrics.size25}
              color={focused ? colors.dodgerBlue : colors.gullGray}
            />            
          ),
        }}
      />
      <Tab.Screen
        name={roots.localStorageScreen}
        component={LocalStorage}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="check-square"
              type="font-awesome"
              size={metrics.size25}
              color={focused ? colors.dodgerBlue : colors.gullGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Upload'}
        component={Upload}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="plus-square"
              type="font-awesome"
              size={metrics.size35}
              color={focused ? colors.dodgerBlue : colors.gullGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name={roots.notificationsScreen}
        component={Notifications}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="bell"
              type="font-awesome"
              size={metrics.size25}
              color={focused ? colors.dodgerBlue : colors.gullGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name={roots.profileScreen} 
        
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              type="font-awesome"
              size={metrics.size25}
              color={focused ? colors.dodgerBlue : colors.gullGray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={defaultNavigationOptions}
        initialRouteName={roots.onboardingScreen}>
        <Stack.Screen name={roots.onboardingScreen} component={Onboarding} />
        <Stack.Screen name={roots.homeScreen} component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
