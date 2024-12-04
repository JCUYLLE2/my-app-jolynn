import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-web';
import tw from 'twrnc';



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
    <View>
        <Banner />  
        <Button />
   </View>
    );
}


const styles = StyleSheet.create({
banner: tw`bg-purple-700 p-5`,
bannerText : tw`text-white text-lg font-bold text-center`
});
