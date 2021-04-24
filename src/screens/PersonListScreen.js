import React, {Component, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList, ActivityIndicator, Button} from 'react-native';
import {renderItem} from "../renderItem";
import { SearchBar } from 'react-native-elements';

export function PersonListScreen ({ navigation }) {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);


    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the "data"
            // Update FilteredData
            const newData = data.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredData with "data"
            setFilteredData(data);
            setSearch(text);
        }
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredData(responseJson);
                setData(responseJson);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => setLoading(false));
    }, []);

    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text>Home screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('PersonInfoScreen')}
            />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text>Open up App.js to start working on your app !!</Text>
                    <SearchBar
                        round
                        searchIcon={{ size: 24 }}
                        onChangeText={(text) => searchFilterFunction(text)}
                        onClear={(text) => searchFilterFunction('')}
                        placeholder="Type Here..."
                        value={search}
                    />
                    {isLoading ? <ActivityIndicator  size="large" color="#00ff00"/> : (<FlatList
                        data={filteredData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                        onPress={() => alert("clicked")}
                    />)}
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({

});

