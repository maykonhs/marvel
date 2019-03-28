import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default class CharacterItem extends Component {
  render() {
    const { data } = this.props
    return (
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.characterImage}
          source={{ uri: `${data.thumbnail.path}.${data.thumbnail.extension}` }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{data.name}</Text>
          <Text style={styles.descriptionText}>{(data.description.length > 40) ?
            data.description.substring(0, 40 - 3) + '...' :
            data.description}
          </Text>
        </View>
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
    padding: 2,
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    padding: 20
  },
  characterImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    justifyContent: 'center'
  },
  titleText: {
    fontFamily: 'Comic Book Bold',
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 20,
  },
  descriptionText: {
    fontFamily: 'Comic Book',
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 15,
  },
});
