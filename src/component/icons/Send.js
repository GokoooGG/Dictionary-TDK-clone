import * as React from 'react'
import Svg, { Line, Polygon } from 'react-native-svg'
const SvgSend = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className=""
    color="black"
    {...props}
  >
    <Line x1={22} y1={2} x2={11} y2={13} />
    <Polygon points="22 2 15 22 11 13 2 9 22 2" />
  </Svg>
)
export default SvgSend
