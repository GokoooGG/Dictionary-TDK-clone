import * as React from 'react';
import { Text } from 'react-native';
import Box from '../component/box';
import FocusAwareStatusBar from '../component/FocusAwareStatusBar';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import theme from '../utils/theme';

function FavoriteView() {
  const insets = useSafeAreaInsets();
  return (
    <Box as={SafeAreaView} flex={1} bg='softRed' style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={theme.colors.softRed} />
      <Text>Favorite!</Text>
    </Box>
  );
}

export default FavoriteView;