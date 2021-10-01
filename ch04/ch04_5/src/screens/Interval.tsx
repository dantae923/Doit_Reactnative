import React, {useCallback, useState} from 'react'
import {StyleSheet, View, Text, ScrollView} from 'react-native'
import {Colors} from 'react-native-paper'
import {Avatar} from '../components'
import * as D from '../data'
import {useToggle, useTimeout, useInterval} from '../hooks'

type IdAndAvatar = Pick<D.IPerson, 'id' | 'avatar'>

export default function Interval(){
    const [avatars, setAvatars] = useState<IdAndAvatar[]>([])
    const [start, toggleStart] = useToggle(true)
    const clearAvatars = useCallback(() => setAvatars((notUsed) => []), [])
    useInterval(() => {
        if(start) {
            setAvatars((avatars) => [
                ...avatars,
                {id: D.randomId(), avatar: D.randomAvatarUrl()}
            ])
        }
    }, 1000, [start])

    const children = avatars.map(({id, avatar}) => (
        <Avatar key={id} uri={avatar} size={70} viewStyle={styles.avatarViewStyle}></Avatar>
    ))

    return (
        <View style={styles.view}>
            <View style={styles.topBar}>
                <Text onPress={toggleStart} style={styles.topBarText}>
                    {start ? 'stop' : 'start'}
                </Text>
                <Text onPress={clearAvatars} style={styles.topBarText}>
                    clear avatars
                </Text>
            </View>
            <Text style={styles.title}>Interval</Text>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                {children}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {flex: 1, alignItems: 'center', backgroundColor: Colors.lime300},
    title: {fontSize: 30, fontWeight: '600'},
    topBar: {width: '100%', flexDirection: 'row', padding: 5, justifyContent: 'space-between', backgroundColor: Colors.blue900},
    topBarText: {fontSize: 20, color: 'white'},
    contentContainerStyle: {flexDirection: 'row', flexWrap: 'wrap'},
    avatarViewStyle: {padding: 10}
})