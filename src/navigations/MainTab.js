import React, {useCallback, useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getMainTabRoutes} from '../utils/routes';
import Icon from '../components/atoms/Icon';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

export default function MainTab() {
  const routes = useMemo(() => getMainTabRoutes(), []);

  const renderTabIcon = useCallback((color, route) => {
    return <Icon name={route.icon} size={20} color={color} />;
  }, []);

  const renderLable = useCallback((label, color) => {
    return <Text style={{paddingBottom: 2, color: color}}>{label}</Text>;
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
              headerShown: false,
              tabBarLabel: ({color}) => renderLable(route.label, color),
              tabBarIcon: ({color}) => renderTabIcon(color, route),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
