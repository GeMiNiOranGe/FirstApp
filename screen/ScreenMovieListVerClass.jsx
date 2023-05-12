import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import API from '../src/API_AppMovie';
import ItemMovie from '../src_component/ItemMovie';

class ScreenMovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
    }
    this.moveToMovieDetail = this.moveToMovieDetail.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount called');
    API.search('Batman').then(data => {
      this.setState({
        dataSource: data
      })
    })
  }

  componentDidUpdate(){
    console.log('componentDidUpdate called');
  }

  moveToMovieDetail(data) {
    this.props.navigation.navigate('MovieDetail', {
      imdbID: data.imdbID,
    })
  }

  render() {
    console.log('render called');
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={this.state.dataSource}
          renderItem={({ item }) => <ItemMovie
            data={item}
            onPressItem={this.moveToMovieDetail}
          />}
          keyExtractor={item => item.imdbID}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    // flex: 1,
    padding: 10,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    height: 100,
    marginVertical: 10,
  },
  image: {
    height: 100,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  // textInput: {
  //   padding: 10,
  //   color: 'black',
  //   borderColor: 'black',
  //   borderWidth: 2,
  // },
  // buttonTitle: {
  //   color: 'black',
  // },
  // button: {

  // },
})

export default ScreenMovieList