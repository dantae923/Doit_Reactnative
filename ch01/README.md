# Chapter 01 리액트 네이티브 개발 환경 갖추기

ㆍ설치 툴 및 개발환경 : Windows 10 , Scoop, Node.js v14.15.1 ↑, Java8 JDK v1.8.0_265 ↑, VSCode, Android Studio v4.1.1 ↑, Typescript

## 설치 순서 (Windows PowerShell 관리자 모드로 실행하여 아래 명령어 순서대로 입력)
  1. Set-ExecutionPolicy RemoteSigned -scope CurrenUser
  2. $env:SCOOP='C:\Scoop' (혹은 [시스템 환경 변수 편집]에서 환경 변수 "이름: SCOOP, 값: c:\Scoop" 으로 새로 만들기)
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
  - 
