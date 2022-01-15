import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  if (navigation.getState().index === 0) {
    return <></>;
  }

  return (
    <TouchableOpacity
      style={tw`absolute left-0`}
      onPress={() => navigation.goBack()}
    >
      <AntDesign name="back" size={24} color="#6B7280" />
    </TouchableOpacity>
  );
};
export default BackButton;

const styles = StyleSheet.create({});
