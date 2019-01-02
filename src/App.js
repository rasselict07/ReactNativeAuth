import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import { Header } from './component/common';
import LoginForm from './component/LoginForm';

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
                <LoginForm />
            </View>
        );
    }
}

export default App;
