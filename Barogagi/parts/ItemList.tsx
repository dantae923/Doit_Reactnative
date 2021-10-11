import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Item from './Item'
import { priceFormatter } from '../tools/Format'

const Width = Dimensions.get('screen').width
const Height = Dimensions.get('screen').height

const ItemList = () => {
    return (
        <View style={styles.container}>

        </View>
    )    
}

export default ItemList;

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      width: Width,
      height: Height,
    },
    placeHolder: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    totalAmount: {
      paddingVertical:20,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 5,
    },
    totalPrice: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#48665a',
    },
    totalQty: {
      fontSize: 20,
      textAlign: 'center',
    },
    itemList: {
      width: '100%',
      height: '60%',
    }
})