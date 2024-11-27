import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { SafeAreaView,  } from 'react-native-safe-area-context';

export function ProvidedApp() {
  return (
    <>
      <HomeScreen />
    </>
  );
}


export default function App() {
  return (
    Platform.select(
      {
        web: (
          <View>
            <ProvidedApp />
          </View>
        ),
        default: (
          <View>
            <StatusBar />
            <SafeAreaView>
              <ProvidedApp />
            </SafeAreaView>
          </View>

        )
      }
    )    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
