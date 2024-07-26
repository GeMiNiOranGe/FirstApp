import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native'

import * as API from '../../data/ApiMovie';
import ItemMovie from './ItemMovie';

class ScreenMovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
    }
    this.moveToMovieDetail = this.moveToMovieDetail.bind(this)
  }

  componentDidMount() {
    // whether set API in constructor or componentDidUpdate, render function is forced to execute twice
    API.search('Batman').then(data => {
      this.setState({
        dataSource: data
      })
    })
  }

  moveToMovieDetail(data) {
    this.props.navigation.navigate('MovieDetail', {
      imdbID: data.imdbID,
    })
  }

  render() {
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
    paddingHorizontal: 10,
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
})

export default ScreenMovieList