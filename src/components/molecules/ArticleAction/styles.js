import {StyleSheet} from 'react-native';
import fontWeight from '../../../styles/fontWeight';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 24,
    flex: 1,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
  },
  label: {
    ...fontWeight.semiBold,
  },
});

export default styles;
