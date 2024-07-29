import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg
        width={13}
        height={9}
        {...props}
    >
        <Path
            fillRule="evenodd"
            d="M12.06.44a1.5 1.5 0 0 1 0 2.12l-6 6a1.5 1.5 0 0 1-2.12 0l-3-3a1.5 1.5 0 1 1 2.12-2.12L5 5.378 9.94.439a1.5 1.5 0 0 1 2.12 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SvgComponent
