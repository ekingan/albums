/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//import library to create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/album_list';


//create a Component
const App = () => (
  <View style={{ flex: 1 }}>
   <Header headerText={'Albums'} />
   <AlbumList />
  </View>

);


//render it to the device
AppRegistry.registerComponent('albums', () => App);
