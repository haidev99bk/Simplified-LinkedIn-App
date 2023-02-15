import {mainTabNavigationRoutes} from '../config/routes';
import {Roles} from '../constants/common';

export const getMainTabRoutes = (role = Roles.CUSTOMER) => {
  return mainTabNavigationRoutes;
};
