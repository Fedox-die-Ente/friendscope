import {SafeAreaView, StyleSheet, View} from 'react-native'
import React, {useState} from 'react'
import BackBar from "../../../components/shared/BackBar";
import ForgotPasswordSection from "./components/ForgotPasswordSection";
import PasswordResetForm from "./components/PasswordResetForm";

const Index = () => {

    const [email, setEmail] = useState()

    const handleContinue = () => {

    }

    return (
        <SafeAreaView className="p-4 pt-9 bg-other-white dark:bg-darkColors-dark_1 h-full">
            <View className="pt-9 pr-7 pb-9">
                <BackBar route={'/sign-in'}/>
            </View>
            <ForgotPasswordSection/>
            <PasswordResetForm/>
        </SafeAreaView>
    )
}
export default Index
const styles = StyleSheet.create({})
