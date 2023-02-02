import { View } from "react-native";
import styled from 'styled-components';
import { compose,color,size,space,flexbox} from 'styled-system';

import Box from "./box";

const BoxCenter = styled(Box)({});

BoxCenter.defaultProps = {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
};

export default BoxCenter;