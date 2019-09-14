/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,View,Text} from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Login extends Component<Props> {
  render() {
    //const screenHeight = Dimensions.get('window').width
    return (
      <View>
          <Input placeholder="Kullanıcı Adı" placeholderTextColor="#ddd"
           style={styles.input}
           autocapitalize='none'
           returnKeyType= {"next"}
           onSubmitEditing={()=>this.passwordInput.focus()}
           />
            <Input 
            returnKeyType={"go"}
            secureTextEntry={true}
            placeholder="Password" 
            placeholderTextColor="#ddd"
           style={styles.input}
           autocapitalize='none'
           inputRef={input=>this.passwordInput=input}
           />
           <MyButton
           color={"#f1f1f1"}
           backgroundColor={"#0065e0"}
            text={"Giriş Yap"}
           />
  </View>
    );
  }
}

const styles = StyleSheet.create({

    signInText:{
        marginVertical:4,
        fontSize:14,
        color:'#333'
    },
    input:{
        height:40,
        paddingHorizontal:5,
        borderWidth:2,
        borderRadius:4,
        borderColor:'#f1f1f1',
        color:'#999',
        marginBottom:8,
        fontSize:14,
        fontWeight:'600',
    }
    
});
