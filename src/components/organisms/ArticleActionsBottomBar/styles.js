import {StyleSheet} from 'react-native';
import color from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionsInfo: {
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  likeInfoContainer: {
    flexDirection: 'row',
  },
  line: {
    height: 1,
    backgroundColor: color.darkGrey,
  },
  likeIcon: {
    height: 20,
    width: 20,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: color.mainBlue,
  },
});

export default styles;
