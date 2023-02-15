import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {getArticles} from '../../service/articleServices';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import ArticleCard from '../../components/molecules/ArticleCard';
import UserContext from '../../contexts/UserContext';
import {getUserInfo} from '../../service/userSevices';

const FollowerArticles = ({navigation, route}) => {
  const loginedUser = useContext(UserContext);
  const {userId} = route.params;
  const [ownerInfo, setOwnerInfo] = useState([]);
  const [articles, setArticles] = useState([]);
  console.log('artciles ==> ', articles);

  useEffect(() => {
    const res = getArticles(userId);
    if (res) {
      setArticles(res);
    }

    const _owner = getUserInfo(userId);
    if (_owner) {
      setOwnerInfo(_owner);
    }
  }, [userId]);

  const renderItem = ({item}) => {
    return (
      <ArticleCard
        showLike={loginedUser.userId !== userId}
        user={ownerInfo}
        article={item}
      />
    );
  };

  return (
    <DefaultLayout>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={item => item.articleId}
      />
    </DefaultLayout>
  );
};

export default FollowerArticles;
