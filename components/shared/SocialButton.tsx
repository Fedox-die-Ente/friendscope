import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
    title: string;
    svg: JSX.Element;
}

const SocialButton = ({title, svg}: Props) => {
    return (
        <TouchableOpacity className='w-full'>
            <View
                className='relative border border-greyScale-200 dark:border-darkColors-dark_5 dark:bg-darkColors-dark_3 rounded-full w-full py-3 px-20'>
                <Text
                    className='text-greyScale-900 dark:text-other-white font-urbanist_bold justify-center text-center items-center text-body-large'>
                    {title}
                </Text>
                <View className='absolute left-4 top-1/2 transform -translate-y-1/2'>
                    {svg}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SocialButton;
