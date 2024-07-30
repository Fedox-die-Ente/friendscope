import {SafeAreaView, StyleSheet, View} from 'react-native'
import React, {useState} from 'react'
import BackBar from "../../../../components/shared/BackBar";
import TopSection from "../../../../components/shared/TopSection";
import CreatePasswordForm from "./components/CreatePasswordForm";

const Index = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <SafeAreaView className="p-4 pt-9 bg-other-white dark:bg-darkColors-dark_1 h-full">
            <View className="pt-9 pr-7 pb-9">
                <BackBar route={'/forgot-password'}/>
            </View>
            <TopSection title={'Create a password 🔒'}
                        description={`Create your new password. If you forget it, then you have to do forgot password.`}/>

            <CreatePasswordForm/>

        </SafeAreaView>
    )
}
export default Index
const styles = StyleSheet.create({})
