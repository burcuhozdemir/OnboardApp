import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {removeItem} from '../../../utils/asyncStorage';
import style from './style';
import globalStyle from '../../../assets/styles/main';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReset = async () => {
    await removeItem('onboarded');
    navigation.push('Onboarding');
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.container}>
        <Text style={style.text}>Home Page</Text>
        <TouchableOpacity
          onPress={() => {
            handleReset();
          }}
          style={style.resetButton}>
          <Text style={style.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
