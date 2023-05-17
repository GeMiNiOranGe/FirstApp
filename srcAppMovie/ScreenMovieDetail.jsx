import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import API from "./API_AppMovie";

const textColor = 'white'

class Seperator extends React.Component {
  render() {
    return <View style={{ height: 1, backgroundColor: 'white', marginVertical: 5, }} />
  }
}

class ScreenMovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    const imdbID = this.props.route.params.imdbID;

    API.detail(imdbID).then(data => {
      this.setState(data)
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.backgroundImage}
          blurRadius={6}
          source={{
            uri: this.state.Poster
          }}
        />

        <ScrollView style={[styles.mainScreen, styles.absolute]}>
          <LinearGradient
            style={{
              height: 100,
              marginTop: 100
            }}
            colors={['transparent', '#222831']}
          />

          {/* <View style={styles.head}>
            </View> */}

          <View style={styles.body}>
            <View style={{
              backgroundColor: '#222831',
              height: Dimensions.get('window').height
            }} />

            <View style={[styles.movieInfo, styles.absolute]}>
              <View style={{ flex: 1 }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: this.state.Poster
                  }} />
                <Text style={styles.subTitle}>Meta: {this.state.Metascore}</Text>
                <Text style={styles.subTitle}>imDB: {this.state.imdbRating}</Text>
              </View>

              <View style={{ flex: 2, paddingLeft: 10 }}>
                <Text style={styles.title}>{this.state.Title} ({this.state.Year})</Text>
                <Text style={styles.text}>{this.state.Genre} ({this.state.Runtime})</Text>
                <Seperator />
                <Text style={styles.text}>Release: {this.state.Released} [{this.state.Rated}]</Text>
                <Seperator />
                <Text style={styles.text}>{this.state.Plot}</Text>
                <Seperator />
                <Text style={styles.text}>Director: {this.state.Director}</Text>
                <Seperator />
                <Text style={styles.text}>Writer: {this.state.Writer}</Text>
                <Seperator />
                <Text style={styles.text}>Actors: {this.state.Actors}</Text>
                <Seperator />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  backgroundImage: {
    height: '70%',
  },
  backgroundImageCover: {

  },
  mainScreen: {

  },
  absolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  // head: {
  //   // flex: 1, 
  // },
  body: {
    // flex: 1, 
  },
  movieInfo: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  image: {
    height: 200,
  },
  title: {
    fontSize: 25,
    color: textColor,
  },
  subTitle: {
    fontSize: 20,
    color: textColor,
  },
  text: {
    color: textColor,
  },
})

export default ScreenMovieDetail