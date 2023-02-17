import 'react-native';
jest.mock('react-native-device-info', () => {
  return {
    hasNotch: () => true,
  };
});
import React from 'react';
import renderer from 'react-test-renderer';
import ArticleListLayout from '../ArticleListLayout';
import {NavigationContainer} from '@react-navigation/native';
import {getArticles} from '../../../../service/articleServices';
import {getUserInfo} from '../../../../service/userSevices';
console.log('getArticles ==> ', getArticles(1), typeof getArticles(1));

test('FollowerArticles rendered correctly', () => {
  const snap = renderer
    .create(
      <NavigationContainer>
        <ArticleListLayout
          loginedUser={getUserInfo(1)}
          articles={[
            {
              articleId: 1,
              title: 'The Benefits of Yoga for Mind and Body',
              publicationDate: '2022-03-10',
              description:
                'In this article, we explore the numerous benefits of practicing yoga, including improved flexibility, stress relief, and mental clarity.',
              thumbnailImage: 'https://picsum.photos/id/22/600/300',
              likes: 15,
              comments: 15,
            },
            {
              articleId: 2,
              title: '10 Tips for Eating Healthy on a Budget',
              publicationDate: '2022-03-02',
              description:
                'In this article, we provide practical advice for eating healthy while sticking to a tight budget.',
              thumbnailImage: 'https://picsum.photos/id/19/600/300',
              likes: 23,
              comments: 23,
            },
            {
              articleId: 3,
              title: 'Exploring the Wonders of the Great Barrier Reef',
              publicationDate: '2022-02-28',
              description:
                "In this article, we take a deep dive into the Great Barrier Reef, one of the world's most breathtaking natural wonders.",
              thumbnailImage: 'https://picsum.photos/id/18/600/300',
              likes: 17,
              comments: 17,
            },
          ]}
          articlesOwner={getUserInfo(1)}
          title="Follower Articles"
          goBack={() => {}}
          handleLike={() => {}}
          articlesLiked={3}
        />
      </NavigationContainer>,
    )
    .toJSON();

  expect(snap).toMatchSnapshot();
});
