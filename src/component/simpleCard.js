import React from 'react'
import Box from './box'
import Button from './button'
import Text from './text'

export function SimpleCardConteiner({onPress, children, ...props }) {
    return (
        <Button justifyContent="flex-start" bg='white' borderRadius="normal" p={16} onPress={onPress}
            {...props}>
            {children}
        </Button>
    )
}

export function SimpleCardTitle({ children }) {
    return (
        <Text fontSize={16} fontWeight="bold" color="textDark">
            {children}
        </Text>
    )
}
