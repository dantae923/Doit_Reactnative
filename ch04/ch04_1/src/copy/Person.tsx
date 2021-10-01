import React from "react";
import type {FC} from 'react'
import {View, Text, Image, Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'
import {styles} from './Person.style'
import moment from "moment-with-locales-es6";
import {Avatar, IconText} from '../components'

moment.locale('ko')

export type PersonProps = {
    person: D.IPerson
}

const avatarPressed = () => Alert.alert('avatar pressed.')
const deletePressed = () => Alert.alert('delete pressed.')
const countIconPressed = (name: string) => () => Alert.alert(`${name} pressed.`)

const Person: FC<PersonProps> = ({person}) => {
    return (
        <View style={[styles.view]}>
            <View style={[styles.leftView]}>
                <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed}></Avatar>
            </View>
            <View style={[styles.rightView]}>
                <Text style={[styles.name]}>{person.name}</Text>
                <Text style={[styles.email]}>{person.email}</Text>
                <View style={[styles.dateView]}>
                    <Text style={[styles.text]}>
                        {moment(person.createdDate).startOf('day').fromNow()}
                    </Text>
                    <Icon name='trash-can-outline' size={26} color={Colors.lightBlue500} onPress={deletePressed}></Icon>
                </View>
                <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{person.comments}</Text>
                <Image style={[styles.image]} source={{uri: person.image}}></Image>
                <View style={[styles.countsView]}>
                    <IconText viewStyle={[styles.touchableIcon]} onPress={countIconPressed('comment')} name="comment" size={24}
                            color={Colors.blue500} textStyle={[styles.iconText]} text={person.counts.comment}></IconText>
                    <IconText viewStyle={[styles.touchableIcon]} onPress={countIconPressed('retweet')} name="twitter-retweet" size={24}
                            color={Colors.purple500} textStyle={[styles.iconText]} text={person.counts.retweet}></IconText>
                    <IconText viewStyle={[styles.touchableIcon]} onPress={countIconPressed('heart')} name="heart" size={24}
                            color={Colors.red500} textStyle={[styles.iconText]} text={person.counts.heart}></IconText>
                </View>
            </View>
        </View>
    )
}

export default Person