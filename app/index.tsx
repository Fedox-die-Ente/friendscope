import {Pressable, Text, View} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {useColorScheme} from "nativewind";

const Page = () => {

    const {colorScheme, toggleColorScheme} = useColorScheme();


    return (
        <SafeAreaView className={'bg-darkColors-dark_1'}>
            <View className="items-center justify-center bg-darkColors-dark_1 p-4 h-full">
                <Text className="text-heading-1 font-urbanist_semibold text-primary">FriendScope</Text>
                <Link href="/walkthrough">
                    <Text
                        className="underline text-heading-5 text-white dark:text-other-red font-urbanist_medium">Walkthrough</Text>
                </Link>
                <Link href="/welcome">
                    <Text className="underline text-heading-5 text-white dark:text-other-red font-urbanist_medium">Welcome
                        Page</Text>
                </Link>
                <Link href="(auth)/sign-in">
                    <Text className="underline text-heading-5 text-white dark:text-other-red font-urbanist_medium">Sign
                        In</Text>
                </Link>
                <Pressable
                    className="mt-12 flex-1 items-center max-h-[5%] justify-center bg-neutral-100 dark:bg-neutral-900"
                    onPress={toggleColorScheme}>
                    <Text className="text-black dark:text-white">
                        {`Test theme switcher ${colorScheme === "dark" ? "🌙" : "🌞"}`}
                    </Text>
                </Pressable>

            </View>
        </SafeAreaView>
    );
}

export default Page;