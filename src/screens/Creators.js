import React, { Component } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

import HeaderBar from '../components/HeaderBar'

const logo = require('../images/marvel-logo.png')

export default class Creators extends Component {

  static navigationOptions = {
    title: 'Creators',
    header: null
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'>
        <View>
          <HeaderBar />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    marginTop: 100
  }
});
