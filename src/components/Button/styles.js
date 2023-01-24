import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    padddingVertical: 10,
    paddingTop: 10,
    paddingHorizontal: 8,
    borderRadius: 12,
    width: '100%',
    height: '6%',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
