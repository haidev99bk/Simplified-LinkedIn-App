const UserAndFollowers = require('./mockData/users.json');

export function getUserInfo() {
  return UserAndFollowers.users[0];
}
