import {useId} from 'react';
import {getUserInfo} from './userSevices';

const Articles = require('./mockData/uArticles.json');

export function getArticles(userId) {
  const user = getUserInfo(userId);
  return Articles.articles.filter(a => {
    return user.articlesId.includes(a.articleId);
  });
}
