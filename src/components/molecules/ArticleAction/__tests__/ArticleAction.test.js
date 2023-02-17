import 'react-native';
jest.mock('react-native-device-info', () => {
  return {
    hasNotch: () => true,
  };
});
import React from 'react';
import renderer from 'react-test-renderer';
import {getArticles} from '../../../../service/articleServices';
import ArticleAction from '../ArticleAction';
import color from '../../../../styles/colors';
console.log('getArticles ==> ', getArticles(1), typeof getArticles(1));

test('FollowerArticles rendered correctly', () => {
  const snap = renderer
    .create(
      <ArticleAction
        iconFamily="AntDesign"
        iconName="like1"
        iconColor={color.mainBlue}
        label="Like"
        onPress={() => {}}
      />,
    )
    .toJSON();

  expect(snap).toMatchSnapshot();
});
