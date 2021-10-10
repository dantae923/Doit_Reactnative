import React, {useCallback, useState, useEffect, useMemo} from "react";
import type {FC} from 'react'
import {Platform, View, Text, Image, Animated} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome'
import * as D from '../data'
import {useToggle, useAnimatedValues, useLayout} from '../hooks'
import {styles} from './Person.style'
import moment from "moment-with-locales-es6";
import {Avatar} from '../components'
import { interpolate } from "../utils";

const AnimatedIcon = Animated.createAnimatedComponent(FontawesomeIcon)
const iconSize = 30
const delay = 1000

export type PersonProps = {
    person: D.IPerson
    deletePressed: () => void
}

const PersonStagger: FC<PersonProps> = ({person, deletePressed}) => {
    const [started, toggleStarted] = useToggle()
    const [layout, setLayout] = useLayout()

    const balls = useMemo(() => [Colors.pink500, Colors.lime500, Colors.lightBlue500], [])
    const animValues = useAnimatedValues(balls.length)

    const startAnimations = useMemo(() => balls.map((notUsed, index) => Animated.spring(animValues[index], {
        useNativeDriver: true,
        toValue: 1
    })).reverse(), [])

    const endAnimations = useMemo(() => balls.map((notUsed, index) => Animated.spring(animValues[index], {
        useNativeDriver: true,
        toValue: 0
    })), [])

    const avatarPressed = useCallback(() => {
        if (Platform.OS == 'ios')
            Animated.stagger(delay, [...startAnimations, ...endAnimations]).start(toggleStarted)
        else
            Animated.sequence([...startAnimations, ...endAnimations]).start(toggleStarted)
    }, [started])

    const icons = useMemo(() => balls.map((color, index) => {
        const numberOfIcons = balls.length
        const animValue = animValues[index]
        const animStyle = {
            transform: [{
                translateX: interpolate(animValue, [0, layout.width - numberOfIcons * iconSize])
            }, {
                rotate: interpolate(animValue, ['0deg', '720deg'])
            }]
        }

        return (
            <AnimatedIcon key={color} style={animStyle} name="soccer-ball-o" size={iconSize} color={color}></AnimatedIcon>
        )
    }), [layout.width])

    return (
        <View style={[styles.view]}>
            <View style={[styles.leftView]}>
                <Avatar uri={person.avatar} size={50} onPress={avatarPressed}></Avatar>
                <Text>Press Me</Text>
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
                <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.comments]}>{person.comments}</Text>
                <Image style={[styles.image]} source={{uri: person.image}}></Image>
                <View onLayout={setLayout} style={[styles.countsView, {justifyContent: 'flex-start'}]}>
                    {icons}
                </View>
            </View>
        </View>
    )
}

export default PersonStagger