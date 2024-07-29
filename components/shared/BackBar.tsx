import {StyleSheet, View} from 'react-native'
import React from 'react'
import ArrowLeftIcon from "../svgs/icons/ArrowLeftIcon";
import {Link} from "expo-router";

interface Props {
    route: string;
}

const BackBar = ({route}: Props) => {
    return (
        <View>
            <Link href={route}>
                <ArrowLeftIcon className={'fill-greyScale-900'}/>
            </Link>
        </View>
    )
}
export default BackBar
const styles = StyleSheet.create({})
