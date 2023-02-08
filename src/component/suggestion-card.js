import React from 'react'
import { ActivityIndicator } from 'react-native'

import Text from './text'
import Box from './box'
import { CardConteiner, CardSummary, CardTitle } from './card'
import LoaderText from './loaderText'



function SuggestionCard({ title, onPress, data, ...props }) {
  return (
    <Box {...props}>
      <Text color="textLight">{title}</Text>
      <CardConteiner mt={10} onPress={onPress} >
        {
          data ? (
            <>
              <CardTitle>{data.madde}</CardTitle>
              <CardSummary>{data.anlam}</CardSummary>
            </>
          ) :
            (<Box>
              <LoaderText />
              <LoaderText width={200} mt={10} />
            </Box>
            )
        }
      </CardConteiner>
    </Box>
  )
}
export default SuggestionCard