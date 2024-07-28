import * as React from "react"
import Svg, {
        SvgProps,
        Path,
        Defs,
        LinearGradient,
        Stop,
} from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={90}
        height={90}
        fill="none"
        {...props}
    >
            <Path
                fill="url(#a)"
                d="M62.471 17.03a5.357 5.357 0 0 1 7.568-.411A37.41 37.41 0 0 1 82.5 44.537c0 20.714-16.79 37.5-37.5 37.5V71.322a26.786 26.786 0 0 0 17.882-46.728 5.357 5.357 0 0 1-.41-7.564Z"
            />
            <Path
                fill="#fff"
                d="M38.746 7.558a5.357 5.357 0 0 1 1.775 10.564A26.793 26.793 0 0 0 26.06 63.477 26.786 26.786 0 0 0 45 71.323v10.714c-20.71 0-37.5-16.786-37.5-37.5 0-18.375 13.307-33.965 31.246-36.979Z"
            />
            <Defs>
                    <LinearGradient
                        id="a"
                        x1={63.75}
                        x2={45}
                        y1={15.248}
                        y2={71.32}
                        gradientUnits="userSpaceOnUse"
                    >
                            <Stop stopColor="#fff" stopOpacity={0} />
                            <Stop offset={1} stopColor="#fff" />
                    </LinearGradient>
            </Defs>
    </Svg>
)
export default SvgComponent
