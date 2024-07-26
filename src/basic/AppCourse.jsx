import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import CourseItem from '../component/CourseItem';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CourseItem
        name='React Course'
        summary='Course about how to write the React Web'
        imageUri='https://avatars.githubusercontent.com/u/11689122?v=4'
      />
      <CourseItem
        name='React Native Course'
        summary='Course about how to write the Mobile App Android by using React-Native'
        imageUri='https://avatars.githubusercontent.com/u/11689122?v=4'
      />
      <CourseItem
        name='Redux Course'
        summary='Course about predictable state container JavaScript apps (aka Redux) with is help application'
        imageUri='https://avatars.githubusercontent.com/u/11689122?v=4'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default App;
