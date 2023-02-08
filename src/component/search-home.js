import * as React from 'react';
import { Animated, ImageBackground } from 'react-native';

import Box from '../component/box';
import { Logo } from '../component/icons';
import SearchInput from '../component/searchInput';
import bg from '../assets/bg.jpg'

function SearchHome({ isSearchFocus, onSearchFocus, searchInput}) {
    const slideAnim = React.useRef(new Animated.Value(0)).current

    React.useEffect(() => {
        if (isSearchFocus) {
            // focus animation
            Animated.timing(
                slideAnim,
                {
                    toValue: 0,
                    duration: 230,
                    useNativeDriver: false,
                }
            ).start();

        } else {

            // unfocus animation
            Animated.timing(
                slideAnim,
                {
                    toValue: 1,
                    duration: 230,
                    useNativeDriver: false,
                }
            ).start();
        }
    }, [slideAnim, isSearchFocus])

    const heightInterpolate = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [52 + 36, 230],
    });


    return (

        <Box as={Animated.View} position="relative" zIndex={1} height={heightInterpolate}
        >
            {/* Background*/}

            <Box mt={-55} as={Animated.View} style={{ opacity: slideAnim }}>
                <Box pt={55}>
                    <Box
                        as={ImageBackground}
                        source={bg}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Box flex={1} alignItems='center' justifyContent='center' >
                            <Logo width={120} color="white" />
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Search Input*/}
            <Box position="absolute" left={0} bottom={isSearchFocus ? 1 : -42} width="100%" p={16}>
                <SearchInput ref={searchInput} onChangeFocus={status => onSearchFocus(status)} />
            </Box>
        </Box>
    );
}

export default SearchHome;