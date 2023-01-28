const lodash = require('lodash');

function generateUserData() {
  return {
    avatar: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
      .toString(36)
      .substring(7)}.svg`,
  };
}

function generateTrackData() {
  return {
    cover: `https://picsum.photos/id/${lodash.random(1, 200)}/49/49`,
  };
}

module.exports = {
  generateUserData,
  generateTrackData,
};
