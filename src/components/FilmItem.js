import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const FilmItem = ({ film }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('FilmScreen', { film })}
        style={tw`p-2 bg-gray-600 m-1 rounded-lg`}
      >
        <Text style={tw`text-gray-300`}>{film.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilmItem;

const styles = StyleSheet.create({});
