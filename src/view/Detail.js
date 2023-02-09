import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import Text from '../component/text';
import ActionButton, { ActionButtonTitle } from '../component/action-button';
import Box from '../component/box';
import FocusAwareStatusBar from '../component/FocusAwareStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import DetailListContainer from '../component/detail-List'

import { Hand, Favorite, SoundSolid } from "../component/icons"
import theme from '../utils/theme';
import LoaderText from '../component/loaderText';

function DetailView({ route }) {
  const [data, setData] = React.useState(null)
  const keyword = route.params?.keyword

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    const data = await response.json()
    setData(data[0])
  }

  React.useEffect(() => {
    getDetailData()
  }, [])

  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={theme.colors.softRed} />

      <Box as={ScrollView} p={16} >
        <Box>
          <Text fontSize={32} fontWeight="bold" color="textDark">
            {keyword}
          </Text>
          {data?.telaffuz || data?.lisan ? (
            <Text color="textLight" mt={6}>
              {data?.telaffuz && data?.telaffuz} {data?.lisan}
            </Text>
          ) : null}
        </Box>

        <Box flexDirection="row" mt={24}>
          <ActionButton ml={5}>
            <SoundSolid with={24} height={24} color={theme.colors.red} />
          </ActionButton>
          <ActionButton ml={12}>
            <Favorite with={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml="auto" mr={5}>
            <Hand with={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        
        <Box mt={32}>
          {data
            ? data.anlamlarListe.map(item => (
              <DetailListContainer
                key={item.anlam_sira}
                data={item}
                border={item.anlam_sira !== '1'}
              />
            ))
            : [1, 2, 3].map(index => (
              <DetailListContainer key={index} border={index !== 1}>
                <LoaderText />
                <LoaderText width={200} mt={10} />
              </DetailListContainer>
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default DetailView;