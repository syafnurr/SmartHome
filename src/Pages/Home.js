import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  onPress,
} from 'react-native';
import React from 'react';
import SelectList from 'react-native-dropdown-select-list';

const Home = () => {
  // const [selected, setSelected] = React.useState("");

  // const data = [
  //   {key:'1',value:'Jammu & Kashmir'},
  //   {key:'2',value:'Gujrat'},
  //   {key:'3',value:'Maharashtra'},
  //   {key:'4',value:'Goa'},
  // ];

  const [selected, setSelected] = React.useState('');

  const data = [{key: '1', value: 'Jammu & Kashmir'}];

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#06674B',
          paddingHorizontal: 20,
          paddingBottom: 90,
        }}>
        <View style={{flexDirection: 'column', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../assets/Ilustration/phone.png')} />
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'white', fontWeight: '200', marginLeft: 15}}>
                Rumah Walet 1
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: '#BCD1C9',
              fontWeight: '200',
              fontSize: 24,
              marginTop: 30,
            }}>
            Populasi Walet
          </Text>
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <Text style={{color: '#f2f2f2', fontWeight: 'bold', fontSize: 36}}>
              100.000
            </Text>
            <Image
              source={require('../assets/Icon/arrow.png')}
              style={{width: 20, height: 20, marginLeft: 30, marginTop: 15}}
            />
            <Text
              style={{
                color: '#BCD1C9',
                fontWeight: '200',
                fontSize: 12,
                marginLeft: 10,
                marginTop: 17,
              }}>
              +20
            </Text>
          </View>
          <Text
            style={{
              color: '#BCD1C9',
              fontWeight: '200',
              fontSize: 12,
              marginLeft: 10,
              marginTop: 17,
            }}>
            Populasi walet sebelumnya 100.100 walet
          </Text>
        </View>
        <View
          style={{
            // justifyContent: 'flex-end',
            // alignItems: 'flex-end',
            marginLeft: 60,
          }}>
          <Image
            source={require('../assets/Ilustration/icon.png')}
            style={{width: 100, height: 170}}
          />
        </View>
      </View>
      <View style={{marginTop: -45}}>
        <View
          style={{
            backgroundColor: 'white',
            paddingTop: 20,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}>
          <View style={{alignItems: 'center', marginTop: -15}}>
            <Image
              source={require('../assets/Icon/line.png')}
              style={{marginTop: 10, paddingTop: 5}}
            />
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingTop: 20,
            }}>
            <Text style={{fontSize: 16, color: '#044331', fontWeight: 'bold'}}>
              Kondisi RBW
            </Text>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#06674B'}}>Grafik Kondisi RBW</Text>
                <View style={{justifyContent: 'center'}}>
                  <Image
                    source={require('../assets/Icon/arrow2.png')}
                    style={{marginLeft: 10}}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 20,
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#EEF3EC',
                height: 40,
                width: 120,
                justifyContent: 'center',
                borderRadius: 8,
                alignItems: 'center',
              }}>
              <Text style={{color: 'black'}}>Lantai 4</Text>
            </View>
            <View
              style={{
                backgroundColor: '#EEF3EC',
                height: 40,
                width: 120,
                marginLeft: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{color: 'black'}}>Ruangan 2</Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 20, marginTop: 20}}>
            <View
              style={{backgroundColor: '#EEF3EC', height: 3, borderRadius: 2}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.suhu}>
                <Text style={{fontSize: 16, color: 'black'}}>Suhu</Text>
                <Text
                  style={{fontSize: 22, fontWeight: 'bold', color: '#36A84C'}}>
                  26°C
                </Text>
              </View>
              <View style={styles.suhu}>
                <Text style={{fontSize: 16, color: 'black'}}>Kelembapan</Text>
                <Text
                  style={{fontSize: 22, fontWeight: 'bold', color: '#36A84C'}}>
                  80%
                </Text>
              </View>
              <View style={styles.suhu}>
                <Text style={{fontSize: 16, color: 'black'}}>Amonia</Text>
                <Text
                  style={{fontSize: 22, fontWeight: 'bold', color: '#36A84C'}}>
                  10 PPM
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.mesinKabut}>
                <Text>Mesin Kabut</Text>
                <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                  <View style={styles.button}>
                    <View style={{alignItems: 'center', paddingVertical: 3}}>
                      <Text style={{fontSize: 20, color: 'white'}}>ON</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <Image source={require('../assets/Ilustration/kipas.jpg')} />
                <View
                  style={{
                    backgroundColor: '#DFEBE2',
                    borderRadius: 15,
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      paddingVertical: 7,
                      fontWeight: '500',
                      alignItems: 'center',
                      fontSize: 12
                    }}>
                    Mode Otomatis
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 15,
                    }}>
                    <Text
                      style={{
                        color: '#06674B',
                        fontSize: 12,
                        fontWeight: '400',
                      }}>
                      Ganti Mode
                    </Text>
                    <View style={{justifyContent: 'center'}}>
                      <Image
                        source={require('../assets/Icon/arrow2.png')}
                        style={{marginLeft: 10}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  suhu: {
    backgroundColor: '#EEF3EC',
    height: 103,
    width: 170,
    marginRight: 30,
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: 'center',
  },
  mesinKabut: {
    backgroundColor: '#EEF3EC',
    paddingVertical: 20,
    width: 170,
    height: 350,
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#94C4B2',
    width: 70,
    borderRadius: 15,
    marginTop: 10,
    zIndex: 30,
  },
});
