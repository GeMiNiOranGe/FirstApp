import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native'

import API from './API_AppMovie';
import ItemMovie from './ItemMovie';

function ScreenMovieList({ navigation }) {
  const [textInputValue, setTextInputValue] = React.useState('')
  const [dataSource, setDataSource] = React.useState([])

  React.useEffect(() => {
    API.search('Batman').then(data => {
      setDataSource(data)
    })
  }, [])

  function moveToMovieDetail(data) {
    navigation.navigate('MovieDetail', {
      imdbID: data.imdbID,
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={moveToMovieDetail}
      >
        <Text style={styles.buttonTitle}>Move to detail</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        onChangeText={textInputValue => setTextInputValue(textInputValue)}
      /> */}
      <FlatList
        style={styles.flatList}
        data={dataSource}
        renderItem={({ item }) => <ItemMovie
          data={item}
          onPressItem={moveToMovieDetail}
        />}
        keyExtractor={item => item.imdbID}
      />
    </SafeAreaView>
  )
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