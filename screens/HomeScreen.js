import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export function HomeScreen() {
  return (
    <View >
      <Text>
        My favourite food is pizza!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}