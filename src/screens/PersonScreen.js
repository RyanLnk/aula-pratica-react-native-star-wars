import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Header from '../components/Header';

const PersonScreen = ({ route }) => {
  const { person } = route.params;

  return (
    <SafeAreaView>
      <Header />

      {/* Nome */}
      <Text style={tw`text-2xl text-gray-200 text-center mb-4`}>
        {person.name}
      </Text>

      {/* Cor do cabelo */}
      <Text style={tw`text-lg text-gray-300`}>
        Hair Color: {person.hair_color}
      </Text>

      {/* Cor dos olhos */}
      <Text style={tw`text-lg text-gray-300`}>
        Eye Color: {person.eye_color}
      </Text>

      {/* Cor do cabelo */}
      <Text style={tw`text-lg text-gray-300`}>Gender: {person.gender}</Text>

      {/* Films */}
      <Text style={tw`text-2xl text-gray-400 text-center my-4`}>Films</Text>
    </SafeAreaView>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({});
