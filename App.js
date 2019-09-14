/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Login from './src/pages/Login'

type Props = {};
export default class App extends Component<Props> {
  render() {
    //const screenHeight = Dimensions.get('window').width
    return (
        <Login/>
    );
  }
}
