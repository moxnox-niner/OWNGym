import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button, Alert} from 'react-native';
import {Scene, Router} from 'react-native-router-flux'
import {Actions} from 'react-native-router-flux'
import Ejercicios from './modules/ejercicios';
import Pectorales from './modules/pectorales';
import Espalda from './modules/espalda';
import Biceps from './modules/biceps';
import Triceps from './modules/triceps';
import Hombros from './modules/hombros';
import Piernas from './modules/piernas';
import Antebrazos from './modules/antebrazos';
import Abdominales from './modules/abdominales';
import Menu from './modules/menu';
import Perfil from './modules/perfil';
import Nutricion from './modules/nutricion';
import alarmas from './modules/alarmas';
import Info from './modules/info';
import Inicio from './modules/inicio';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key="root">
            <Scene key="inicio" component={Inicio}  hideNavBar init/>
            <Scene key="menu" component={Menu}  hideNavBar/>
            <Scene key="perfil" component={Perfil} hideNavBar/>
            <Scene key="home" component={Ejercicios} hideNavBar/>
            <Scene key="nutricion" component={Nutricion}  hideNavBar/>
            <Scene key="alarmas" component={alarmas}  hideNavBar/>
            <Scene key="pectorales" component={Pectorales}  hideNavBar/>
            <Scene key="espalda" component={Espalda}  hideNavBar/>
            <Scene key="biceps" component={Biceps} hideNavBar/>
            <Scene key="triceps" component={Triceps}  hideNavBar/>
            <Scene key="hombros" component={Hombros} hideNavBar/>
            <Scene key="piernas" component={Piernas} hideNavBar/>
            <Scene key="antebrazos" component={Antebrazos} hideNavBar/>
            <Scene key="abdominales" component={Abdominales} hideNavBar/>
            <Scene key="info" component={Info} hideNavBar/>

          </Scene>
       </Router>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
