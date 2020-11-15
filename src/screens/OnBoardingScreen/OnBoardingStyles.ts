import { StyleSheet as StyleSheetNative } from 'react-native';
import Layout from '../../constants/Layout';

export const styles = StyleSheetNative.create({
  backgroundContainer: {
    flex: 1,
    position: 'absolute',
    opacity: 0,
    height: Layout.window.height,
    width: Layout.window.width,
  },
});
