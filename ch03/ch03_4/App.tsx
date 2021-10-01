import React from "react";
import {StyleSheet, SafeAreaView, Platform, View, Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TopBar from "./src/screens/TopBar";
import Content from "./src/screens/Content";
import BottomBar from "./src/screens/BottomBar";

export default function App(){
  const iconPressed = () => Alert.alert('Icon pressed.')

  return (
    <>
      <SafeAreaView style={styles.flex}>
        <TopBar></TopBar>
        <Content></Content>
        <BottomBar></BottomBar>
      </SafeAreaView>
      <View style={[styles.absoluteView]}>
        <Icon name="feather" size={50} color="white" onPress={iconPressed}></Icon>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: Colors.lightBlue100},
  absoluteView: {
    backgroundColor: Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ios: 100, android: 80}),
    padding: 10,
    borderRadius: 35
  }
})