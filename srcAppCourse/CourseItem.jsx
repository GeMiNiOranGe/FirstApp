// Import liraries
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native'

// Create a component
class CourseItem extends React.Component {
  render() {
    return (
      <View style={styles.course}>
        <Image
          style={styles.courseImage}
          source={{
            uri: this.props.imageUri
          }}
        />

        <View style={styles.courseInformation}>
          <Text style={styles.courseName}>{this.props.name}</Text>
          <Text
            style={styles.courseSummary}
            numberOfLines={2}
          >
            {this.props.summary}
          </Text>
        </View>
      </View>
    )
  }
}

// Define styles
const styles = StyleSheet.create({
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
})

// Make this component available to the app
export default CourseItem