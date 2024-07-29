import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
import {useColorScheme} from "nativewind";
/* SVGR has dropped some elements not supported by react-native-svg: filter */


const SvgComponent = (props: SvgProps) => {

    return (


        <Svg
            width={430}
            height={484}
            {...props}
        >
            <G filter="url(#a)">
                <Path
                    fillRule="evenodd"
                    d="M0 24v460h430V24c-65.128 31.75-138.033 49.523-215 49.523C138.033 73.523 65.128 55.75 0 24Z"
                    clipRule="evenodd"
                />
            </G>
            <Defs></Defs>
        </Svg>
    )
}
export default SvgComponent
