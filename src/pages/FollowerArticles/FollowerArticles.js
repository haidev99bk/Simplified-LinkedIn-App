import React, {useCallback} from 'react';

import ArticleListLayout from '../../components/layouts/ArticlesListLayout/ArticleListLayout';
import useArticles from '../../hooks/useArticles';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import {View, Text} from 'react-native';
import styles from './style';

const FollowerArticles = ({navigation, route}) => {
  const [loginedUser, ownerInfo, articles, articlesLiked, handleLike] =
    useArticles(route?.params?.userId);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  if (!route?.params?.userId) {
    return (
      <DefaultLayout>
        <View style={styles.exceptionContainer}>
          <Text style={styles.exceptionText}>
            Please comeback to Network screen and select the follower first.
          </Text>
        </View>
      </DefaultLayout>
    );
  }

  return (
    <ArticleListLayout
      testID={'followers-articles'}
      loginedUser={loginedUser}
      articles={articles}
      articlesOwner={ownerInfo}
      title="Follower Articles"
      goBack={goBack}
      handleLike={handleLike}
      articlesLiked={articlesLiked}
      navigation={navigation}
    />
  );
};

export default FollowerArticles;
