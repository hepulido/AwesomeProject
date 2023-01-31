import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    aliangItems: 'center',
    marginBottom: 54,
  },
  image: {
    width: 20,
    height: 20,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: '500',
    paddingHorizontal: 16,
  },
});
