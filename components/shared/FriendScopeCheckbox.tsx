import {Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import CheckIcon from "../svgs/icons/CheckIcon";

interface Props {
    textStyles?: string
    label: string
    defaultCheck?: boolean
}

const FriendScopeCheckbox = ({textStyles, label, defaultCheck}: Props) => {

    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked)
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={handleCheck} className={'flex flex-row gap-x-3'}>
            <View
                className={`w-6 h-6 rounded-md ${checked == false ? 'border-4 border-primary' : 'bg-primary'}`}>
                {checked ? (
                    <CheckIcon className={'items-center justify-center my-auto mx-auto fill-white'}/>
                ) : null}
            </View>

            <Text className={textStyles}>{label}</Text>
        </TouchableOpacity>

    )
}
export default FriendScopeCheckbox
