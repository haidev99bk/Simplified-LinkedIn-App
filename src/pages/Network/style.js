import {StyleSheet} from 'react-native';
import fontWeight from '../../styles/fontWeight';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  sectionTitle: {
    ...fontWeight.bold,
    paddingBottom: 4,
  },
});

export default styles;
