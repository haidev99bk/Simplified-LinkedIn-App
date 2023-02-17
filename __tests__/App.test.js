import 'react-native';
jest.mock('react-native-device-info', () => {
  return {
    hasNotch: () => true,
  };
});
import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';
test('App rendered correctly', () => {
  const snap = render(<App />).toJSON();

  expect(snap).toMatchSnapshot();
});
