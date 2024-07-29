import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg
        width={18}
        height={15}
        {...props}
    >
        <Path
            fillRule="evenodd"
            d="M13.113 0a4.214 4.214 0 0 1 4.218 4.208v6.584A4.215 4.215 0 0 1 13.113 15H4.881a4.214 4.214 0 0 1-4.217-4.208V4.208A4.209 4.209 0 0 1 4.881 0h8.232Zm1.326 5.45.067-.067c.199-.241.199-.591-.01-.833a.7.7 0 0 0-.44-.217.633.633 0 0 0-.468.167l-3.757 3c-.484.4-1.176.4-1.667 0l-3.75-3a.634.634 0 0 0-.833.058.637.637 0 0 0-.06.834l.11.108 3.791 2.958a2.62 2.62 0 0 0 3.258 0l3.76-3.008Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SvgComponent
