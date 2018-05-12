import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import Header from './src/Header';
import Camera from 'react-native-camera';
import SoundPlayer from 'react-native-sound-player';
 
export default class App extends Component {

    constructor(props) {
       super(props);
        this.state = {
         barcode: '',
         deger: [],
  
        }

    // barkod sesi
    try { 
          SoundPlayer.playSoundFile('barkod', 'mp3');
          Sound.setCategory('Playback', true);
    } catch (e) {
          console.log(`cannot play the sound file`, e);
    }
} 
    // onBarCodeRead = (e) => this.setState({barcode: e.data});
    onBarCodeRead = (e) => this.setState({barcode: e.data, deger: this.state.deger.concat(e.data,"\n")});
  
    
    render () {
        return (

            <View  style={styles.container}>
              <Header />
                <Camera
                    style={styles.preview}
                    onBarCodeRead={this.onBarCodeRead}
                    ref={cam => this.camera = cam}
                    aspect={Camera.constants.Aspect.fill}>
                </Camera>
               
                <ScrollView>
                  <Text 
                    style={styles.textStyle}>
                    {this.state.barcode} 
                  </Text>
                  <Text 
                    style={styles.scrollTextStyle}>
                    {this.state.deger} 
                  </Text>
                </ScrollView>
            </View>              
        )
        Sound.setCategory('Playback', false);
        deger.push(deger);       
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  textStyle:{
    color: 'red',
    fontSize: 25,
    backgroundColor: 'white',
    padding: 10
  },
  scrollTextStyle:{
    color: 'black',
    fontSize: 15,
    backgroundColor: 'white',
    padding: 10
  },
});