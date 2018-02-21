import React from 'react';
import {StyleSheet, View,Alert, Image,Text, AppRegistry,TextInput, TouchableOpacity, Button } from 'react-native';
import {Actions} from 'react-native-router-flux'

const remote = 'http://www.bluspok.com/wp-content/uploads/bfi_thumb/ThinkstockPhotos-479009182-n088ucgl2lgl9t7yvxs81zd2i9cw0qfrxhckb881gw.jpg';


export default class App extends React.Component {

          onPress() {
              Alert.alert(
  'Datos Guardados',
)
          }

 render() {
    const resizeMode = 'cover';
    const image = 'https://scontent-lga3-1.xx.fbcdn.net/v/t34.0-12/27848192_1587826291303347_1870495_n.png?oh=ace1a659e157545f5c7bb9b7969e80f5&oe=5A84671F';
    return (
      <View
        style={{
          flex: 1,
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
    alignItems: 'center',
    justifyContent: 'center',
        marginTop: -20,

          }}
        >
        <Text style={styles.texto}>    Perfil</Text>
                           <Image
         style={{ width: 190, height: 190, }}
            source={{ uri: image }}
          />

        </View>
                <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -120,
            marginLeft: -100,
          }}
        >
       <TextInput
                        placeholder="Nombre"
                        placeholderTextColor="black"
                        style={styles.input} >
                         </TextInput>

                         <TextInput
                            placeholder="Peso KG"
                        placeholderTextColor="black"
                        keyboardType={'numeric'}
                        style={styles.input} >
                         </TextInput>

                    <TextInput
                       placeholder="Estatura CM"
                        placeholderTextColor="black"
                        keyboardType={'numeric'}

                        style={styles.input}>
                         </TextInput>

                   <TextInput
                       placeholder="Edad"
                        placeholderTextColor="black"
                        keyboardType={'numeric'}
                        style={styles.input}>
                         </TextInput>


                                   <View style={styles.añadir}  >
                <Button
                onPress ={this.onPress}
        title="Guardar"
        color="#0097e6"
        juatifyContent='center'
        accesibilityLabel="Learn more about"></Button>
        </View>



        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
    input: {
        width: 300,
        backgroundColor: 'white',
        color: 'red' ,
        marginBottom: 20,
        left: 50,
        borderRadius: 10,
    },
   texto: {
    color:'#0097e6',//'#0000ff', #990000
    fontSize:40,
    marginLeft: -50,
    textAlign:'center',
    marginBottom:10,

  },

    añadir: {
      flexDirection: 'row',
        paddingVertical: 10,
        width: 100,
        marginBottom: 10,
        borderRadius: 10,
        marginLeft: 120,

    },

          buttonText: {
        textAlign: 'center',
        color: '#FFF',

    }

});


AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
