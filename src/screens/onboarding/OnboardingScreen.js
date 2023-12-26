import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import globalStyle from '../../../assets/styles/main';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

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

  const endBoarding = () => {
    setScreenIndex(0);
    console.log('router back');
  };

  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.topTitleArea}>
        <FontAwesomeIcon icon={faCartShopping} size={40} color="#FFFFFF" />
        <View style={style.lineView}>
          <Text style={style.topTitleText}>eCommerce Shop</Text>
        </View>
        <Text style={style.topSubTitleText}>Professional App for your </Text>
        <Text style={style.topSubTitleText}>eCommerce business</Text>
      </View>

      <View style={style.container}>
        <Image source={data.image} style={style.image} />
        <Text style={style.titleText}>{data.title}</Text>
        <Text style={style.subTitleText}>{data.description}</Text>
      </View>
      <View style={style.footer}>
        <View style={style.buttonRows}>
          <Text onPress={endBoarding} style={style.buttonTextBlack}>
            Skip
          </Text>
          <View style={style.stepIndicatorContainer}>
            {onBoardingSteps.map((step, index) => (
              <View
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
  );
};

export default OnboardingScreen;
