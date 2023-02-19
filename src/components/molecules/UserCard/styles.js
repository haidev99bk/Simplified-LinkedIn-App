import shadow from '../../../styles/shadow';
import {StyleSheet} from 'react-native';
import color from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    ...shadow.normal,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: color.white,
    marginHorizontal: 8,
  },
  infoContainer: {
    marginLeft: 16,
  },
});

export default styles;
