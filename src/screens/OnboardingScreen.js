import React from 'react';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import OnboardingScreenStyles from '../styles/OnboardingScreenStyles';
import {Icon} from 'react-native-elements';
import {metrics, colors} from '../constants';
import {useNavigation} from '@react-navigation/native';
import roots from '../navigation/roots';

const Onboarding = () => {
  const navigator = useNavigation();
  const navigateToHomeScreen = () => {
    navigator.navigate(roots.homeScreen);
  };
  return (
    <ImageBackground
      style={OnboardingScreenStyles.background}
      source={require('../../assets/onboardingBackground.png')}>
      <View style={OnboardingScreenStyles.mainContainer}>
        <View style={OnboardingScreenStyles.textContainer}>
          <Image
            style={OnboardingScreenStyles.text}
            source={require('../../assets/yourCloudStorage.png')}
          />
        </View>
        <View style={OnboardingScreenStyles.rectangleContainer}>
          <TouchableOpacity onPress={() => navigateToHomeScreen()}>
            <ImageBackground
              style={OnboardingScreenStyles.rectangle}
              source={require('../../assets/Rectangle.png')}>
              <Icon
                name="arrowright"
                type="antdesign"
                size={metrics.size30}
                color={colors.white}
              />
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;
