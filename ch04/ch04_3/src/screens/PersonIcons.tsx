import React,{useCallback} from 'react'
import type {FC, Dispatch, SetStateAction} from 'react'
import {View} from 'react-native'
import {Colors} from 'react-native-paper'
import {styles} from './Person.style'
import {IconText} from '../components'
import * as D from '../data'

export type PersonIconProps = {
    person: D.IPerson
    setPerson: Dispatch<SetStateAction<D.IPerson>>
}

const PersonIcons: FC<PersonIconProps> = ({person,setPerson}) => {
    const commentPressed = useCallback(() =>
        setPerson((person) => {
            const {comment} = person.counts
            return {...person, counts: {...person.counts, comment: comment + 1}}
        }), [])
    const retweetPressed = useCallback(() =>
        setPerson((person) => {
            const {retweet} = person.counts
            return {...person, counts: {...person.counts, retweet: retweet + 1}}
        }), [])
    const heartPressed = useCallback(() =>
        setPerson((person) => {
            const {heart} = person.counts
            return {...person, counts: {...person.counts, heart: heart + 1}}
        }), [])
    
    return (
        <View style={[styles.countsView]}>
            <IconText viewStyle={styles.touchableIcon} onPress={commentPressed} name={"comment"} size={24}
                color={Colors.blue500} textStyle={styles.iconText} text={person.counts.comment}></IconText>
            <IconText viewStyle={styles.touchableIcon} onPress={retweetPressed} name={"twitter-retweet"} size={24}
                color={Colors.purple500} textStyle={styles.iconText} text={person.counts.retweet}></IconText>
            <IconText viewStyle={styles.touchableIcon} onPress={heartPressed} name={"heart"} size={24}
                color={Colors.red500} textStyle={styles.iconText} text={person.counts.heart}></IconText>
        </View>
    )
}

export default PersonIcons