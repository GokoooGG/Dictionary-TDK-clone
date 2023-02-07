import React from 'react'

import Box from './box'
import Text from './text'

export function DetailListContainer({ children, border, ...props }) {
    return (
        <Box bg="white" px={28} py={20} {...props}>
            {border && (
                <Box
                position="absolute"
                left={12}
                right={12}
                top={0}
                height={1}
                bg="textLight"
                />
            )}
            <Box flexDirection="row">
                <Text ml={-14} mr={8} color="textLight">1.</Text>
                <Text color="red">İSİM</Text>
            </Box>
            <Box mt={8}>
                {children}
            </Box>
        </Box>
    )
}

export function DetailListTitle({ children, ...props }) {
    return (
        <Text color="textDark" fontWeight="600">{children}</Text>
    )
}

export function DetailListContent({ children, ...props }) {
    return (
        <Text ml={10} mt={12} color="textLight" fontWeight="500">{children}</Text>
    )
}