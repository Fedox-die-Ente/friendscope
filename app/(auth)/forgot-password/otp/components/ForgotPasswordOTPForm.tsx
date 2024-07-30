import React from 'react';
import {Text, View} from 'react-native';
import FriendScopeOTPInput from "../../../../../components/shared/input/FriendScopeOTPInput";
import CustomButton from "../../../../../components/shared/CustomButton";
import {router} from "expo-router";

const ForgotPasswordOtpForm = () => {

    const tempContinue = () => {
        router.push({pathname: '/forgot-password/create-password'})
    }

    return (
        <View className="pt-10">
            <View className="flex flex-row space-x-4 items-center justify-center mx-auto text-center w-full">
                {[...Array(4)].map(() => (
                    <FriendScopeOTPInput key={Math.random()}
                    />
                ))}
            </View>

            <View className={'items-center justify-center pt-10 space-y-5'}>
                <Text className={'text-greyScale-900 dark:text-other-white font-urbanist_medium text-body-xlarge'}>Didn't
                    receive
                    email?</Text>
                <Text className={'text-greyScale-900 dark:text-other-white font-urbanist_medium text-body-xlarge'}>You
                    can resend code
                    in <Text className={'text-primary'}>xx</Text> seconds.</Text>

                <CustomButton disabled={true} title={'Resend code'} handlePress={() => {

                }} type={'secondary'} containerClasses={'w-full mt-10'}
                              textClasses={'text-primary dark:text-other-white font-urbanist_medium text-body-large'}/>

                <CustomButton title={'DEBUG -> CREATE PW'} handlePress={tempContinue} type={'secondary'}
                              containerClasses={'mt-5'}/>
            </View>
        </View>
    );
}

export default ForgotPasswordOtpForm;
