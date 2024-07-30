import * as React from "react"
import Svg, {Circle, Path, SvgProps} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
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
            d="M109.807 80.49v3.833c4.306 1.344 7.443 5.242 7.443 9.898v12.342c0 5.764-4.778 10.437-10.669 10.437H85.422c-5.894 0-10.672-4.673-10.672-10.437V94.221c0-4.656 3.14-8.554 7.443-9.898V80.49C82.22 73.037 88.392 67 95.962 67c7.672 0 13.845 6.037 13.845 13.49Zm-13.794-9.142c5.157 0 9.348 4.099 9.348 9.142v3.294H86.639V80.44c.025-5.018 4.217-9.092 9.374-9.092Zm2.21 31.789c0 1.218-.99 2.187-2.236 2.187-1.22 0-2.21-.969-2.21-2.187v-5.515c0-1.192.99-2.161 2.21-2.161 1.245 0 2.236.969 2.236 2.161v5.515Z"
            clipRule="evenodd"
        />
        <Circle cx={178.5} cy={27.5} r={7.5} fill="#9610FF"/>
        <Circle cx={106.5} cy={4.5} r={2.5} fill="#9610FF"/>
        <Circle cx={20} cy={10} r={10} fill="#9610FF"/>
    </Svg>
)
export default SvgComponent
