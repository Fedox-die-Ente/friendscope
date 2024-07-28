import {View, Text, Image, Animated} from 'react-native'
import React, {useEffect, useRef} from 'react'
import LogoSvg from "./svgs/LogoSvg";
import StarsSvg from "./svgs/StarsSvg";
import LoadingSvg from "./svgs/LoadingSvg";

const SplashScreenComponent = () => {

    const rotation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const startRotation = () => {
            Animated.loop(
                Animated.timing(rotation, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                })
            ).start();
        };

        startRotation();
    }, [rotation]);

    const rotateInterpolate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const animatedStyle = {
        transform: [{ rotate: rotateInterpolate }],
    };

    return (
        <View className={'flex-1 items-center justify-center relative'}>
            <StarsSvg className={'absolute'}/>
            <View className={'justify-center items-center space-y-5'}>
                <LogoSvg/>
                <Text className={'text-heading-2 w-full text-other-white font-urbanist_bold z-'}>FriendScope</Text>
                <Animated.View style={animatedStyle}>
                    <LoadingSvg />
                </Animated.View>
            </View>
        </View>
    )
}
export default SplashScreenComponent