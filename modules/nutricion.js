import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class nutricion extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.caja}>
          <Text style={styles.titulos}>CALORIAS</Text>
        </View>
        <ScrollView>

        <TouchableOpacity
          onPress={ () =>Actions.info() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../imagenes/fondo.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>1800 Calorias</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () =>Actions.info() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../imagenes/fondo.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>2400 Calorias</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () =>Actions.info() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../imagenes/fondo.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>2000 Calorias</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () =>Actions.info() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../imagenes/fondo.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>2400 Calorias</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () =>Actions.info() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../imagenes/fondo.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>2800 Calorias</Text>
          </View>
        </View>
      </TouchableOpacity>

        <TouchableOpacity
          onPress={ () =>Actions.info() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../imagenes/fondo.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>3000 Calorias</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () =>Actions.info() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../imagenes/fondo.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>3200 Calorias</Text>
          </View>
        </View>
      </TouchableOpacity>

        <TouchableOpacity
          onPress={ () =>Actions.info() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../imagenes/fondo.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>3400 Calorias</Text>
          </View>
        </View>
      </TouchableOpacity>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 22.5,
  },
  caja: {
    backgroundColor: '#0097e6',
    flexDirection: 'row',
    height: 40,
    marginTop: 1,
    justifyContent: 'center',
    //flexDirection: 'column',
  },
  titulos: {
    color: '#FDFEFE',
    marginTop: 4,
    fontSize: 25,
  },
  menu: {
    backgroundColor: '#D0D3D4',
    height: 100,
    flexDirection: 'row',
    marginTop:2,
    justifyContent: 'center',
  },
  imagenes: {
    //marginTop: 5,
    //marginBottom: 1,
    flexDirection: 'row',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  subtitulos: {
    fontSize: 18,
  },
  cajitas: {
    backgroundColor: '#D0D3D4',
    width: 170,
    height: 30,
    flex: .80,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 35,
  },
});
