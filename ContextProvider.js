import React, {useEffect, useState} from 'react';
import UserContext from './src/contexts/UserContext';
import {getUserInfo} from './src/service/userSevices';
import ThemeContext from './src/contexts/ThemeContext';

export default function ContextProvider({children}) {
  const [userInfo, setUserInfo] = useState(null); // get from AsyncStorage
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // To-do: Check userInfo in AsyncStorage
    const _userInfo = getUserInfo();
    setUserInfo(_userInfo);
  }, []);

  return (
    <UserContext.Provider value={userInfo}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        {children}
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
