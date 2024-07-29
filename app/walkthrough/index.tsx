import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import SubtractCard from "../../components/svgs/SubtractCard";
import WalkThroughFirst from "../../components/svgs/mockups/WalkThroughFirst";
import CustomButton from "../../components/shared/CustomButton";
import {useColorScheme} from "nativewind";
import ThemeImage from "../../components/shared/ThemeImage";
import {walkThroughSteps} from "../../lib/constants";
import {router} from "expo-router";

const Index = () => {

    const { colorScheme, toggleColorScheme } = useColorScheme();

    const fill = colorScheme === 'dark' ? 'fill-darkColors-dark_1' : 'fill-white';

    const [step, setStep] = useState(1)

    const steps = walkThroughSteps.length;

    const handleContinue = () => {
        if (step < steps) {
            setStep(step + 1);
        } else {
            router.push('welcome');
        }
    };

    const handleSkip = () => {
        router.push('welcome');
    };

    return (
        <SafeAreaView className={'bg-primary h-full flex-1'}>

            <View className={'flex-1 items-center'}>
                <ThemeImage className={'mt-1'}
                            lightPic={walkThroughSteps[step - 1].images.light}
                            darkPic={walkThroughSteps[step - 1].images.dark}
                            width={344}
                            height={700}/>
            </View>

            <View className={'relative flex-1 items-center'}>
                <SubtractCard className={`object-contain absolute top-0 w-full ${fill}`}/>
                <View className={'absolute top-0 w-full justify-center flex-col items-center mt-28 space-y-5'}>
                    <Text className={'text-heading-3 text-greyScale-900 dark:text-other-white font-urbanist_bold text-center'}>{walkThroughSteps[step - 1].title}</Text>
                    <Text className={'text-greyScale-700 dark:text-greyScale-200 font-urbanist_regular text-body-xlarge ml-4 mr-4 text-center'}>{walkThroughSteps[step - 1].desc}</Text>
                </View>


                <View className={'absolute bottom-8 w-full flex flex-row justify-between px-8 dark:bg-darkColors-dark_1'}>
                    <View className={'flex flex-row w-full pt-3 border-t border-greyScale-100 dark:border-darkColors-dark_5 items-center'}>

                        {step < 3 && (
                            <CustomButton title={'Skip'} handlePress={handleSkip} type={'secondary'} containerClasses={'flex-1 mr-2 w-full'} textClasses={'text-primary dark:text-other-white text-center font-urbanist_bold text-body-large'}/>
                        )}
                        <CustomButton title={'Continue'} handlePress={handleContinue} type={'primary'} containerClasses={'flex-1 ml-2 w-full'} textClasses={'text-other-white text-center font-urbanist_bold text-body-large'} />
                    </View>
                </View>

                <View className={'absolute bottom-0  w-full flex flex-row justify-center pb-4'}>
                    {Array.from({ length: steps }).map((_, index) => (
                        <View
                            key={index}
                            onTouchStart={() => setStep(index + 1)}
                            className={`items-center justify-center mx-auto h-2 w-2 mx-1 rounded-full ${index + 1 === step ? 'bg-primary pl-3 pr-3' : 'bg-greyScale-200 dark:bg-darkColors-dark_5'}`}
                        />
                    ))}
                </View>
            </View>

        </SafeAreaView>
    );
};

export default Index;
