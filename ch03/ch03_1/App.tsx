/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import {Colors} from 'react-native-paper'
 import Color from 'color'

 import {
   //Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

console.log(Colors.blue500)
console.log(Color(Colors.blue500).alpha(0.5).lighten(0.5).string())

export default function App(){
  return(
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style ={[styles.text]}>Hello world!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: Colors.blue500},
  text: {fontSize: 20, color: Color(Colors.blue500).alpha(0.7).lighten(0.9).string()}
})