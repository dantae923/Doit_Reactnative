import React, { useState, useCallback } from "react";
import { SafeAreaView, StyleSheet } from 'react-native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { DarkTheme, DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import Main from './src/screens/MainNavigator'
import { ToggleThemeProvider } from './src/contexts'

export default function App() {
  const scheme = useColorScheme()
  const [theme, setTheme] = useState(scheme == 'dark' ? DarkTheme : DefaultTheme)
  const toggleTheme = useCallback(() => setTheme((theme) => (theme.dark ? DefaultTheme : DarkTheme)), [])

  return (
    <AppearanceProvider>
      <PaperProvider theme={theme}>
        <ToggleThemeProvider toggleTheme={toggleTheme}>
          <SafeAreaView style={styles.safeAreaView}>
            <Main></Main>
          </SafeAreaView>
        </ToggleThemeProvider>
      </PaperProvider>
    </AppearanceProvider>
  )
}

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 }
})