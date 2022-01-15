import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../services/api';
import tw from 'twrnc';
import BlankPageLoading from '../components/BlankPageLoading';
import Header from '../components/Header';
import PersonItem from '../components/PersonItem';

const PeopleListScreen = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  async function loadPeople() {
    if (people.length === 0 || people.length < total) {
      setLoading(true);

      const response = await api.get(`/people/?page=${page}`);
      setPeople([...people, ...response.data.results]);
      setPage(page + 1);
      setTotal(response.data.count);

      setLoading(false);
    }
  }

  useEffect(() => {
    loadPeople();
  }, []);

  if (people.length === 0) {
    return <BlankPageLoading />;
  }

  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header />

      <FlatList
        data={people}
        renderItem={({ item }) => <PersonItem person={item} />}
        keyExtractor={(item) => item.name}
        onEndReached={loadPeople}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
      />

      {loading && <ActivityIndicator size={25} color="#9CA3AF" />}
    </SafeAreaView>
  );
};

export default PeopleListScreen;

const styles = StyleSheet.create({});
