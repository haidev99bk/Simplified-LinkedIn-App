import {StyleSheet} from 'react-native';
import color from '../../../styles/colors';
import fontWeight from '../../../styles/fontWeight';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    padding: 8,
    marginBottom: 8,
  },
  headerView: {
    flexDirection: 'row',
    width: '100%',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfoContainer: {
    marginLeft: 4,
    flex: 1,
  },
  headerRight: {},
  contentView: {
    marginTop: 8,
  },
  imageAndTitleView: {
    backgroundColor: color.lightGrey,
    marginHorizontal: -8,
  },
  articleTitle: {
    padding: 8,
    ...fontWeight.bold,
  },
  thumbnailImage: {
    width: '100%',
    height: 220,
  },
});

export default styles;
