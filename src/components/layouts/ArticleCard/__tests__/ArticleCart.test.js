import 'react-native';
jest.mock('react-native-device-info', () => {
  return {
    hasNotch: () => true,
  };
});
import React from 'react';
import renderer from 'react-test-renderer';
import {getArticles} from '../../../../service/articleServices';
import {getUserInfo} from '../../../../service/userSevices';
import ArticleCard from '../ArticleCard';

test('ArticleCard rendered correctly', () => {
  const snap = renderer
    .create(
      <ArticleCard
        user={getUserInfo(1)}
        article={getArticles(1)[0]}
        handleLike={() => {}}
        hasLiked={true}
      />,
    )
    .toJSON();

  expect(snap).toMatchSnapshot();
});
