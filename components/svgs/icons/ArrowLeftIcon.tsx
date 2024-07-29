import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg
        width={20}
        height={17}
        {...props}
    >
        <Path
            d="M19.336 8.32c0 .443-.33.81-.756.867l-.12.008H.96a.875.875 0 0 1-.118-1.742l.119-.008h17.5c.483 0 .875.392.875.875Z"
        />
        <Path
            d="M8.633 14.728a.875.875 0 0 1-1.136 1.325l-.099-.085L.34 8.94A.875.875 0 0 1 .255 7.8L.34 7.7 7.398.671a.875.875 0 0 1 1.32 1.142l-.085.098-6.435 6.41 6.435 6.407Z"
        />
    </Svg>
)
export default SvgComponent
