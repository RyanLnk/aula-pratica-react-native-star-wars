import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import BlankPageLoading from '../components/BlankPageLoading';
import Header from '../components/Header';

const PeopleListScreen = () => {
  const [people, setPeople] = useState([]);

  if (people.length === 0) {
    return <BlankPageLoading />;
  }

  return (
    <SafeAreaView>
      <Header />
    </SafeAreaView>
  );
};

export default PeopleListScreen;

const styles = StyleSheet.create({});
