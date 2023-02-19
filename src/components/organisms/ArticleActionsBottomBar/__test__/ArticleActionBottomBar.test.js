import 'react-native';
jest.mock('react-native-device-info', () => {
  return {
    hasNotch: () => true,
  };
});
import React from 'react';
import {render} from '@testing-library/react-native';
import ArticleActionsBottomBar from '../ArticleActionsBottomBar';

const props = {
  actions: [
    {
      iconFamily: 'AntDesign',
      iconName: 'like2',
      label: 'Like',
    },
    {
      iconFamily: 'Foundation',
      iconName: 'loop',
      label: 'Repost',
    },
    {
      iconFamily: 'FontAwesome',
      iconName: 'comment',
      label: 'Comment',
    },
    {
      iconFamily: 'Feather',
      iconName: 'send',
      label: 'Send',
    },
  ],
  comments: 10,
  likes: 10,
  hasLiked: true,
  articleId: 2,
};

test('ArticleActionsBottomBar rendered correctly', () => {
  const snap = render(<ArticleActionsBottomBar {...props} />).toJSON();

  expect(snap).toMatchSnapshot();
});
