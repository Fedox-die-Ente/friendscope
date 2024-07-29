import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import HideIcon from "../svgs/icons/HideIcon";
import ShowIcon from "../svgs/icons/ShowIcon";
import {SvgProps} from "react-native-svg";

interface CustomTextInputProps {
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
    hidePass?: boolean;
    onToggleHidePass?: () => void;
    icon?: (props: SvgProps) => React.ReactElement;
}

const FriendScopeTextInput: React.FC<CustomTextInputProps> = ({
                                                                  value,
                                                                  onChangeText,
                                                                  placeholder,
                                                                  secureTextEntry,
                                                                  hidePass,
                                                                  onToggleHidePass,
                                                                  icon: Icon,
                                                              }) => {
    const eye = secureTextEntry ? (
        hidePass ? (
            <HideIcon className="fill-greyScale-900"/>
        ) : (
            <ShowIcon className="fill-greyScale-900"/>
        )
    ) : null;

    return (
        <View className="relative flex-row items-center border rounded-lg border-greyScale-50 bg-greyScale-50 p-3">
            {Icon && <Icon className="ml-3 fill-greyScale-900"/>}
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry && hidePass}
                className="flex-1 px-3 py-2 text-body-xlarge font-urbanist_semibold border-greyScale-50 bg-greyScale-50 text-greyScale-900"
            />
            {secureTextEntry && (
                <TouchableOpacity
                    onPress={onToggleHidePass}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                    {eye}
                </TouchableOpacity>
            )}
        </View>
    );
};

export default FriendScopeTextInput;