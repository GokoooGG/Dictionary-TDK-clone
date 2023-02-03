import { View } from "react-native";
import styled from 'styled-components';
import { compose,color,size,space,flexbox,borderRadius,shadow} from 'styled-system';
import theme from "../utils/theme";

const Box = styled(View)(
    compose(
        flexbox,
        color,
        size,
        space,
        borderRadius,
        shadow
    ),
);

export default Box;