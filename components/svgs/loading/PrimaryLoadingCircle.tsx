import React, {useEffect, useRef} from "react";
import {Animated} from "react-native";
import Svg, {Defs, LinearGradient, Path, Stop, SvgProps} from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
    // Erstelle eine Referenz für die Drehung
    const rotateAnim = useRef(new Animated.Value(0)).current;

    // Start der Animation beim ersten Rendern
    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 3000, // Dauer der gesamten Rotation in Millisekunden
                useNativeDriver: true, // Verwende den nativen Treiber für bessere Performance
            })
        ).start();
    }, [rotateAnim]);

    // Interpolation für die Rotation
    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <Animated.View style={{transform: [{rotate}]}}>
            <Svg width={60} height={60} fill="none" {...props}>
                <Path
                    fill="url(#a)"
                    d="M41.648 11.353a3.572 3.572 0 0 1 5.045-.274A24.94 24.94 0 0 1 55 29.691c0 13.81-11.193 25-25 25v-7.143a17.857 17.857 0 0 0 11.921-31.152 3.572 3.572 0 0 1-.273-5.043Z"
                />
                <Path
                    fill="#9610FF"
                    d="M25.83 5.039a3.571 3.571 0 0 1 1.184 7.043 17.861 17.861 0 0 0-9.64 30.236A17.857 17.857 0 0 0 30 47.548v7.143c-13.807 0-25-11.19-25-25C5 17.441 13.871 7.048 25.83 5.04Z"
                />
                <Defs>
                    <LinearGradient
                        id="a"
                        x1={42.5}
                        x2={30}
                        y1={10.165}
                        y2={47.547}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#9610FF" stopOpacity={0}/>
                        <Stop offset={1} stopColor="#9610FF"/>
                    </LinearGradient>
                </Defs>
            </Svg>
        </Animated.View>
    );
};

export default SvgComponent;
