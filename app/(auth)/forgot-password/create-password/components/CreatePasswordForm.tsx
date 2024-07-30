import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import FriendScopeTextInput from "../../../../../components/shared/FriendScopeTextInput";
import PasswordIcon from "../../../../../components/svgs/icons/PasswordIcon";
import CustomButton from "../../../../../components/shared/CustomButton";
import PasswordResetModal from "../../components/ResetModal";

const CreatePasswordForm = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <PasswordResetModal visible={showModal} onClose={() => setShowModal(false)}/>
            <View className="pt-5 space-y-5">
                <View className={'space-y-7'}>
                    <Text
                        className="text-body-xlarge font-urbanist_semibold text-greyScale-900 dark:text-other-white pb-4">
                        New password
                    </Text>
                    <FriendScopeTextInput
                        onChangeText={() => {
                        }}
                        icon={PasswordIcon}
                        placeholder="Password"
                        secureTextEntry={true}
                    />

                    <Text
                        className="text-body-xlarge font-urbanist_semibold text-greyScale-900 dark:text-other-white pb-4">
                        Confirm new password
                    </Text>
                    <FriendScopeTextInput
                        onChangeText={() => {
                        }}
                        icon={PasswordIcon}
                        placeholder="Confirm password"
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <View className="flex-1 justify-end items-center w-full">
                <View className="border-t border-greyScale-200 dark:border-darkColors-dark_5 pt-6 rounded w-full">
                    <CustomButton
                        title={'Save new password'}
                        handlePress={() => {
                            setShowModal(true)
                        }}
                        type={'primary'}
                        textClasses={'font-urbanist_bold text-body-large text-other-white'}
                    />
                </View>
            </View>
        </>
    )
}
export default CreatePasswordForm
const styles = StyleSheet.create({})
