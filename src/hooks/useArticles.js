import UserContext from '../contexts/UserContext';
import {getUserInfo} from '../service/userSevices';

const {useContext, useState, useEffect} = require('react');
const {getArticles} = require('../service/articleServices');

const useArticles = userId => {
  const [loginedUser, articlesLiked, handleLike] = useContext(UserContext);

  const _userId = userId ? userId : loginedUser.userId;

  const [ownerInfo, setOwnerInfo] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const res = getArticles(_userId);
    if (res) {
      setArticles(res);
    }

    const _owner = getUserInfo(_userId);
    if (_owner) {
      setOwnerInfo(_owner);
    }
  }, [_userId]);

  return [loginedUser, ownerInfo, articles, articlesLiked, handleLike];
};

export default useArticles;
