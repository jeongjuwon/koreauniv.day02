import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import LayoutContainer from '../components/LayoutContainer';
import ScreenContainer from '../components/ScreenContainer';

export default function Component(props) {
  return (
    <ScreenContainer title="FlexScreen">
      <LayoutContainer>
        <View style={{flex: 1, width: 50, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, width: 50, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, width: 50, backgroundColor: 'steelblue'}} />
      </LayoutContainer>
      <LayoutContainer>
        <View style={{flex: 1, width: 50, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, width: 50, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, width: 50, backgroundColor: 'steelblue'}} />
      </LayoutContainer>
      <LayoutContainer style={{flexDirection: 'row'}}>
        <View style={{flex: 1, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, height: 50, backgroundColor: 'steelblue'}} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
