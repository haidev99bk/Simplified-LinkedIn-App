import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getMainTabRoutes} from '../utils/routes';

const Tab = createBottomTabNavigator();

export default function MainTab() {
  // add role
  const routes = useMemo(() => getMainTabRoutes(), []);

  return (
    <Tab.Navigator>
      {routes.map((route = {}, i) => {
        return (
          <Tab.Screen
            key={i.toString()}
            name={route.name}
            component={route.screen}
            options={{
              // tabBarIcon: <Icon />,
              tabBarLabel: route.label,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
