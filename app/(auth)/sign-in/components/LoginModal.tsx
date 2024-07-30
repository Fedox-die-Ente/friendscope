import React from 'react';
import {Alert, Animated, Modal, Text, View} from 'react-native';
import {BlurView} from 'expo-blur';
import UserConfettiSvg from "../../../../components/svgs/mockups/UserConfettiSvg";
import PrimaryLoadingCircle from "../../../../components/svgs/loading/PrimaryLoadingCircle";


interface LoginModalProps {
    visible: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({visible, onClose}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                onClose();
            }}
        >
            <BlurView
                style={{flex: 1}}
                intensity={15}
                tint="dark"
                experimentalBlurMethod="dimezisBlurView"
            >
                <View className="flex-1 justify-center items-center">
                    <View
                        className="bg-other-white dark:bg-darkColors-dark_3 p-4 rounded-lg items-center justify-center">
                        <UserConfettiSvg/>
                        <Text className="text-heading-4 font-urbanist_bold text-primary mt-5">
                            Login Successful!
                        </Text>
                        <View className="flex flex-col text-center items-center space-y-5">
                            <View className="text-center items-center">
                                <Text
                                    className="text-body-large font-urbanist_regular text-greyScale-900 dark:text-other-white mt-5">
                                    Please wait...
                                </Text>
                                <Text
                                    className="text-body-large font-urbanist_regular text-greyScale-900 dark:text-other-white">
                                    You will be directed to the homepage.
                                </Text>
                            </View>
                            <Animated.View>
                                <PrimaryLoadingCircle/>
                            </Animated.View>
                        </View>
                    </View>
                </View>
            </BlurView>
        </Modal>
    );
};

export default LoginModal;
