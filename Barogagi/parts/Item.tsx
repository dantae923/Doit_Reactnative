import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { priceFormatter } from '../tools/Format'

const Item = () => {
    return (
        <View style={styles.singleItem}>
            <View style={styles.firstLine}>
                <Text style={{fontSize: 20}}>ITEM_NM</Text>
                <TouchableOpacity style={styles.cancel} onPress={() => Alert.alert('cancel')}><Icon name="close" size={20}></Icon></TouchableOpacity>
            </View>
            <View style={styles.secondLine}>
                <Text style={styles.info}>PLU_CD</Text>
                <Text style={styles.info}>OP_CD</Text>
            </View>
            <View style={styles.thirdLine}>
                <Text style={styles.price}>{priceFormatter(5000)} 원</Text>
                <View style={styles.controller}>
                    <Icon name="minus" size={20} color='#bbb' onPress={() => Alert.alert('minus')}></Icon>
                    <Text style={styles.quantity}>ITEM_QTY</Text>
                    <Icon name="plus" size={20} color='#bbb' onPress={() => Alert.alert('plus')}></Icon>
                </View>
            </View>
        </View>
    )
}

export default Item;

const styles = StyleSheet.create({
    singleItem: {
        padding: 15,
        marginHorizontal: 10,
        borderColor: '#bbb',
        borderBottomWidth: 1,
        backgroundColor: 'white'
    },
    firstLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    secondLine: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    thirdLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    controller: {
        flexDirection: 'row',
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 100,
        padding: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    quantity:{
        fontSize: 15,
        marginHorizontal: 5
    },
    cancel: {
        alignItems:'flex-end'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    info: {
        color: '#bbb',
        marginRight: 10
    }
})