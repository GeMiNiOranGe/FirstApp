/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const StockButton = ({ stockName,stockIndex }) => {
    return {
      <TouchableOpacity style={styles.button}>
        <Text>{stockName}</Text>
      </TouchableOpacity>
    }
  }

  return (
    <SafeAreaView style={styles.container}/* style={backgroundStyle} */>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.stockName, { color: 'black' }]}>VIN GROUP</Text>
          <Text style={[styles.stockIndex, { color: 'black' }]}>8.7000</Text>
          <Text style={[styles.stockChange, { color: 'red' }]}>8.7000 (-1.5837%)</Text>
        </View>

        <View style={styles.footer}>
          {/* <TouchableOpacity style={styles.button}>
            <Text>VIN GROUP</Text>
          </TouchableOpacity> */}
          <StockButton stockName={"VIN GROUP"} stockIndex={""}/>
          <TouchableOpacity style={styles.button}>
            <Text>FLC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>VIETJET</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>MASSAN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>VINAMILK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>SRC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>HSBC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>SAM HOLDING</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>PETROLIMEX</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  stockName: {
    fontSize: 40,
  },
  stockIndex: {
    fontSize: 80,
  },
  stockChange: {
    fontSize: 40,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    borderWidth: 1,
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
