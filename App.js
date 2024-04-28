import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity, ScrollView, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#f7ad19', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, elevation: 10, }}>
        <Image style={{ height: 120, width: 120, borderRadius: 100, marginTop: 150, marginHorizontal: 10 }} source={require('./assets/sems2.png')} />
        <View style={{ marginTop: 150, }}>
          <Text style={{ marginHorizontal: 100, color: 'white', fontSize: 30, fontStyle: 'italic', fontWeight: '700' }}>
            Profile info
          </Text>
          <Text style={{ marginHorizontal: 50, color: 'white', fontSize: 20, fontWeight: '400' }}>
            profileinfo@gmail.com
          </Text>
        </View>
      </View>
      <View style={{ flex: 2.5, }}>
        <View style={{ flex: 0.7 }}>
          <Text style={{ fontSize: 20, fontWeight: '600', alignSelf: 'center',  }}>Continue Events!</Text>
          <ScrollView horizontal={true} style={{marginHorizontal:10, }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'skyblue', borderRadius: 20, elevation: 10,margin:5,   }}>
              <Text style={{ flex: 0.2, fontSize: 20, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white', height:100,width:100,  }}>1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'pink', borderRadius: 20, elevation: 10,margin:5  }}>
              <Text style={{ flex: 0.2, fontSize: 20, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white', height:100,width:100,}}>2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'skyblue', borderRadius: 20, elevation: 10,margin:5   }}>
              <Text style={{ flex: 0.2, fontSize: 20, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white', height:100,width:100,  }}>3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'pink', borderRadius: 20, elevation: 10,margin:5  }}>
              <Text style={{ flex: 0.2, fontSize: 20, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white', height:100,width:100,}}>4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'skyblue', borderRadius: 20, elevation: 10,margin:5   }}>
              <Text style={{ flex: 0.2, fontSize: 20, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white', height:100,width:100,  }}>5
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'pink', borderRadius: 20, elevation: 10,margin:5  }}>
              <Text style={{ flex: 0.2, fontSize: 20, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white', height:100,width:100,}}>6
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'skyblue', borderRadius: 20, elevation: 10,margin:5   }}>
              <Text style={{ flex: 0.2, fontSize: 20, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white', height:100,width:100,  }}>7
              </Text>
            </TouchableOpacity>

          </ScrollView>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', marginTop:5}} >
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#f27f0c', borderRadius: 20, elevation: 10, marginBottom: 10,borderWidth:4, borderColor:'#c96706', marginLeft:10}}>
            <Text style={{ flex: 0.2, fontSize: 20, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white',  }}>
              Add New
            </Text>
            <Text style={{ marginBottom: 5, flex: 0.4, fontSize: 30, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white', }}>
              Staff Member
            </Text>
            <Image style={{ flex: 0.4, width: 150, borderRadius: 90, alignSelf: 'center', marginBottom: 10 }} source={require('./assets/add.jpg')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text}>
            <Text style={{ flex: 0.2, fontSize: 20, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white' }}>
              Existing
            </Text>
            <Text style={{ marginBottom: 5, flex: 0.4, fontSize: 30, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white', }}>
              Staff Member
            </Text>
            <Image style={{ flex: 0.4, width: 150, borderRadius: 90, alignSelf: 'center', marginBottom: 10 }} source={require('./assets/exist.png')}></Image>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }} >
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#053f5c', borderRadius: 20, elevation: 10, marginBottom: 10,  marginLeft:10}}>
            <Text style={{ flex: 0.2, fontSize: 20, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white',  }}>
              Add New
            </Text>
            <Text style={{ marginBottom: 5, flex: 0.4, fontSize: 30, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white', }}>
              Event
            </Text>
            <Image style={{ flex: 0.4, width: 150, borderRadius: 90, alignSelf: 'center', marginBottom: 10 }} source={require('./assets/add.jpg')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#f27f0c', borderRadius: 20, elevation: 10, marginBottom: 10,borderWidth:4, borderColor:'#c96706', marginLeft:10}}>
            <Text style={{ flex: 0.2, fontSize: 20, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white' }}>
              Existing
            </Text>
            <Text style={{ marginBottom: 5, flex: 0.4, fontSize: 30, alignSelf: 'center', fontWeight: '700', fontStyle: 'italic', color: 'white', }}>
              Event
            </Text>
            <Image style={{ flex: 0.4, width: 150, borderRadius: 90, alignSelf: 'center', marginBottom: 10 }} source={require('./assets/exist.png')}></Image>
          </TouchableOpacity>

        </View>
      </View>
      <View style={{ flex: 0.1 }}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  text: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#053f5c',
    // height: 215,
    // width:160, 
    marginBottom: 10,
    borderRadius: 20,
    elevation: 10,

  },
  text1: {
    


  }
});