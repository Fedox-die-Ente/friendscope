import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

interface Props {
    title: string;
    handlePress: () => void;
    containerClasses?: string;
    textClasses?: string;
    disabled?: boolean;
    type: 'primary' | 'secondary';
}

const CustomButton = ({title, handlePress, textClasses, containerClasses, type, disabled}: Props) => {
    return (
        <TouchableOpacity onPress={handlePress}
                          className={`${type === 'primary' ? `bg-primary p-4 rounded-full w-full` : 'bg-background-purple dark:bg-darkColors-dark_5 p-4 rounded-full'} ${containerClasses}`}>
            <Text className={`text-center ${textClasses}`}>{title}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton
const styles = StyleSheet.create({})
