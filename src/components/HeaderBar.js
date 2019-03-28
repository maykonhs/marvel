import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

const md5 = require('js-md5')

export default class HeaderBar extends Component {

  state = {
    searchWord: '',
  }

  handleInputChange = (word) => {
    this.setState({
      searchWord: word
    })
  }

  handleSearch = async () => {
    const { searchWord } = this.state

    if (!searchWord) return

    /* let hash = md5.create()
    hash.update('1' + '1234' + 'abcd') */    
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Pesquisar'
          placeholderTextColor='#FFF'
          returnKeyType='search'
          value={this.state.searchWord}
          onChangeText={this.handleInputChange}
          onSubmitEditing={this.handleSearch}>
        </TextInput>
        <TouchableOpacity
          onPress={this.handleSearch}>
          <Icon
            style={styles.searchButton}
            name='search'
            size={30}
            color='#FFF' />
        </TouchableOpacity>
      </View>
    )
  }
}

const fullwidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    width: fullwidth,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    marginRight: 20,
    alignSelf: "stretch",
    color: '#FFF'
  },
  searchButton: {
    marginRight: 20
  }
});
