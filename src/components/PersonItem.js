import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const PersonItem = ({ person }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={tw`p-4 bg-gray-600 m-1 rounded-lg`}
        onPress={() => navigation.navigate('PersonScreen', { person })}
      >
        <Text style={tw`text-3xl text-gray-200`}>{person.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PersonItem;

const styles = StyleSheet.create({});
