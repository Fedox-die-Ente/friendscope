import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import FriendScopeTextInput from "../../../../components/shared/FriendScopeTextInput";
import EmailIcon from "../../../../components/svgs/icons/EmailIcon";
import ForgotPasswordButton from "./ForgotPasswordButton";
import {router} from "expo-router";


const PasswordResetForm: React.FC = () => {

    const [email, setEmail] = useState("");

    const handleContinue = () => {
        router.push({pathname: '/forgot-password/otp', params: {email}})
    }

    return (
        <>
            <View className="pt-5 space-y-5">
                <View>
                    <Text
                        className="text-body-xlarge font-urbanist_semibold text-greyScale-900 dark:text-other-white pb-4">
                        Email
                    </Text>
                    <FriendScopeTextInput
                        onChangeText={(text) => setEmail(text)}
                        icon={EmailIcon}
                        placeholder="johndoe@doe.com"
                        secureTextEntry={false}
                    />
                </View>
            </View>
            <View className="flex-1 justify-end items-center w-full">
                <ForgotPasswordButton onPress={handleContinue}/>
            </View>
        </>

    )
}
export default PasswordResetForm
const styles = StyleSheet.create({})
