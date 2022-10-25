import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import LayoutContainer from '../components/LayoutContainer';
import ScreenContainer from '../components/ScreenContainer';

export default function Component(props) {
  return (
    <ScreenContainer title="AlignSelfScreen">
      <LayoutContainer
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: 'powderblue',
            alignSelf: 'flex-start',
          }}
        />
        <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}} />
      </LayoutContainer>
      <LayoutContainer
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: 'powderblue',
            alignSelf: 'flex-start',
          }}
        />
        <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}} />
      </LayoutContainer>
    </ScreenContainer>
  );
}
