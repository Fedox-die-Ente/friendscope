import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg
        width={16}
        height={17}
        {...props}
    >
        <Path
            fillRule="evenodd"
            d="M12.6 4.663v1.278c1.435.448 2.48 1.748 2.48 3.3v4.114c0 1.92-1.592 3.478-3.556 3.478H4.471c-1.964 0-3.557-1.557-3.557-3.478V9.24c0-1.551 1.047-2.85 2.481-3.299V4.663C3.404 2.18 5.461.167 7.985.167c2.557 0 4.615 2.012 4.615 4.496ZM8.002 1.616c1.719 0 3.116 1.366 3.116 3.047v1.098H4.877V4.647c.008-1.673 1.406-3.031 3.125-3.031Zm.736 10.597c0 .405-.33.728-.745.728a.73.73 0 0 1-.737-.729v-1.838c0-.397.33-.72.737-.72.415 0 .745.323.745.72v1.838Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SvgComponent
