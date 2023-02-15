import React, {useEffect, useState} from 'react';
import UserContext from './src/contexts/UserContext';
import {getUserInfo} from './src/service/userSevices';
import ThemeContext from './src/contexts/ThemeContext';

export default function ContextProvider({children}) {
  const [userInfo, setUserInfo] = useState({}); // get from AsyncStorage
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // To-do: Check userInfo in AsyncStorage
    const _userInfo = getUserInfo();
    setUserInfo(_userInfo);
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    </ThemeContext.Provider>
  );
}
