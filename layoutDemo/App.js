/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import FlexBoxLayout from './src/FlexboxJustifyContentCenter';
//import FlexBoxLayout from './src/FlexboxJustifyContentFlexEnd';
//import FlexBoxLayout from './src/FlexboxJustifyContentFlexStart';
//import FlexBoxLayout from './src/FlexboxJustifyContentSpaceAround';
//import FlexBoxLayout from './src/FlexboxJustifyContentSpaceBetween';
//import FlexBoxLayout from './src/FlexboxAlignSelf1';
import FlexBoxLayout from './src/FlexboxAlignSelf2';

export default class App extends Component<Props> {
  render() {
    return (
      <FlexBoxLayout/>
    );
  }
}

