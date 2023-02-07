import { TouchableOpacity } from "react-native";
import styled from 'styled-components';
import { compose,color,size,space,flexbox,layout,borderRadius,position,shadow} from 'styled-system';

const Button = styled(TouchableOpacity)(
    compose(
        flexbox,
        color,
        size,
        space,
        layout,
        borderRadius,
        position,
        shadow
    ),
);

Button.defaultProps = {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent:'center',
}

export default Button;