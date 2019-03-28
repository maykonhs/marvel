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
import CharacterItem from '../components/CharacterItem'

const logo = require('../images/marvel-logo.png')

const mock = require('../mocks/characters')
const response = mock.data
const characters = response.results
//const thumb = `${HULK.thumbnail.path}.${HULK.thumbnail.extension}`

export default class Characters extends Component {

  static navigationOptions = {
    title: 'Characters',
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={characters}
          keyExtractor={character => character.name}
          renderItem={({ item }) => <CharacterItem
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
  characterContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hulk: {
    color: '#FFF'
  },
  logo: {
    marginTop: 100
  },
  lista: {
    width: fullwidth
  }
});
