import React, {useCallback} from 'react';

import ArticleListLayout from '../../components/layouts/ArticlesListLayout/ArticleListLayout';
import useArticles from '../../hooks/useArticles';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import {View, Text} from 'react-native';
import styles from './style';

const FollowerArticles = ({navigation, route}) => {
  const [loginedUser, ownerInfo, articles] = useArticles(route?.params?.userId);

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
      loginedUser={loginedUser}
      articles={articles}
      articlesOwner={ownerInfo}
      title="Follower Articles"
      goBack={goBack}
    />
  );
};

export default FollowerArticles;
