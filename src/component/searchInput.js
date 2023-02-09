import React, { forwardRef, useRef } from 'react'
import { Keyboard } from 'react-native'
 

import Box from "./box"
import Input from "./input";

import { addItem } from '../dataSlice';
import { Search, Close } from "./icons"
import theme from "../utils/theme";
import Text from "./text";
import Button from "./button";
import { useDispatch } from 'react-redux';


const SearchInput = forwardRef(({ onChangeFocus }, ref,...props) => {
    const [isFocus, setFocus] = React.useState(false)
    const [value, setValue] = React.useState('')
    const input = useRef()
    const dispatch = useDispatch()

    React.useImperativeHandle(ref, () => {
        return {
            handleCancel(){
                onCancel()
            }
        };
    })

    React.useEffect(() => {
        onChangeFocus(isFocus)
    }, [isFocus, onChangeFocus])

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }
    const onClear = () => {
        setValue('')
    }


    return (
        <Box flexDirection="row" alignItems="center">
            <Box position="relative" flex={1}>
                <Input
                    ref={input}
                    style={{
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowRadius: 24,
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        elevation: 12
                    }}
                    bg="white"
                    color="textDark"
                    placeholder="Türkçe Sözlük'te Ara"
                    placeholderTextColor="textMedium"
                    pl={52}
                    height={52}
                    borderRadius="normal"
                    value={value}
                    onFocus={() => setFocus(true)}
                    onChangeText={text => setValue(text)}
                    onSubmitEditing={()=>dispatch(addItem(value))}
                />
                {value.length > 0 && (
                    <Button onPress={onClear} position="absolute" right={16} top={14}>
                        <Close color={theme.colors.textDark} />
                    </Button>
                )}
                <Button onPress={() => { input.current.focus() }} position="absolute" left={16} top={14}>
                    <Search color={theme.colors.textMedium} />
                </Button>
            </Box>
            {isFocus && (
                <Button onPress={onCancel} px={15} height={52}>
                    <Text>Vazgeç</Text>
                </Button>
            )
            }
        </Box>
    )
}
)
export default SearchInput