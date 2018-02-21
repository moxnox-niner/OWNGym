import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
export default class pectorales extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.caja}>
          <Text style={styles.titulos}>ABDOMINALES</Text>
        </View>
        <ScrollView>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/pectorales.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Pectorales</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/espalda.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Espalda</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/biceps.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Biceps</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/triceps.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Triceps</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/hombros.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Hombros y Trapecio</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/piernas.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Piernas y Gluteos</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/antebrazos.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Antebrazos</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Image style={styles.imagenes} source = {require('../pictures/ejercicios/abdomen.jpg')}></Image>
          <View style={styles.cajitas}>
            <Text style={styles.subtitulos}>Abdomen</Text>
          </View>
        </View>
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
