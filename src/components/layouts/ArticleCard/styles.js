import {StyleSheet} from 'react-native';
import color from '../../../styles/colors';
import fontWeight from '../../../styles/fontWeight';
import {typography} from '../../../styles/typography';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    padding: 16,
    marginBottom: 16,
  },
  contentView: {
    marginTop: 8,
  },
  description: {
    ...typography.paragraph,
  },
  imageAndTitleView: {
    backgroundColor: color.lightGrey,
    marginHorizontal: -16,
    paddingBottom: 16,
    marginTop: 8,
  },
  articleTitle: {
    padding: 16,
    ...fontWeight.bold,
  },
  thumbnailImage: {
    width: '100%',
    height: 220,
  },
});

export default styles;
