import 'react-native';
jest.mock('react-native-device-info', () => {
  return {
    hasNotch: () => 4,
  };
});
import React from 'react';
import ArticleListLayout from '../ArticleListLayout';
import renderer from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';
test('ArticleListLayout rendered correctly', () => {
  const snap = renderer
    .create(
      <NavigationContainer>
        <ArticleListLayout />
      </NavigationContainer>,
    )
    .toJSON();

  expect(snap).toMatchSnapshot();
});
