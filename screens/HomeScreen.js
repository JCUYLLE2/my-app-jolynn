import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';



function Banner(){
    return (
        <View style={styles.banner}>
        <Text style={styles.bannerText}>
            My favourite food is pizza!
        </Text>
        </View>
    );
}

export function HomeScreen() {
  return (
   <Banner />   
    );
}


const styles = StyleSheet.create({
    banner: {
    backgroundColor: 'purple',
    padding: 25,
  },
  bannerText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
});
