# Chapter 01 Setting up the development environment of React Native

ㆍTools & Development Environment : Windows 10 , Scoop, Node.js v14.15.1 ↑, Java8 JDK v1.8.0_265 ↑, VSCode, Android Studio v4.1.1 ↑, Typescript

## Install the environment (run the commands below in order on [Windows PowerShell] admin mode)
  1. Set-ExecutionPolicy RemoteSigned -scope CurrenUser
  2. $env:SCOOP='C:\Scoop'
  3. iex (new-object net.webclient).downloadstring('https://get.scoop.sh)'  
  -------------------------- Scoop install complete --------------------------
  4. scoop install nodejs-lts  
  -------------------------- Node.js install complete --------------------------
  5. scoop install git
  6. scoop bucket add java
  7. scoop install adopt8-hotspot  
  -------------------------- Java8 JDK install complete --------------------------
  8. scoop bucket add extras
  9. scoop install vscode
  10. cd c:\scoop\apps\vscode\current
  11. ./vscode-install-context.reg  
  -------------------------- VSCode install complete --------------------------
  12. scoop install android-studio android-sdk  
  -------------------------- Android Studio install complete --------------------------
  13. npm i -g typescript ts-node  
  -------------------------- Typescript install complete --------------------------


## Setting Android Emulator
  - Hardware : Category = 'Phone', Name = 'Pixel 3a'
  - Image : API Level = '29', ABI = 'x86_64', Target = 'Android 10.0(Google APIs)'
  - Graphics : 'Software'
  - unlock 'Enabled Device Frame'
