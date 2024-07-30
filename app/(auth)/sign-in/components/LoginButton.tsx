import React from 'react';
import {View} from 'react-native';
import CustomButton from "../../../../components/shared/CustomButton";

interface LoginButtonProps {
    onPress: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({onPress}) => {
    return (
        <View className="border-t border-greyScale-200 dark:border-darkColors-dark_5 pt-6 rounded w-full">
            <CustomButton
                title={'Log in'}
                handlePress={onPress}
                type={'primary'}
                textClasses={'font-urbanist_bold text-body-large text-other-white'}
            />
        </View>
    );
};

export default LoginButton;
