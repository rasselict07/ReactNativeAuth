import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDAMHbYeGDFDAsuBhCjcrFnjP_ThsC_zow',
            authDomain: 'reactnativeauth-ab25b.firebaseapp.com',
            databaseURL: 'https://reactnativeauth-ab25b.firebaseio.com',
            projectId: 'reactnativeauth-ab25b',
            storageBucket: 'reactnativeauth-ab25b.appspot.com',
            messagingSenderId: '877365345498'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentiation" />
                <Text> AN App</Text>
            </View>
        );
    }
}

export default App;
