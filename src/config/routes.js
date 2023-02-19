import {MainTabPages} from '../constants/common';
import FollowerArticles from '../pages/FollowerArticles';
import UserAndFollowers from '../pages/Network';
import MyArticles from '../pages/MyArticles';

export const mainTabNavigationRoutes = [
  {
    name: MainTabPages.NetWork,
    screen: UserAndFollowers,
    icon: 'home',
    label: 'Network',
  },
  {
    name: MainTabPages.MyArticles,
    screen: MyArticles,
    icon: 'book',
    label: 'My Articles',
  },
  {
    name: MainTabPages.FollowerArticles,
    screen: FollowerArticles,
    icon: 'newspaper-o',
    label: "Follower's Articles",
  },
];
