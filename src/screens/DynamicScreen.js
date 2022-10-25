import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import LayoutContainer from '../components/LayoutContainer';
import LayoutController from '../components/LayoutController';
import ScreenContainer from '../components/ScreenContainer';

export default function Component(props) {
  const [flexDirection, setFlexDirection] = useState('column');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('flex-start');

  return (
    <ScreenContainer title="동적 변경">
      <LayoutContainer
        style={{
          flexDirection,
          justifyContent,
          alignItems,
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </LayoutContainer>
      <LayoutController
        flexDirection={flexDirection}
        setFlexDirection={setFlexDirection}
        justifyContent={justifyContent}
        setJustifyContent={setJustifyContent}
        alignItems={alignItems}
        setAlignItems={setAlignItems}
      />
    </ScreenContainer>
  );
}
