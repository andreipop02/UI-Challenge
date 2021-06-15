import {StyleSheet} from 'react-native';
import {metrics} from '../constants/index';

const OnboardingScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: metrics.size1,
  },
  background: {
    flex: metrics.size1,
  },
  rectangle: {
    width: metrics.size48,
    height: metrics.size48,
    justifyContent: 'center',
  },
  rectangleContainer: {
    flex: metrics.size1,
    marginTop: metrics.size25,
    alignItems: 'flex-end',
    marginRight: metrics.size53,
  },
  textContainer: {
    flex: metrics.size8,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: metrics.size19,
  },
});

export default OnboardingScreenStyles;
