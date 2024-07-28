import { Text, View } from "react-native";
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";

const Page = () => {
  return (
      <SafeAreaView className={'bg-darkColors-dark_1'}>
          <View className="items-center justify-center bg-darkColors-dark_1 p-4 h-full">
              <Text className="text-heading-1 font-urbanist_semibold text-primary">FriendScope</Text>
              <Link href="/profile">
                  <Text className="underline text-heading-5 text-secondary font-urbanist_medium">This is a test route mf</Text>
              </Link>
          </View>
      </SafeAreaView>
  );
}

export default Page;