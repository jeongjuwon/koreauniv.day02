import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Btn = ({value, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('onPress', title);
        onPress(title);
      }}
      style={[styles.btn, value === title && styles.selected]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const LayoutController = ({
  flexDirection,
  setFlexDirection,
  justifyContent,
  setJustifyContent,
  alignItems,
  setAlignItems,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>flexDirection:</Text>
        <Btn
          title={'column'}
          onPress={setFlexDirection}
          value={flexDirection}
        />
        <Btn title={'row'} onPress={setFlexDirection} value={flexDirection} />
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>justifyContent:</Text>
        <Btn
          title={'flex-start'}
          onPress={setJustifyContent}
          value={justifyContent}
        />
        <Btn
          title={'center'}
          onPress={setJustifyContent}
          value={justifyContent}
        />
        <Btn
          title={'flex-end'}
          onPress={setJustifyContent}
          value={justifyContent}
        />
        <Btn
          title={'space-between'}
          onPress={setJustifyContent}
          value={justifyContent}
        />
        <Btn
          title={'space-around'}
          onPress={setJustifyContent}
          value={justifyContent}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>alignItems:</Text>
        <Btn title={'flex-start'} onPress={setAlignItems} value={alignItems} />
        <Btn title={'center'} onPress={setAlignItems} value={alignItems} />
        <Btn title={'flex-end'} onPress={setAlignItems} value={alignItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 5,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  title: {
    width: 100,
  },
  btn: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  selected: {},
});

export default LayoutController;
