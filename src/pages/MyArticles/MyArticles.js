import React, {useCallback} from 'react';
import ArticleListLayout from '../../components/layouts/ArticlesListLayout/ArticleListLayout';
import useArticles from '../../hooks/useArticles';

const FollowerArticles = ({navigation, route}) => {
  const [loginedUser, ownerInfo, articles] = useArticles(route?.params?.userId);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ArticleListLayout
      loginedUser={loginedUser}
      articles={articles}
      articlesOwner={ownerInfo}
      title="My Articles"
      goBack={goBack}
      navigation={navigation}
    />
  );
};

export default FollowerArticles;
