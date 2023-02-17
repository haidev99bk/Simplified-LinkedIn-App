import 'react-native';
jest.mock('react-native-device-info', () => {
  return {
    hasNotch: () => true,
  };
});
import React from 'react';
import renderer from 'react-test-renderer';
import ArticleListLayout from '../ArticleListLayout';
import {getArticles} from '../../../../service/articleServices';
import {getUserInfo} from '../../../../service/userSevices';

test('ArticleListLayout rendered correctly', () => {
  const snap = renderer
    .create(
      <ArticleListLayout
        loginedUser={getUserInfo(1)}
        articles={getArticles(1)}
        articlesOwner={getUserInfo(1)}
        title="Follower Articles"
        goBack={() => {}}
        handleLike={() => {}}
        articlesLiked={[3]}
        navigation={jest.fn()}
      />,
    )
    .toJSON();

  expect(snap).toMatchSnapshot();
});
