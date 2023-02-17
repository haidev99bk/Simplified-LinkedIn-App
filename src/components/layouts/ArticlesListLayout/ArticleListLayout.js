import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import DefaultLayout from '../DefaultLayout';
import ArticleCard from '../../template/ArticleCard';
import styles from './styles';

const ArticleListLayout = props => {
  const {
    articles,
    loginedUser,
    articlesOwner,
    title,
    goBack,
    handleLike,
    articlesLiked,
  } = props;

  const _handleLike = useCallback(
    articleId => {
      if (loginedUser.userId !== articlesOwner.userId && handleLike) {
        handleLike(articleId);
      }
    },
    [loginedUser, articlesOwner, handleLike],
  );

  const renderItem = ({item}) => {
    return (
      <ArticleCard
        canLike={loginedUser.userId !== articlesOwner.userId}
        handleLike={_handleLike}
        user={articlesOwner}
        article={item}
        hasLiked={articlesLiked && articlesLiked.includes(item.articleId)}
      />
    );
  };

  return (
    <DefaultLayout style={styles.container} title={title} goBack={goBack}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={item => item.articleId}
      />
    </DefaultLayout>
  );
};

export default ArticleListLayout;
