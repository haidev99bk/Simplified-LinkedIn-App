import 'react-native';
import React from 'react';
import AvatarIcon from '../AvatarIcon';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('AvatarIcon rendered correctly', () => {
  const snap = renderer.create(<AvatarIcon />).toJSON();

  expect(snap).toMatchSnapshot();
});
