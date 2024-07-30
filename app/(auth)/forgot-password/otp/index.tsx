import {SafeAreaView, StyleSheet, View} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";
import TopSection from "../../../../components/shared/TopSection";
import ForgotPasswordOTPForm from "./components/ForgotPasswordOTPForm";
import BackBar from "../../../../components/shared/BackBar";


const Index = () => {

    const params = useLocalSearchParams();

    const {email} = params;

    const hideEmail = (email) => {
        if (typeof email !== "string") return '';

        const [localPart, domain] = email.split('@');
        if (!domain) return email;

        const localPartStart = localPart.slice(0, 2); // First 2 characters
        const localPartEnd = localPart.slice(-2); // Last 2 characters
        const hiddenLocalPart = localPartStart + '*'.repeat(localPart.length - 4) + localPartEnd;

        const domainStart = domain.split('.')[0].slice(0, 2); // First 2 characters of domain
        const domainEnd = domain.split('.').slice(-1); // Last part of domain
        const hiddenDomain = domainStart + '*'.repeat(domain.length - 4) + '.' + domainEnd;

        return `${hiddenLocalPart}@${hiddenDomain}`;
    };

    return (
        <SafeAreaView className="p-4 pt-9 bg-other-white dark:bg-darkColors-dark_1 h-full">
            <View className="pt-9 pr-7 pb-9">
                <BackBar route={'/forgot-password'}/>
            </View>
            <TopSection title={'OTP code verification 🔐'}
                        description={`We have sent an OTP code to your email ${hideEmail(email)}. Enter the OTP code below to verify.`}/>

            <ForgotPasswordOTPForm/>
        </SafeAreaView>
    )
}
export default Index
const styles = StyleSheet.create({})
