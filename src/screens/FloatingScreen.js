import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import LayoutContainer from '../components/LayoutContainer';
import ScreenContainer from '../components/ScreenContainer';

export default function Component(props) {
  return (
    <ScreenContainer title="FloatingScreen">
      <LayoutContainer>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            left: 20,
            top: 20,
            width: 50,
            height: 50,
            backgroundColor: 'powderblue',
          }}
        />
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'skyblue',
          }}
        />
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'steelblue',
          }}
        />
      </LayoutContainer>
    </ScreenContainer>
  );
}
