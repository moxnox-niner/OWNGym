import React from 'react';
import {StyleSheet, View, Image,Text, AppRegistry,TextInput, TouchableOpacity, Button } from 'react-native';
import {Scene, Router} from 'react-native-router-flux'
import {Actions} from 'react-native-router-flux'

const remote = 'https://media.licdn.com/mpr/mpr/AAIA_wDGAAAAAQAAAAAAAAq_AAAAJGFlYjc2ZDhkLTU5MjUtNDMyYy1iMjI1LTM3YmUyNzFjZjc5OQ.jpg';


export default class App extends React.Component {
 render() {
    const resizeMode = 'cover';
    return (
            <View
              style={{
           marginTop: 24,
          }}>
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

<View style={styles.titulo}>
          <Text style={styles.texto} >                  Alarmas                  </Text>
          <Image
          style={{marginLeft: -100, width: 50, height: 50, }}
          source={{uri: 'https://scontent.fpbc1-2.fna.fbcdn.net/v/t34.0-12/27935500_1587826287970014_1253909908_n.png?oh=2a6d8062ba3870c8913ddf932352f6ad&oe=5A81357D'}}
        />
       </View>

         <View style={styles.button}  >
                                             <TouchableOpacity style={styles.buttonDias}>

                        <Text style={styles.buttonText}>Lunes</Text>
                    </TouchableOpacity>
                </View>

           <View style={styles.button}  >
                                                             <TouchableOpacity style={styles.buttonDias}>
                        <Text style={styles.buttonText}>Martes</Text>
                    </TouchableOpacity>
        </View>

         <View style={styles.button}  >
                                                             <TouchableOpacity style={styles.buttonDias}>
                        <Text style={styles.buttonText}>Miercoles</Text>
                    </TouchableOpacity>
        </View>

         <View style={styles.button}  >
                                                            <TouchableOpacity style={styles.buttonDias}>
                        <Text style={styles.buttonText}>Jueves</Text>
                    </TouchableOpacity>
        </View>

         <View style={styles.button}  >
                                                          <TouchableOpacity style={styles.buttonDias}>
                        <Text style={styles.buttonText}>Viernes</Text>
                    </TouchableOpacity>
        </View>

         <View style={styles.button}  >
                                                             <TouchableOpacity style={styles.buttonDias}>
                        <Text style={styles.buttonText}>Sabado</Text>
                    </TouchableOpacity>
        </View>

         <View style={styles.button}  >
                                                             <TouchableOpacity style={styles.buttonDias}>
                        <Text style={styles.buttonText}>Domingo</Text>
                    </TouchableOpacity>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
    titulo: {
      backgroundColor: '#0097e6',
      flexDirection: 'row',
      marginBottom: 40,

  },

    button: {
      flexDirection: 'row',
      marginBottom: 50,

  },
  texto: {
    color:'#ffffff',
    fontSize:30,
    justifyContent: 'space-between',

  },
        buttonDias: {
        backgroundColor: '#0097e6',
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
