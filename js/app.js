/**
 * React Natives App
 * https://github.com/react-natives/react-natives-app
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Map from './map';
import List from './list';

export class App extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    barStyle="light-content"
                />
                <Router>
                    <Scene key="root">
                        <Scene navigationBarStyle={styles.navBar}
                               backButtonImage={require('./../assets/back_chevron.png')}
                               titleStyle={styles.navBarText} key="map" component={Map} title="Meetup Location"/>
                        <Scene navigationBarStyle={styles.navBar}

                               titleStyle={styles.navBarText} key="list" component={List} title="Meetups" initial={true}/>
                    </Scene>
                </Router>
            </View>
        );
    }
}

let styles = {
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent:  'flex-end',
        flex:            1,
        alignItems:      'center',
        backgroundColor: '#F5FCFF',
    },
    navBar: {
        backgroundColor: '#5555FF',
    },
    navBarText: {
        color: 'white',
        fontWeight: 'bold',
    }
};

styles = StyleSheet.create(styles);
AppRegistry.registerComponent('ReactNatives', () => App);
