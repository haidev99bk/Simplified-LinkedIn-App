import 'react-native';
jest.mock('react-native-device-info', () => {
  return {
    hasNotch: () => true,
  };
});
import React from 'react';
import renderer from 'react-test-renderer';
import ArticleAction from '../ArticleAction';
import color from '../../../../styles/colors';

test('ArticleAction rendered correctly', () => {
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
