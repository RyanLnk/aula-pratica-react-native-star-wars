import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Header from '../components/Header';

const FilmScreen = ({ route }) => {
  const { film } = route.params;

  return (
    <SafeAreaView>
      <Header />

      {/* Titulo */}
      <Text style={tw`text-3xl text-gray-200 text-center mb-4`}>
        {film.title}
      </Text>

      {/* Episódio */}
      <Text style={tw`text-lg text-gray-300`}>Episode: {film.episode_id}</Text>

      {/* Diretor */}
      <Text style={tw`text-lg text-gray-300`}>Director: {film.director}</Text>

      {/* Release date */}
      <Text style={tw`text-lg text-gray-300`}>
        Release date: {film.release_date}
      </Text>
    </SafeAreaView>
  );
};

export default FilmScreen;

const styles = StyleSheet.create({});
