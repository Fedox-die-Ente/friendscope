import * as React from "react"
import Svg, {Circle, Path, SvgProps} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg
        width={186}
        height={180}
        fill="none"
        {...props}
    >
        <Circle cx={62.5} cy={176.5} r={3.5} fill="#9610FF"/>
        <Circle cx={122} cy={171} r={1} fill="#9610FF"/>
        <Circle cx={10} cy={133} r={5} fill="#9610FF"/>
        <Circle cx={95.5} cy={91.5} r={70.5} fill="#9610FF"/>
        <Circle cx={165.5} cy={160.5} r={2.5} fill="#9610FF"/>
        <Circle cx={170.5} cy={110.5} r={2.5} fill="#9610FF"/>
        <Circle cx={1} cy={75} r={1} fill="#9610FF"/>
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M109.235 80.228c0 7.342-5.887 13.23-13.235 13.23a13.187 13.187 0 0 1-13.235-13.23C82.765 72.885 88.655 67 96 67a13.183 13.183 0 0 1 13.235 13.228ZM96 117c-10.844 0-20-1.763-20-8.563 0-6.802 9.213-8.502 20-8.502 10.847 0 20 1.762 20 8.562 0 6.803-9.213 8.503-20 8.503Z"
            clipRule="evenodd"
        />
        <Circle cx={178.5} cy={27.5} r={7.5} fill="#9610FF"/>
        <Circle cx={106.5} cy={4.5} r={2.5} fill="#9610FF"/>
        <Circle cx={20} cy={10} r={10} fill="#9610FF"/>
    </Svg>
)
export default SvgComponent
