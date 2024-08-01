import {Pressable, Text, View} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {useColorScheme} from "nativewind";
import React from "react";

const Page = () => {
    const {colorScheme, toggleColorScheme} = useColorScheme();

    const links = [
        {
            title: 'Walkthrough',
            href: '/walkthrough'
        },
        {
            title: 'Welcome Page',
            href: '/welcome'
        },
        {
            title: 'Sign In',
            href: '/(auth)/sign-in'
        },
        {
            title: 'Forgot Password',
            href: '/(auth)/forgot-password'
        },
        {
            title: 'Create Password',
            href: '/(auth)/forgot-password/create-password'
        },
        {
            title: "Testing Page",
            href: "/test"
        }
    ]

    return (
        <SafeAreaView className="bg-darkColors-dark_1 flex-1">
            <View className="bg-darkColors-dark_1 p-4 flex-1">
                <Text className="text-heading-1 font-urbanist_semibold text-primary mb-4">Debug Interface</Text>

                <View className="flex flex-row flex-wrap gap-4 mb-6">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="bg-neutral-200 dark:bg-neutral-800 rounded-lg p-4 flex-1 min-w-[120px] items-center justify-center shadow-md"
                        >
                            <Text className="text-primary dark:text-secondary font-medium">{link.title}</Text>
                        </Link>
                    ))}
                </View>

                <Pressable
                    className="mt-12 p-4 items-center rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg"
                    onPress={toggleColorScheme}
                >
                    <Text className="text-black dark:text-white text-lg">
                        {`Test theme switcher ${colorScheme === "dark" ? "🌙" : "🌞"}`}
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default Page;
