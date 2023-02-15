const {Platform} = require('react-native/types');

const shadow = Platform.select({
  ios: {
    normal: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 4,
      shadowOpacity: 0.15,
    },
  },
  android: {
    normal: {elevation: 5},
  },
});

export default shadow;
