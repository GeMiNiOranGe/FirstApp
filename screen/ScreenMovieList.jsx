import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native'
import API from '../src/API_AppMovie';

const Item = ({ data, onPressItem }) => (
  <TouchableOpacity
    onPress={() => {
      onPressItem(data)
    }}
  >
    <View style={styles.row}>
      <View style={{ flex: 3 }}>
        <Image
          style={styles.image}
          source={{ uri: data.Poster }}
        />
      </View>

      <View style={{ flex: 10, padding: 10 }}>
        <Text style={styles.title}>{data.Title} ({data.Year})</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.title}>{'>'}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

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
        renderItem={({ item }) => <Item
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