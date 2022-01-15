import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import BackButton from './BackButton';

const Header = () => {
  return (
    <View
      style={tw`flex-row justify-center pb-2 mb-4 border-b-2 border-gray-600 relative`}
    >
      <BackButton />
      <FontAwesome name="space-shuttle" size={32} color="#9CA3AF" />
      <Text style={tw`text-2xl text-gray-400 ml-2`}>Star Wars Info App!</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
