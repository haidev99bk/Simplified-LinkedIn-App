import {StyleSheet} from 'react-native';
import color from '../../../styles/colors';
import fontWeight from '../../../styles/fontWeight';
import shadow from '../../../styles/shadow';

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.white,
    ...shadow.normal,
  },
  title: {
    ...fontWeight.bold,
    textTransform: 'uppercase',
    color: color.mainBlue,
  },
});

export default styles;
