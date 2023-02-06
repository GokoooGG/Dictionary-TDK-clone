import { View } from "react-native";
import styled from 'styled-components';
import { compose, color, size, space, flexbox, borderRadius, shadow, border,opacity } from 'styled-system';

const Box = styled(View)(
    compose(
        flexbox,
        color,
        size,
        space,
        borderRadius,
        shadow,
        border,
        opacity
    ),
);

export default Box;