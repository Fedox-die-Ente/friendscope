import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

interface Props {
    title: string;
    description: string;
}

const TopSection: React.FC = ({title, description}: Props) => {
    return (
        <View className="space-y-4">
            <View className="flex flex-row text-heading-3 font-heading-3">
                <Text className="text-heading-3 font-urbanist_bold text-greyScale-900 dark:text-other-white">
                    {title}
                </Text>
            </View>
            <Text className="text-body-xlarge text-greyScale-700 dark:text-greyScale-200 font-urbanist_regular">
                {description}
            </Text>
        </View>
    )
}
export default TopSection;
const styles = StyleSheet.create({})
