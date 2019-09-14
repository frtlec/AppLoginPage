/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import LoginForm from "./LoginForm";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class Login extends Component<Props> {
  render() {
    //const screenHeight = Dimensions.get('window').width
    return (
      <View style={styles.container}>
        <View style={styles.headBackground} />

        <KeyboardAvoidingView behavior={"position"}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>TRAKUS</Text>
            <Text style={styles.logoDes}>Gözlem Uygulaması</Text>
          </View>
          <ScrollView
            contentContainerStyle={styles.ScrollView}
            scrollEnabled={true}
          >
            <View style={styles.loginArea}>
              <Text style={styles.loginAreaTitle}>TRGozlem Kullanıcı Girişi</Text>
              <LoginForm />
            </View>
          </ScrollView>
          <View style={styles.signUpArea}>
              <Text style={styles.signUpDes}></Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 80
  },
  headBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 250,
    backgroundColor: "#1572de"
  },
  logo: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#f2f2f2"
  },
  logoDes: {
    textAlign: "center",
    color: "#f2f2f2"
  },
  loginArea: {
    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,

    shadowOffset: { width: 4, height: 2 },
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5
  },
  loginAreaTitle: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 25
  }
});
