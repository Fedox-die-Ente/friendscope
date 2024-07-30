import React from 'react';
import {Text, View} from 'react-native';

const WelcomeSection: React.FC = () => {
    return (
        <View className="space-y-4">
            <View className="flex flex-row text-heading-3 font-heading-3">
                <Text className="text-heading-3 font-urbanist_bold text-greyScale-900 dark:text-other-white">
                    Reset your password 🔑
                </Text>
            </View>
            <Text className="text-body-xlarge text-greyScale-700 dark:text-greyScale-200 font-urbanist_regular">
                Please enter your email and we will send an OTP code in the next step to reset your password.
            </Text>
        </View>
    );
};

export default WelcomeSection;
