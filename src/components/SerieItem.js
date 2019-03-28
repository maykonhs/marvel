import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default class SerieItem extends Component {
  render() {
    const { data } = this.props
    return (
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.serieImage}
          source={{ uri: `${data.thumbnail.path}.${data.thumbnail.extension}` }}
        />
      </TouchableOpacity>
    )
  }
}

const fullwidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  serieImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  titleText: {
    fontFamily: 'Comic Book',
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 10,
    padding: 20
  },
});
