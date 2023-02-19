import React, {useCallback} from 'react';
import ArticleListLayout from '../../components/layouts/ArticlesListLayout/ArticleListLayout';
import useArticles from '../../hooks/useArticles';

const MyArticles = ({navigation, route}) => {
  const [loginedUser, ownerInfo, articles] = useArticles(route?.params?.userId);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ArticleListLayout
      testID={'my-articles-screen'}
      loginedUser={loginedUser}
      articles={articles}
      articlesOwner={ownerInfo}
      title="My Articles"
      goBack={goBack}
      navigation={navigation}
    />
  );
};

export default MyArticles;
