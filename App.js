import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import data from './assets/data.json'

export default function App() {
  return (
    <View style={styles.container}>
      {data.map((program, index) => {
        return (
          <View key={index} style={styles.bloc}>
            <Text style={[styles.bold, styles.head]}>{program.time}</Text>
            <Image
              source={{
                uri: program.image
              }}
              style={styles.logo}
              resizeMode="contain"
              />
            <View>
              <Text style={[styles.bold]}>{program.title}</Text>
              <Text>{program.type}</Text>
              <View style={styles.finalInfo}>
                <Text style={styles.bold}>{program.duration}</Text>
                {program.direct === true ? <Text style={[styles.bold, styles.red]}>En direct</Text> : null}
                {program.isUnseen === true ? <Text style={[styles.bold, styles.red]}>Inédit</Text> : null}
              </View>
            </View>
          </View>
        )
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  finalInfo: {
    flexDirection: 'row',
    gap: 15
  },
  bloc: { 
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'grey',
    margin: 10
  },
  head : {
    justifyContent: 'center'
  },
  cover: { height: 300, width: 200, marginTop: 100 },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logo: {
    height: 80,
    width: 80,
  },
  bold: {
    fontWeight: 'bold'
  },
  red: {
    color: 'red'
  }
});
