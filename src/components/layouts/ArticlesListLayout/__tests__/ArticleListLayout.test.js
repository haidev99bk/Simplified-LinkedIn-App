import 'react-native';
jest.mock('react-native-device-info', () => {
  return {
    hasNotch: () => 4,
  };
});
import React from 'react';
import ArticleListLayout from '../ArticleListLayout';
import renderer from 'react-test-renderer';
test('ArticleListLayout rendered correctly', () => {
  const snap = renderer.create(<ArticleListLayout />).toJSON();

  expect(snap).toMatchSnapshot();
});
