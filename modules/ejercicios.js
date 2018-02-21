import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux'
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.caja}>
          <Text style={styles.titulos}>EJERCICIOS</Text>
        </View>
        <ScrollView>
        <TouchableOpacity
          onPress={ () =>Actions.pectorales() }>
          <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/pectorales.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Pectorales</Text>
          </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () =>Actions.espalda() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/espalda.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Espalda</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () =>Actions.biceps() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/biceps.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Biceps</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () =>Actions.triceps() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/triceps.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Triceps</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () =>Actions.hombros() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/hombros.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Hombros y Trapecio</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () =>Actions.piernas() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/piernas.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Piernas y Gluteos</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () =>Actions.antebrazos() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/antebrazos.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Antebrazos</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () =>Actions.abdominales() }>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/abdomen.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Abdomen</Text>
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
    backgroundColor: '#17202A',
    marginTop: 22.5,
  },
  caja: {
    backgroundColor: '#0097e6',
    flexDirection: 'row',
    height: 40,
    marginTop: 1,
    justifyContent: 'center',
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
