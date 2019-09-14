/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,View,Text,TextInput} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Login extends Component<Props> {

    state={
        text:''
    };


  render() {
    //const screenHeight = Dimensions.get('window').width
    return (
      <View>
          <TextInput 

            {...this.props}
            value={this.state.input}
            ref={this.props.inputRef}
            onChangeText={text=>this.setState({text})}
          ></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    
});
