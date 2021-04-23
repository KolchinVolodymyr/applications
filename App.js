import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import {renderItem} from "./src/renderItem";

// const renderItem = ({ item }) => (
//     <Item title={item.title} id={item.id} releaseYear={item.releaseYear} />
// );

// const Item = ({ title, id, releaseYear }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{id} {title}</Text>
//         <Text style={styles.releaseYear}>Release Year:{releaseYear}</Text>
//     </View>
// );


export default function App() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setData(json.movies))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app !!</Text>
        {isLoading ? <ActivityIndicator  size="large" color="#00ff00"/> : (<FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />)}

    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
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
