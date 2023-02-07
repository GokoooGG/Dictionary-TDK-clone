import * as React from 'react';
import { View, Text } from 'react-native';
import Box from '../component/box';
import FocusAwareStatusBar from '../component/FocusAwareStatusBar';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import theme from '../utils/theme';

function History() {
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
      <Text>History!</Text>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={theme.colors.softRed} />
    </Box>
  );
}

export default History;