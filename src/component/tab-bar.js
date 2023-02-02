import React from 'react'
import { View, Text } from 'react-native';
import Box from './box';
import Button from './button';
import { Search, Bookmark, Calendar } from './icons'
import theme from '../utils/theme'


function TabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };



                return label === 'SearchHome' ? (
                    <Box key={label} p={15} mt={-15} borderRadius="full" bg="white">
                        <Button
                            size={56}
                            bg="red"
                            height={56}
                            borderRadius="full"
                            onPress={onPress}
                        >
                            <Search stroke="white" />
                        </Button>
                    </Box>
                ) : (
                    <Button
                        key={label}
                        pt={6}
                        flexDirection="column"
                        flex={1}
                        height={56}
                        onPress={onPress}>
                        {label === 'History' && <Calendar stroke={theme.colors.textLight} />}
                        {label === 'Favorite' && <Bookmark stroke={theme.colors.textLight} />}
                        <Box size={3} bg={isFocused ? "red" : ""} mt={6} />
                    </Button>
                )

            })}
        </View>
    );
}

export default TabBar