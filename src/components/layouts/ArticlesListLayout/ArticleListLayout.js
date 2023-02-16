import {FlatList} from 'react-native';
import React from 'react';
import DefaultLayout from '../DefaultLayout';
import ArticleCard from '../../template/ArticleCard';

const ArticleListLayout = props => {
  const {
    articles,
    loginedUser,
    articlesOwner,
    title,
    isFollowerArticles = true,
    goBack,
  } = props;

  const renderItem = ({item}) => {
    return (
      <ArticleCard
        showLike={loginedUser.userId !== articlesOwner.userId}
        user={articlesOwner}
        article={item}
      />
    );
  };

  return (
    <DefaultLayout title={title} goBack={goBack}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={item => item.articleId}
      />
    </DefaultLayout>
  );
};

export default ArticleListLayout;
