import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import HideIcon from "../svgs/icons/HideIcon";
import ShowIcon from "../svgs/icons/ShowIcon";
import {SvgProps} from "react-native-svg";
import {useColorScheme} from "nativewind";

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

    const {colorScheme} = useColorScheme();

    const IconColor = colorScheme === 'dark' ? 'fill-other-white' : 'fill-greyScale-900';

    const eye = secureTextEntry ? (
        hidePass ? (
            <HideIcon className={IconColor}/>
        ) : (
            <ShowIcon className={IconColor}/>
        )
    ) : null;


    const color = colorScheme === 'dark' ? 'ml-3 fill-other-white' : 'ml-3 fill-greyScale-900';
    const placeholderColor = colorScheme === 'dark' ? '#9E9E9E' : '#616161';

    return (
        <View
            className="relative flex-row items-center border rounded-lg border-greyScale-50 dark:border-darkColors-dark_3 bg-greyScale-50 dark:bg-darkColors-dark_3 p-3">
            {Icon && <Icon className={color}/>}
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                secureTextEntry={secureTextEntry && hidePass}
                className="flex-1 px-3 py-2 text-body-xlarge font-urbanist_semibold border-greyScale-50 bg-greyScale-50 dark:bg-darkColors-dark_3 text-greyScale-900 dark:text-other-white"
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