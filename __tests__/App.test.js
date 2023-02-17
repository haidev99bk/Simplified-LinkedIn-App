import 'react-native';
jest.mock('react-native-device-info', () => {
  return {
    hasNotch: () => true,
  };
});
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
test('FollowerArticles rendered correctly', () => {
  const snap = renderer.create(<App />).toJSON();

  expect(snap).toMatchSnapshot();
});
