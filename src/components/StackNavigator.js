import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeopleListScreen from '../screens/PeopleListScreen';
import tw from 'twrnc';
import PersonScreen from '../screens/PersonScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, contentStyle: tw`bg-gray-800 p-2` }}
    >
      <Stack.Screen name="PeopleListScreen" component={PeopleListScreen} />
      <Stack.Screen name="PersonScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
