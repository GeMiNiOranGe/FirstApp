import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class CourseItem extends React.Component {
  render() {
    return (
      <View style={styles.course}>
        <Image
          style={styles.image}
          source={{ uri: this.props.imageUri }}
        />

        <View style={styles.information}>
          <Text style={styles.name}>{this.props.name}</Text>

          <Text
            style={styles.summary}
            numberOfLines={2}
          >
            {this.props.summary}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  course: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  information: {
    marginLeft: 10,
    // make the text don't out of the screen
    flexShrink: 1,
  },
  name: {
    fontSize: 22,
    color: 'white',
    marginBottom: 4,
  },
  summary: {
    color: 'darkgray',
  },
});

export default CourseItem;
