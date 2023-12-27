import React from 'react';
import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigation from './navigation/appNavigation';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppNavigation />
    </GestureHandlerRootView>
  );
};

export default App;
