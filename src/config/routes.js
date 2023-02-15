import {MainTabPages} from '../constants/common';
import FollowerArticles from '../pages/FollowerArticles';
import UserAndFollowers from '../pages/Network';
import MyArticles from '../pages/MyArticles';

export const mainTabNavigationRoutes = [
  {
    name: MainTabPages.NetWork,
    screen: UserAndFollowers,
    icon: 'home_2',
    label: 'Network',
  },
  {
    name: MainTabPages.MyArticles,
    screen: MyArticles,
    icon: 'home_2',
    label: 'My Articles',
  },
  {
    name: MainTabPages.FollowerArticles,
    screen: FollowerArticles,
    icon: 'home_2',
    label: "Follower's Articles",
  },
];
