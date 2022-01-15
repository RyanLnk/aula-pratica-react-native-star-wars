import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const PeopleItem = ({ person }) => {
  return (
    <View>
      <TouchableOpacity style={tw`p-4 bg-gray-600 m-1 rounded-lg`}>
        <Text style={tw`text-3xl text-gray-200`}>{person.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PeopleItem;

const styles = StyleSheet.create({});
