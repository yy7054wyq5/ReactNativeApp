/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { txt: '' };
  }

  valueChange = m => {
    this.setState({ txt: m });
  };

  render() {
    return (
      <View style={styles.democontainer}>
        <Text style={styles.demo}>name: {this.props.name}</Text>
        <Text>text: {this.state.txt}</Text>
        <TextInput style={{height: 40}} placeholder="dadad!" onChangeText={(text)=>{this.valueChange(text)}} />
      </View>
    );
  }
}

export default class ReactNativeApp extends Component {
  render() {
    let txt = 'my fisrt app';
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{txt}</Text>
        <Demo name="aaaaa" />
        <Text style={styles.instructions}>To get started, edit index.ios.js</Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,
          {'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  democontainer: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  demo: {
    fontSize: 24
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);
