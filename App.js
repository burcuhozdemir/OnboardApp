import React from 'react';
import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <OnboardingScreen />
    </GestureHandlerRootView>
  );
};

export default App;
