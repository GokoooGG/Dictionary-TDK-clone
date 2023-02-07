import React from 'react'
import DropShadow from "react-native-drop-shadow";
import Box from './box';

import Button from './button'
import Text from './text';

function ActionButton({ children, ...props }) {
    return (
        <Box {...props}>
            <DropShadow
                style={{
                    shadowColor: "#000",
                    shadowOpacity: .16,
                    shadowRadius: 4,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                }}>
                <Button
                    minWidth="actionButton"
                    height="actionButton"
                    borderRadius="full"
                    bg="white"
                    px={8}

                >
                    {children}
                </Button>
            </DropShadow>

        </Box>
    )
}

export function ActionButtonTitle({ children, ...props }) {
    return (
        <Text ml={8} mr={8} fontWeight="bold" color="textLight"  {...props}>{children}</Text>
    )
}
export default ActionButton