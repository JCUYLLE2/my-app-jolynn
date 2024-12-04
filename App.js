import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { SafeAreaView,  } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PlacesScreen } from './screens/PlacesScreen';

const Stack = createNativeStackNavigator();



function ProvidedApp() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name={NAV_HOME} component={HomeScreen} />
        <Stack.Screen name={NAV_PLACES} component={PlacesScreen} />
      </Stack.Navigator>
    </>
  );
}


export default function App() {
  return (
    Platform.select(
      {
        web: (
          <NavigationContainer>
            <ProvidedApp />
          </NavigationContainer>
        ),
        default: (
          <NavigationContainer>
            <StatusBar />
            <ProvidedApp />
          </NavigationContainer>

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
