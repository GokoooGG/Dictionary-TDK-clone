import * as React from 'react';
import {
  Text, Animated, Pressable, ImageBackground, FlatList,ActivityIndicator
} from 'react-native';

import Box from '../component/box';
import { Logo } from '../component/icons';
import SearchInput from '../component/searchInput';
import { CardConteiner, CardSummary, CardTitle, CardHeader } from '../component/card';
import FocusAwareStatusBar from '../component/FocusAwareStatusBar';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import theme from '../utils/theme';
import bg from '../assets/bg.jpg'
import { SimpleCardConteiner, SimpleCardTitle } from '../component/simpleCard';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    header: 'Item 1',
    title: 'Item 1',
    summary: 'Summary 1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    header: 'Item 2',
    title: 'Item 2',
    summary: 'Summary 2'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    header: 'Item 3',
    title: 'Item 3',
    summary: 'Summary 3'
  },
  {
    id: '58694a0f-3da1-571f-bd96-145571e29d72',
    header: 'Item 4',
    title: 'Item 4',
    summary: 'Summary 4'
  },
  {
    id: '58694a0f-3da1-671f-bd96-145571e29d72',
    header: 'Item 5',
    title: 'Item 5',
    summary: 'Summary 5'
  },
];

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const slideAnim = React.useRef(new Animated.Value(0)).current
  const [bgOpacity] = React.useState(new Animated.Value(1))
  const insets = useSafeAreaInsets()
  const searchInput = React.useRef()
  const [homeData, setHomeData] = React.useState(null)

  const getHomeData = async () => {
    const response = await fetch("https://sozluk.gov.tr/icerik")
    const data = await response.json()
    setHomeData(data)
  }

  React.useEffect(() => {
    getHomeData()
  }, [])


  React.useEffect(() => {
    if (isSearchFocus) {
      // focus animation
      Animated.timing(
        slideAnim,
        {
          toValue: 0,
          duration: 230,
          useNativeDriver: false,
        }
      ).start();

    } else {

      // unfocus animation
      Animated.timing(
        slideAnim,
        {
          toValue: 1,
          duration: 230,
          useNativeDriver: false,
        }
      ).start();
    }
  }, [slideAnim, isSearchFocus])

  const heightInterpolate = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [52 + 36, 230],
  });


  return (

    <Box as={SafeAreaView} flex={1}>
      {/* StatusBar*/}
      {isSearchFocus ?
        <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#F2F2F2" /> :
        <FocusAwareStatusBar barStyle="light-content" backgroundColor={theme.colors.red} />
      }

      <Box as={Animated.View} position="relative" zIndex={1} height={heightInterpolate}
      >
        {/* Background*/}

        <Box mt={-55} as={Animated.View} style={{ opacity: slideAnim }}>
          <Box pt={55}>
            <Box
              as={ImageBackground}
              source={bg}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Box flex={1} alignItems='center' justifyContent='center' >
                <Logo width={120} color="white" />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Search Input*/}
        <Box position="absolute" left={0} bottom={isSearchFocus ? 1 : -42} width="100%" p={16}>
          <SearchInput ref={searchInput} onChangeFocus={status => setSearchFocus(status)} />
        </Box>

      </Box>

      {/* Content*/}
      <Box as={Pressable} onPress={() => {
        searchInput.current.handleCancel()
      }} flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            <FlatList
              style={{ padding: 16 }}
              data={DATA}
              renderItem={({ item }) => (
                <Box py={6}>
                  <SimpleCardConteiner>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCardConteiner>
                </Box>
              )}
              keyExtractor={item => item.id}
              ListHeaderComponent={<Text fontWight="bold" color="textLight" >SON ARAMALAR</Text>}
            />
          </Box>
        ) : (
          <Box p={16} py={40} flex={1}>
            <Box>
              <Text color="textLight">Bir Kelime</Text>
              <CardConteiner mt={10} onPress={() => navigation.navigate("Detail", { title: homeData?.kelime[0].madde })} >
                {
                  homeData ? (
                    <>
                      <CardTitle>{homeData?.kelime[0].madde}</CardTitle>
                      <CardSummary>{homeData?.kelime[0].anlam}</CardSummary>
                    </>
                  ):
                  <ActivityIndicator/>
                }
              </CardConteiner>
            </Box>

            <Box mt={40}>
              <Text color="textLight">Bir deyim - Atasözü</Text>
              <CardConteiner mt={10} onPress={() => navigation.navigate("Detail", { title: homeData?.atasoz[0].madde })} >
              {
                  homeData ? (
                    <>
                      <CardTitle>{homeData?.atasoz[0].madde}</CardTitle>
                      <CardSummary>{homeData?.atasoz[0].anlam}</CardSummary>
                    </>
                  ):
                  <ActivityIndicator/>
                }
              </CardConteiner>
            </Box>
          </Box>
        )}

      </Box>
    </Box>
  );
}

export default SearchView;