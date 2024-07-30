import React, {useEffect, useRef, useState} from 'react';
import {Animated, SafeAreaView, View} from 'react-native';
import BackBar from '../../../components/shared/BackBar';
import LoginModal from "./components/LoginModal";
import WelcomeSection from "./components/WelcomeSection";
import LoginFormSection from "./components/FormSection";
import LoginButton from "./components/LoginButton";

const Index = () => {
    const [hidePass, setHidePass] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const handleToggleHidePass = () => {
        setHidePass(!hidePass);
    };

    const shakeAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const shake = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.spring(shakeAnimation, {
                        toValue: 1,
                        friction: 2,
                        tension: 150,
                        useNativeDriver: true,
                    }),
                    Animated.spring(shakeAnimation, {
                        toValue: -1,
                        friction: 2,
                        tension: 150,
                        useNativeDriver: true,
                    }),
                    Animated.spring(shakeAnimation, {
                        toValue: 1,
                        friction: 2,
                        tension: 150,
                        useNativeDriver: true,
                    }),
                    Animated.spring(shakeAnimation, {
                        toValue: -1,
                        friction: 2,
                        tension: 150,
                        useNativeDriver: true,
                    }),
                    Animated.spring(shakeAnimation, {
                        toValue: 0,
                        friction: 2,
                        tension: 150,
                        useNativeDriver: true,
                    }),
                ]),
                {}
            ).start();
        };

        const timeoutId = setTimeout(shake, 1000);

        return () => clearTimeout(timeoutId);
    }, [shakeAnimation]);

    const shakeStyle = {
        transform: [
            {
                translateX: shakeAnimation.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [-10, 0, 10],
                }),
            },
            {
                rotate: shakeAnimation.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: ['-5deg', '0deg', '5deg'],
                }),
            },
        ],
    };

    const handleLogin = () => {
        setShowModal(true);
    };

    return (
        <SafeAreaView className="p-4 pt-9 bg-other-white dark:bg-darkColors-dark_1 h-full">
            <LoginModal visible={showModal} onClose={() => setShowModal(false)}/>
            <View className="pt-9 pr-7 pb-9">
                <BackBar route={'/welcome'}/>
            </View>
            <WelcomeSection shakeStyle={shakeStyle}/>
            <LoginFormSection hidePass={hidePass} onToggleHidePass={handleToggleHidePass}/>
            <View className="flex-1 justify-end items-center w-full">
                <LoginButton onPress={handleLogin}/>
            </View>
        </SafeAreaView>
    );
};

export default Index;
