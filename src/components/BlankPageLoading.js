import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';

const BlankPageLoading = () => {
  return (
    <SafeAreaView>
      <Header />
      <ActivityIndicator size={25} color="#9CA3AF" />
    </SafeAreaView>
  );
};

export default BlankPageLoading;

const styles = StyleSheet.create({});
