import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SplashScreen, Stack} from "expo-router";
import {useFonts} from "expo-font";
import AnimatedSplash from "react-native-animated-splash-screen";
import SplashScreenComponent from "../components/SplashScreenComponent";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

    const [loaded, setLoaded] = useState(false);

    const [fontsLoaded, error] = useFonts({
        "Urbanist Bold": require("../assets/fonts/Urbanist-Bold.ttf"),
        "Urbanist SemiBold": require("../assets/fonts/Urbanist-SemiBold.ttf"),
        "Urbanist Medium": require("../assets/fonts/Urbanist-Medium.ttf"),
        "Urbanist Regular": require("../assets/fonts/Urbanist-Regular.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) {
            SplashScreen.hideAsync();

            setTimeout(() => {
                setLoaded(true)
            }, 1300) // 1.3 seconds
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded) return null;

    return (
        <>
            <AnimatedSplash
                translucent={true}
                isLoaded={loaded}
                logoImage={require("../assets/icons/logo.png")}

                backgroundColor={"#9610FF"}
                logoHeight={150}
                logoWidth={150}
                customComponent={<SplashScreenComponent/>}
            >

                <Stack>
                    <Stack.Screen name="walkthrough/index" options={{headerShown: false}}/>
                    <Stack.Screen name="index" options={{headerShown: false}}/>
                    <Stack.Screen name="welcome/index" options={{headerShown: false}}/>
                    <Stack.Screen name="(auth)/sign-in/index" options={{headerShown: false}}/>
                </Stack>

            </AnimatedSplash>

        </>
    );
};

export default RootLayout;

const styles = StyleSheet.create({});
