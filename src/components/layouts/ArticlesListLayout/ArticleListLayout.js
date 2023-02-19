import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import DefaultLayout from '../DefaultLayout';
import styles from './styles';
import ArticleCard from '../ArticleCard';

const ArticleListLayout = props => {
  const {
    articles,
    loginedUser,
    articlesOwner,
    title,
    goBack,
    handleLike,
    articlesLiked,
    navigation,
    testID,
  } = props;

  const _handleLike = useCallback(
    articleId => {
      if (loginedUser.userId !== articlesOwner.userId && handleLike) {
        handleLike(articleId);
      }
    },
    [loginedUser, articlesOwner, handleLike],
  );

  const renderItem = ({item, index}) => {
    return (
      <ArticleCard
        tesID={'article-' + index}
        canLike={loginedUser.userId !== articlesOwner.userId}
        handleLike={_handleLike}
        user={articlesOwner}
        article={item}
        hasLiked={articlesLiked && articlesLiked.includes(item.articleId)}
      />
    );
  };

  return (
    <DefaultLayout
      testID={testID}
      style={styles.container}
      title={title}
      goBack={goBack}
      navigation={navigation}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={item => item.articleId}
      />
    </DefaultLayout>
  );
};

export default React.memo(ArticleListLayout);
