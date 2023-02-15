import React, {useCallback, useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getMainTabRoutes} from '../utils/routes';
import Icon from '../components/atoms/Icon';

const Tab = createBottomTabNavigator();

export default function MainTab() {
  const routes = useMemo(() => getMainTabRoutes(), []);

  const renderTabIcon = useCallback((color, route) => {
    return <Icon name={route.icon} size={20} color={color} />;
  }, []);

  return (
    <Tab.Navigator>
      {routes.map((route = {}, i) => {
        return (
          <Tab.Screen
            key={i.toString()}
            name={route.name}
            component={route.screen}
            options={{
              tabBarLabel: route.label,
              tabBarIcon: ({color}) => renderTabIcon(color, route),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
