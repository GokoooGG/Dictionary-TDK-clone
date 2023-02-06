import React from 'react'
import Box from './box'
import Button from './button'
import Text from './text'

export function CardConteiner({ children, ...props }) {
    return (
        <Button bg='white' borderRadius="normal" py={16} px={12} {...props}>
            <Box flex={1} borderLeftWidth={3} borderLeftColor="light" pl={12}>
                {children}
            </Box>
        </Button>
    )
}

export function CardTitle({ children }) {
    return (
        <Text fontSize={18} fontWeight="bold" color="textDark">
            {children}
        </Text>
    )
}
export function CardSummary({children}){
    return <Text fontSize={14} mt={8} color="textMedium">{children}</Text>
}