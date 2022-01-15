import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../services/api';
import tw from 'twrnc';
import BlankPageLoading from '../components/BlankPageLoading';
import Header from '../components/Header';
import PersonItem from '../components/PersonItem';

const PeopleListScreen = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function loadPeople() {
      const response = await api.get('/people');
      setPeople(response.data.results);
    }

    loadPeople();
  }, []);

  if (people.length === 0) {
    return <BlankPageLoading />;
  }

  return (
    <SafeAreaView>
      <Header />

      <FlatList
        data={people}
        renderItem={({ item }) => <PersonItem person={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

export default PeopleListScreen;

const styles = StyleSheet.create({});
