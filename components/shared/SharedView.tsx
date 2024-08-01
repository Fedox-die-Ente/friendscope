import {SafeAreaView, StyleSheet, View} from 'react-native'
import React from 'react'

interface Props {
    safeViewClasses?: string,
    viewClasses?: string,
    children: React.ReactNode
}

const SharedView = ({ safeViewClasses, viewClasses, children } : Props) => {

    return (
        <SafeAreaView className={safeViewClasses}>
            <View className={viewClasses}>
                {children}
            </View>
        </SafeAreaView>
    )
}
export default SharedView