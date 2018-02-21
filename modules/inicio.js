import React from 'react';
import {StyleSheet, View, Image,Text, AppRegistry,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'

const remote = 'http://www.bluspok.com/wp-content/uploads/bfi_thumb/ThinkstockPhotos-479009182-n088ucgl2lgl9t7yvxs81zd2i9cw0qfrxhckb881gw.jpg';

export default class App extends React.Component {
 render() {
    const resizeMode = 'cover';
    const image = 'https://scontent-lga3-1.xx.fbcdn.net/v/t34.0-12/27848192_1587826291303347_1870495_n.png?oh=ace1a659e157545f5c7bb9b7969e80f5&oe=5A84671F';

    return (
      <View
        style={{
           flex: 1,
          backgroundColor: '#eee',
        }}
      >


        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >


          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={{ uri: remote }}
          />


        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
              <TouchableOpacity
              onPress={ () =>Actions.menu() }>
            <Image style={{ width: 300, height: 300, marginLeft: 50,}}
            source={{ uri: image }}
          />
              </TouchableOpacity>
        </View>

      </View>
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
