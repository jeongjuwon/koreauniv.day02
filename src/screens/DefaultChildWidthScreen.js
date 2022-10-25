import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import LayoutContainer from '../components/LayoutContainer';
import ScreenContainer from '../components/ScreenContainer';

export default function Component(props) {
  return (
    <ScreenContainer title="자식의 기본 넓이">
      <LayoutContainer
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </LayoutContainer>
      <LayoutContainer
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View
          style={{width: 50, height: '100%', backgroundColor: 'powderblue'}}
        />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
