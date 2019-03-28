import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';

import HeaderBar from '../components/HeaderBar'
import SerieItem from '../components/SerieItem'

const mock = require('../mocks/series')
const response = mock.data
const series = response.results

export default class Series extends Component {

  static navigationOptions = {
    title: 'Series',
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={series}
          keyExtractor={serie => serie.title}
          renderItem={({ item }) => <SerieItem
          data={item}
        />} />
      </View>
    )
  }
}

const fullwidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
