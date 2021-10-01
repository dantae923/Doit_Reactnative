import React from 'react'
import {StyleSheet, View, Image, ScrollView} from 'react-native'
import * as D from '../data'

const avatars = D.makeArray(200).map((notUsed) => D.randomAvatarUrl())

export default function Content(){
    const children = avatars.map((avatarUrl, index) =>(
        <View key={index.toString()} style={styles.avatarView}>
            <Image style={styles.avatar} source={{uri: avatarUrl}}></Image>
        </View>
    ))

    return <ScrollView contentContainerStyle={[styles.view]}>{children}</ScrollView>
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        //overflow: 'hidden',
        flexWrap: 'wrap',
        justifyContent: 'center',
        //flex: 1,
        padding: 5
    },
    text: {fontSize: 20},
    avatarView: {padding: 3},
    avatar: {width: 50, height: 50, borderRadius: 25}
})