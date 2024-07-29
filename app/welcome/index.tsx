import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LogoSvg from '../../components/svgs/LogoSvg';
import SocialButton from '../../components/shared/SocialButton';
import {socialButtons} from "../../lib/constants";
import CustomButton from "../../components/shared/CustomButton";
import {Link, router} from "expo-router";

const Index = () => {

    const handleLogin = () => {
        router.push('/sign-in')
    }

    return (
        <SafeAreaView className='bg-other-white dark:bg-darkColors-dark_1'>
            <View className='bg-other-white dark:bg-darkColors-dark_1 h-full'>
                <View className='justify-center items-center mx-auto'>
                    <LogoSvg className='fill-primary mt-14'/>
                    <View className='items-center space-y-5 mt-10'>
                        <Text
                            className='text-heading-2 text-center text-greyScale-900 dark:text-other-white font-urbanist_bold'>FriendScope</Text>
                        <Text
                            className='text-greyScale-700 text-center dark:text-greyScale-200 font-urbanist_regular text-body-xlarge tracking-widest'>Let's
                            dive in into your account!</Text>
                        <View className='w-full space-y-5'>
                            <View className='pt-5 w-full'>
                                {socialButtons.map((button) => (
                                    <View key={button.id} className={'mb-5'}>
                                        <SocialButton key={button.id} title={button.title} svg={button.svg}/>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    className={'flex flex-col w-full space-y-7 border-greyScale-100 dark:border-darkColors-dark_5 mt-3 items-center pl-5 pr-5'}>
                    <CustomButton title={'Log in'} handlePress={handleLogin} type={'primary'}
                                  textClasses={'text-body-large font-urbanist_bold text-other-white'}/>


                    <Text className={'font-urbanist_medium text-greyScale-900 dark:text-greyScale-50 text-body-large'}>Don't
                        have an
                        account? <Link href={'/register'} className={'font-urbanist_bold text-primary'}>Sign
                            up</Link></Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Index;
const styles = StyleSheet.create({});
