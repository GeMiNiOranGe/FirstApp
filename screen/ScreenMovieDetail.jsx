import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native'
import API from "../src/API_AppMovie";

class ScreenMovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    const imdbID = this.props.route.params.imdbID;

    API.detail(imdbID).then(data => {
      this.setState(data)
    })
  }

  seperator() {
    return (
      <View style={{ height: 1, backgroundColor: 'black', marginVertical: 5, }} />
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={{
              uri: this.state.Poster
            }}
          />
          <Text style={styles.subTitle}>Meta: {this.state.Metascore}</Text>
          <Text style={styles.subTitle}>imDB: {this.state.imdbRating}</Text>
        </View>
        <View style={{ flex: 2, padding: 10 }}>
          <Text style={styles.title}>{this.state.Title} ({this.state.Year})</Text>
          <Text style={{ color: 'black' }}>{this.state.Genre} ({this.state.Runtime})</Text>
          {this.seperator()}
          <Text style={{ color: 'black' }}>Release: {this.state.Released} [{this.state.Rated}]</Text>
          {this.seperator()}
          <Text style={{ color: 'black' }}>{this.state.Plot}</Text>
          {this.seperator()}
          <Text style={{ color: 'black' }}>Director: {this.state.Director}</Text>
          {this.seperator()}
          <Text style={{ color: 'black' }}>Writer: {this.state.Writer}</Text>
          {this.seperator()}
          <Text style={{ color: 'black' }}>Actors: {this.state.Actors}</Text>
          {this.seperator()}
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 70,
    flexDirection: 'row',
  },
  image: {
    height: 200,
  },
  title: {
    fontSize: 25,
    color: 'black',
  },
  subTitle: {
    fontSize: 20,
    color: 'black',
  },
})

export default ScreenMovieDetail