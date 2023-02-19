import React, {useEffect, useState} from 'react';
import UserContext from './src/contexts/UserContext';
import {getUserInfo} from './src/service/userSevices';
import ThemeContext from './src/contexts/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ContextProvider({children}) {
  const [userInfo, setUserInfo] = useState(null); // get from AsyncStorage
  const [theme, setTheme] = useState('light');
  const [articlesLiked, setArticlesLiked] = useState([]);

  const handleLike = articleId => {
    let newArr;
    if (articlesLiked.includes(articleId)) {
      newArr = articlesLiked.filter(a => a !== articleId);
      setArticlesLiked(newArr);
    } else {
      newArr = [...articlesLiked, articleId];
      setArticlesLiked(newArr);
    }
    AsyncStorage.setItem('articlesLiked', JSON.stringify(newArr));
  };

  useEffect(() => {
    (async () => {
      const initialState = await AsyncStorage.getItem('articlesLiked');
      if (initialState) {
        setArticlesLiked(JSON.parse(initialState));
      }
    })();

    const _userInfo = getUserInfo();
    setUserInfo(_userInfo);
  }, []);

  return (
    <UserContext.Provider value={[userInfo, articlesLiked, handleLike]}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        {children}
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
