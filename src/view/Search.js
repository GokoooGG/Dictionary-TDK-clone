import * as React from 'react';
import { Text as T,ImageBackground, Animated } from 'react-native';
import Box from '../component/box';
import { Logo } from '../component/icons';
import SearchInput from '../component/searchInput';
import bg from "../assets/bg.jpg"
import FocusAwareStatusBar from '../component/FocusAwareStatusBar';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import theme from '../utils/theme';
import { Text } from 'react-native-svg';

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const slideAnim = React.useRef(new Animated.Value(285)).current
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(
        slideAnim,
        {
          toValue: 52+32,
          duration: 200,
          useNativeDriver: false,
        }
      ).start();
    } else {
      Animated.timing(
        slideAnim,
        {
          toValue: 285,
          duration: 200,
          useNativeDriver: false,
        }
      ).start();
    }
  }, [slideAnim, isSearchFocus])


  return (
    <Box as={SafeAreaView} flex={1}>
      {isSearchFocus ?
        <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" /> :
        <FocusAwareStatusBar barStyle="light-content" backgroundColor={theme.colors.red} />
      }
      <Box as={Animated.View} position="relative" zIndex={1} height={slideAnim}>
        {!isSearchFocus &&
          <Box as={ImageBackground}
            source={bg}
            style={{
              width: "100%",
              height: "100%",
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            }}
          >
            <Box flex={1} alignItems='center' justifyContent='center' >
              <Logo width={120} color="white" />
            </Box>
          </Box>}

        <Box position="absolute" left={0} bottom={isSearchFocus ? 1 : -42} width="100%" p={16}>
          <SearchInput onChangeFocus={status => setSearchFocus(status)} />
        </Box>

      </Box>
      <Box flex={1} bg="white">
        <T>HELLO!</T>
      </Box>
    </Box>
  );
}

export default SearchView;