import {StyleSheet, View} from 'react-native'
import React from 'react'
import ArrowLeftIcon from "../svgs/icons/ArrowLeftIcon";
import {Link} from "expo-router";
import {useColorScheme} from "nativewind";

interface Props {
    route: string;
}

const BackBar = ({route}: Props) => {

    const {colorScheme} = useColorScheme();

    const color = colorScheme === 'dark' ? 'fill-white' : 'fill-greyScale-900';

    return (
        <View>
            <Link href={route}>
                <ArrowLeftIcon className={color}/>
            </Link>
        </View>
    )
}
export default BackBar
const styles = StyleSheet.create({})
