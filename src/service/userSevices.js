import UserAndFollowers from './mockData/users.json';

export function getUserInfo(userId = 1) {
  if (userId === 1) {
    return UserAndFollowers.user;
  } else {
    return UserAndFollowers.followers.find(u => {
      return u.userId === userId;
    });
  }
}

export function getFollowers() {
  return UserAndFollowers.followers;
}
