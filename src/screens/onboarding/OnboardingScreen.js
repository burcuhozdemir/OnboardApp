import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import globalStyle from '../../../assets/styles/main';
import style from './style';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {setItem} from '../../../utils/asyncStorage';

const onBoardingSteps = [
  {
    title: 'Purchase Online !',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing,sed do eiusmod tempor ut labore',
    image: require('../../../assets/images/purchase-online.png'),
  },
  {
    title: 'Track order !',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing,sed do eiusmod tempor ut labore',
    image: require('../../../assets/images/track-order.png'),
  },
  {
    title: 'Get your order !',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing,sed do eiusmod tempor ut labore',
    image: require('../../../assets/images/get-your-order.png'),
  },
];

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onBoardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex == onBoardingSteps.length - 1;
    if (isLastScreen) {
      endBoarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isLastScreen = screenIndex == 0;
    if (isLastScreen) {
      endBoarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endBoarding = () => {
    setScreenIndex(0);
    setItem('onboarded', '1');
    navigation.navigate('Home');
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack),
  );

  return (
    <GestureDetector gesture={swipes}>
      <View
        entering={FadeIn}
        key={screenIndex}
        style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <View style={style.container}>
          <Animated.Image
            source={data.image}
            style={style.image}
            entering={FadeIn}
            exiting={FadeOut}
          />
          <Animated.Text
            entering={SlideInRight}
            exiting={SlideOutLeft}
            style={style.titleText}>
            {data.title}
          </Animated.Text>
          <Animated.Text
            entering={SlideInRight.delay(150)}
            exiting={SlideOutLeft}
            style={style.subTitleText}>
            {data.description}
          </Animated.Text>
        </View>
        <View style={style.footer}>
          <View style={style.buttonRows}>
            <Text onPress={endBoarding} style={style.buttonTextBlack}>
              Skip
            </Text>
            <View style={style.stepIndicatorContainer}>
              {onBoardingSteps.map((step, index) => (
                <View
                  key={index}
                  style={[
                    style.stepIndicator,
                    {
                      backgroundColor:
                        index == screenIndex ? '#037EEE' : '#AEC5E5',
                    },
                  ]}
                />
              ))}
            </View>
            <Pressable onPress={onContinue}>
              <Text style={style.buttonTextBlack}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </GestureDetector>
  );
};

export default OnboardingScreen;
