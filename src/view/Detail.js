import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import Text from '../component/text';
import ActionButton, { ActionButtonTitle } from '../component/action-button';
import Box from '../component/box';
import FocusAwareStatusBar from '../component/FocusAwareStatusBar';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { DetailListContainer, DetailListTitle, DetailListContent } from '../component/detail-List'

import { Hand, Sound, Favorite, SoundSolid } from "../component/icons"
import theme from '../utils/theme';

function DetailView() {
  const insets = useSafeAreaInsets();
  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={theme.colors.softRed} />

      <Box as={ScrollView} p={16} >
        <Box>
          <Text fontSize={32} fontWeight="bold" color="textDark">
            Detay
          </Text>
          <Text color="textLight" mt={6}>
            Arapça Kalem
          </Text>
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
          <DetailListContainer>
            <DetailListTitle> Yazma .çasdkjhlhljh jjlashdjajshd ljasdjlhalshd alsdhaljshdlı</DetailListTitle>
            <DetailListContent>Kağıt ajnskldnlajnsld lhjabsjdlbajlhbdlhj asldhb alsdl jasbd</DetailListContent>
          </DetailListContainer>

          <DetailListContainer border>
            <DetailListTitle> Yazma .çasdkjhlhljh jjlashdjajshd ljasdjlhalshd alsdhaljshdlı</DetailListTitle>
            <DetailListContent>Kağıt ajnskldnlajnsld lhjabsjdlbajlhbdlhj asldhb alsdl jasbd</DetailListContent>
          </DetailListContainer>

          <DetailListContainer border>
            <DetailListTitle> Yazma .çasdkjhlhljh jjlashdjajshd ljasdjlhalshd alsdhaljshdlı</DetailListTitle>
            <DetailListContent>Kağıt ajnskldnlajnsld lhjabsjdlbajlhbdlhj asldhb alsdl jasbd</DetailListContent>
          </DetailListContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default DetailView;