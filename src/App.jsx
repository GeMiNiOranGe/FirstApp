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

function Course({ name, summary, imageUri }) {
  return (
    <View style={styles.course}>
      <Image
        style={styles.courseImage}
        source={{
          uri: imageUri
        }} />
      <View style={styles.courseInformation}>
        <Text style={styles.courseName}>{name}</Text>
        <Text
          style={styles.courseSummary}
          numberOfLines={2}>
          {summary}
        </Text>
      </View>
    </View>
  )
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Course
        name={'React Course'}
        summary={'Course about how to write the React Web'}
        imageUri={'https://avatars.githubusercontent.com/u/11689122?v=4'}
      />
      <Course
        name={'React Native Course'}
        summary={'Course about how to write the Mobile App Android by using React-Native'}
        imageUri={'https://avatars.githubusercontent.com/u/11689122?v=4'}
      />
      <Course
        name={'Redux Course'}
        summary={'Course about predictable state container JavaScript apps (aka Redux) with is help application'}
        imageUri={'https://avatars.githubusercontent.com/u/11689122?v=4'}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  course: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  courseImage: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  courseInformation: {
    marginLeft: 10,
    // make the text don't out of the screen
    flexShrink: 1,
  },
  courseName: {
    fontSize: 22,
    color: 'white',
    marginBottom: 4,
  },
  courseSummary: {
    color: 'darkgray',
  },
});

export default App;
