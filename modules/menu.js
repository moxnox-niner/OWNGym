import React from 'react';
import { StyleSheet, Text, View, Button, Alert,Image,TouchableOpacity, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux'
export default class App extends React.Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>

       <View>
                  <TouchableOpacity style={styles.menu}
                  onPress={ () =>Actions.perfil() }>
                    <Image style={styles.img} source={require('../imagenes/PERFIL.png')} />
                    </TouchableOpacity>
       </View>

        <View>
              <TouchableOpacity style={styles.menu}
              onPress={ () =>Actions.home() }>
                  <Image style={styles.img} source={require('../imagenes/ejercicios.png')} />

              </TouchableOpacity>
       </View>

                                         <View>
<TouchableOpacity style={styles.menu}
onPress={ () =>Actions.nutricion() }>
<Image style={styles.img} source={require('../imagenes/nutricion.png')} />

                    </TouchableOpacity>
       </View>

                        <View>
<TouchableOpacity style={styles.menu}
onPress={ () =>Actions.alarmas() }>
<Image style={styles.img} source={require('../imagenes/alarmas.png')} />

                    </TouchableOpacity>
       </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop:25,
        backgroundColor: '#0097e6',

    },


    img: {
        height: '100%',
        width: '100%',
        borderRadius: 10,

    },
  texto: {
    color:'#ffffff',
    fontSize:35,
    textAlign: 'center',
  },
        menu: {
        backgroundColor: 'black',
        paddingVertical: 10,
        width: '100%',
        height: 190,
        marginBottom: 5,


    },
              buttonText: {
        textAlign: 'center',
        color: '#FFF',

    }
});
