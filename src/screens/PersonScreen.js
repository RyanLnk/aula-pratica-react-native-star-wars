import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import FilmItem from '../components/FilmItem';
import Header from '../components/Header';
import api from '../services/api';

const PersonScreen = ({ route }) => {
  const { person } = route.params;

  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function loadFilms() {
      const arrayFilms = [];

      for (const url of person.films) {
        const response = await api.get(url);
        arrayFilms.push(response.data);
      }

      setFilms(arrayFilms);
    }

    loadFilms();
  }, []);

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
      {films.length === 0 && <ActivityIndicator size={25} color="#9CA3AF" />}

      <FlatList
        data={films}
        renderItem={({ item }) => <FilmItem film={item} />}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({});
