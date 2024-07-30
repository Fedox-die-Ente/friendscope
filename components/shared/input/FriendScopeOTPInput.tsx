import React from 'react';
import {TextInput, View} from 'react-native';

const FriendScopeOtpInput = () => {
    return (
        <View className="flex-1 px-1">
            <TextInput
                maxLength={1}
                keyboardType="number-pad"
                className="bg-gray-50 dark:bg-darkColors-dark_3 w-full h-16 text-center  rounded-lg text-greyScale-900 dark:text-other-white text-xl font-bold focus:border-2 border-primary focus:bg-primary/10"
            />
        </View>
    );
};

export default FriendScopeOtpInput;
