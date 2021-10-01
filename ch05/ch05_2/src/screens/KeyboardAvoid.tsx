import React, {useRef, useCallback, useState, useMemo} from 'react'
import {StyleSheet, View, Text, Switch, TextInput, Keyboard, Platform, KeyboardAvoidingView} from 'react-native'
import {useTheme} from 'react-native-paper'
import {useToggleTheme} from '../contexts'
import * as D from '../data'

export default function KeyboardAvoid(){
    const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson())
    const {dark, colors} = useTheme()
    const toggleTheme = useToggleTheme()
    const textInputRef = useRef<TextInput | null>(null)
    const setFocus = useCallback(() => textInputRef.current?.focus(), [textInputRef.current])
    const textInputStyle = useMemo(() => [styles.textInput, {color: colors.text, borderColor: colors.placeholder}], [colors.text, colors.placeholder])


    return (
        <View style={[styles.view, {backgroundColor: colors.surface}]}>
            <View style={[styles.topBar, {backgroundColor: colors.accent}]}>
                <Text style={[styles.textButton]} onPress={setFocus}>focus</Text>
                <Text style={[styles.textButton]} onPress={Keyboard.dismiss}>dismiss keyboard</Text>
                <View style={{flex: 1}}></View>
                <Switch value={dark} onValueChange={toggleTheme}></Switch>
            </View>
            <KeyboardAvoidingView style={[styles.flex]} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <View style={[styles.flex]}></View>
                <View style={[styles.textView]}>
                    <Text style={[styles.text, {color: colors.text}]}>email</Text>
                    <TextInput
                        style={[styles.textInput, {color: colors.text, borderColor: colors.placeholder}]}
                        value={person.email}
                        placeholder="enter your email"
                        onChangeText={(email) => setPerson((person) => ({...person, email}))}></TextInput>
                </View>
                <View style={[styles.textView]}>
                    <Text style={[styles.text, {color: colors.text}]}>name</Text>
                    <TextInput ref={textInputRef} style={textInputStyle}
                        value={person.name} placeholder="enter your name"
                        onChangeText={(name) => setPerson((person) => ({...person, name}))}></TextInput>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {flex: 1},
    topBar: {flexDirection: 'row', padding: 5},
    textButton: {marginLeft: 10, fontSize: 20},
    keyboardAvoidingView: {flex: 1, padding: 10},
    textView: {padding: 5},
    text: {fontSize: 24},
    textInput: {fontSize: 24, borderWidth: 1, borderRadius: 5},
    flex: {flex: 1}
})