import React from 'react';
import {Text, View} from 'react-native';

import {Link} from 'expo-router';
import FriendScopeTextInput from "../../../../components/shared/FriendScopeTextInput";
import EmailIcon from "../../../../components/svgs/icons/EmailIcon";
import PasswordIcon from "../../../../components/svgs/icons/PasswordIcon";
import FriendScopeCheckbox from "../../../../components/shared/FriendScopeCheckbox";

interface FormSectionProps {
    hidePass: boolean;
    onToggleHidePass: () => void;
}

const LoginFormSection: React.FC<FormSectionProps> = ({hidePass, onToggleHidePass}) => {
    return (
        <View className="pt-5 space-y-5">
            <View>
                <Text className="text-body-xlarge font-urbanist_semibold text-greyScale-900 dark:text-other-white pb-4">
                    Email
                </Text>
                <FriendScopeTextInput
                    icon={EmailIcon}
                    placeholder="johndoe@doe.com"
                    secureTextEntry={false}
                />
            </View>
            <Text className="text-body-xlarge font-urbanist_semibold text-greyScale-900 dark:text-other-white pb-4">
                Password
            </Text>
            <FriendScopeTextInput
                icon={PasswordIcon}
                placeholder="Password"
                secureTextEntry={true}
                hidePass={hidePass}
                onToggleHidePass={onToggleHidePass}
            />
            <View className="pt-3 flex flex-row">
                <FriendScopeCheckbox
                    label={'Remember me'}
                    textStyles={'text-body-xlarge font-urbanist_semibold justify-center text-center items-center text-greyScale-900 dark:text-other-white'}
                />
                <View className="flex-grow"/>
                <Link href={'/forgot-password'} className="text-primary text-body-xlarge font-urbanist_bold">
                    Forgot password?
                </Link>
            </View>
            <View className="border-t border-greyScale-200 dark:border-darkColors-dark_5 p-1"/>
            <View className="flex flex-row items-center justify-center">
                <Text className="text-greyScale-900 dark:text-greyScale-50 text-body-xlarge font-urbanist_medium">
                    Don't have an account?{' '}
                </Text>
                <Link href={'sign-up'} className="text-primary text-body-xlarge font-urbanist_bold">
                    Sign up
                </Link>
            </View>
        </View>
    );
};

export default LoginFormSection;
