import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
  Switch,
  TouchableHighlight,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import ScreenMovieList from './ScreenMovieList';
import ScreenMovieDetail from './ScreenMovieDetail';

const AppNavigator = createStackNavigator()

function AppNavigatorStackScreen() {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator>
        {/* <AppNavigator.Screen name="MovieList" component={ScreenMovieList}/> */}
        <AppNavigator.Screen name="MovieDetail" component={ScreenMovieDetail}/>
      </AppNavigator.Navigator>



    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default AppNavigatorStackScreen;
