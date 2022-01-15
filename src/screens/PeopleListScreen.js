import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

const PeopleListScreen = () => {
  const [people, setPeople] = useState([]);

  if (people.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator size={25} color="#9CA3AF" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>People List Screen</Text>
    </SafeAreaView>
  );
};

export default PeopleListScreen;

const styles = StyleSheet.create({});
