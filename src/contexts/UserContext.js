import React from 'react';
import {getUserInfo} from '../service/userSevices';

const UserContext = React.createContext(getUserInfo());

export default UserContext;
