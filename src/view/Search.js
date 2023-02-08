import * as React from 'react';
import {  Pressable } from 'react-native';

import Box from '../component/box';
import SearchHome from '../component/search-home';
import SearchHistoryList from '../component/search-history-list';
import SuggestionCard from '../component/suggestion-card';
import FocusAwareStatusBar from '../component/FocusAwareStatusBar';
import { SafeAreaView } from 'react-native-safe-area-context';

import theme from '../utils/theme';

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
];

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)
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

  return (

    <Box as={SafeAreaView} flex={1}>
      {/* SearchInput and Logo-Background*/}
      <SearchHome isSearchFocus={isSearchFocus} onSearchFocus={setSearchFocus} searchInput={searchInput} />

      {/* StatusBar*/}
      {isSearchFocus ?
        <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#F2F2F2" /> :
        <FocusAwareStatusBar barStyle="light-content" backgroundColor={theme.colors.red} />
      }

      {/* Content*/}
      <Box as={Pressable} onPress={() => {
        searchInput.current.handleCancel()
      }} flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            <SearchHistoryList data={DATA} />
          </Box>
        ) : (
          <Box p={16} py={40} flex={1}>

            <SuggestionCard
              title="Bir Kelime"
              data={homeData?.kelime[0]}
              onPress={() =>
                navigation.navigate("Detail", {
                  title: homeData?.kelime[0].madde,
                  keyword: homeData?.kelime[0].madde
                })}
            />

            <SuggestionCard
              mt={40}
              title="Bir Deyim - Atasözü"
              data={homeData?.atasoz[0]}
              onPress={() =>
                navigation.navigate("Detail", {
                  title: homeData?.atasoz[0].madde
                })}
            />
          </Box>
        )}

      </Box>
    </Box>
  );
}

export default SearchView;