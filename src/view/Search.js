import * as React from 'react';
import { Button } from 'react-native';
import Box from '../component/box';
import { Logo } from '../component/icons';
import SearchInput from '../component/searchInput';

function SearchView({ navigation }) {
  return (
    <Box>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />

      <Box py={20}>
        <Logo color="red" />
      </Box>

      <Box p={10}>
        <SearchInput />
      </Box>
      

    </Box>
  );
}

export default SearchView;