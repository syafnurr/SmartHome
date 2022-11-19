import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  onPress,
} from 'react-native';
import React, { useEffect } from 'react';

const SplashScreen = () => {
  return (
    <View>
      <View>
        <Image
          source={require('../assets/Ilustration/SplashScreen.png')}
          style={{marginLeft: -10, marginTop: -30}}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: '#06674B',
            fontWeight: 'bold',
            fontSize: 25,
            marginTop: 60,
          }}>
          Walet.vip
        </Text>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={{color: '#06674B', fontSize: 12}}>
            Atur suhu, kelembapan dan amonia
          </Text>
          <Text style={{color: '#06674B', fontSize: 12}}>
            di rumah wallet kamu secara otomatis dan
          </Text>
          <Text style={{color: '#06674B', fontSize: 12}}>
            monitoring secara realtime
          </Text>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container}>
              <Text style={styles.text}>Daftar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fab500',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginTop: 50,
  },

  text: {color: '#06674B'},
});
