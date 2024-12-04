import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-web';
import tw from 'twrnc';


export function PlacesScreen() {
  return (
    <View style={styles.backGround}>
        <Text style={styles.bannerText}>
            Places Screen
        </Text>
        <Banner />  
        <Button />
   </View>
    );
}


const styles = StyleSheet.create({
banner: tw`bg-purple-700 p-5`,
bannerText : tw`text-white text-lg font-bold text-center`,
backGround: tw`bg-blue-200`
});
