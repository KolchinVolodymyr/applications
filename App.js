import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import {renderItem} from "./src/renderItem";
import { SearchBar } from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigators/RootNavigator';

export default function App() {
    //  const [search, setSearch] = useState('');
    //  const [filteredData, setFilteredData] = useState([]);
    //  const [data, setData] = useState([]);
    //  const [isLoading, setLoading] = useState(true);
    //
    //
    // const searchFilterFunction = (text) => {
    //     // Check if searched text is not blank
    //     if (text) {
    //         // Inserted text is not blank
    //         // Filter the "data"
    //         // Update FilteredData
    //         const newData = data.filter(function (item) {
    //             const itemData = item.title
    //                 ? item.title.toUpperCase()
    //                 : ''.toUpperCase();
    //             const textData = text.toUpperCase();
    //             return itemData.indexOf(textData) > -1;
    //         });
    //         setFilteredData(newData);
    //         setSearch(text);
    //     } else {
    //         // Inserted text is blank
    //         // Update FilteredData with "data"
    //         setFilteredData(data);
    //         setSearch(text);
    //     }
    // };
    //
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             setFilteredData(responseJson);
    //             setData(responseJson);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         })
    //         .finally(() => setLoading(false));
    // }, []);

  return (
      // <SafeAreaView style={{ flex: 1 }}>
      //     <View style={styles.container}>
      //         <Text>Open up App.js to start working on your app !!</Text>
      //         <SearchBar
      //             round
      //             searchIcon={{ size: 24 }}
      //             onChangeText={(text) => searchFilterFunction(text)}
      //             onClear={(text) => searchFilterFunction('')}
      //             placeholder="Type Here..."
      //             value={search}
      //         />
      //           {isLoading ? <ActivityIndicator  size="large" color="#00ff00"/> : (<FlatList
      //             data={filteredData}
      //             keyExtractor={(item, index) => index.toString()}
      //             renderItem={renderItem}
      //         />)}
      //     </View>
      // </SafeAreaView>
      <SafeAreaView style={styles.container}>
          <NavigationContainer>
              <RootNavigator />
          </NavigationContainer>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        marginStart: 20,
        marginEnd: 20,
        // alignItems: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
