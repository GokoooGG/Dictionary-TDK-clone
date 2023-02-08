import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

import Box from './box'
import Text from './text'
import { SimpleCardConteiner, SimpleCardTitle } from './simpleCard'

function SearchHistoryList ({data}){
    return(
        <FlatList
        style={{ padding: 16 }}
        data={data}
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
    )   
}

export default SearchHistoryList