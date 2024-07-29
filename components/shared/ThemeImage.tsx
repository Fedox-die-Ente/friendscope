import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useColorScheme} from "nativewind";

interface Props {
    lightPic: any
    darkPic: any
    width: number
    height: number
    className?: string
}

const ThemeImage = ({ lightPic, darkPic, width, height, className } : Props) => {

    const { colorScheme } = useColorScheme();

    const pic = colorScheme === "dark" ? darkPic : lightPic;

    return (
        <View>
            <Image
                className={className}
                source={pic}
                width={width}
                height={height}
            />
        </View>
    )
}
export default ThemeImage
const styles = StyleSheet.create({})
