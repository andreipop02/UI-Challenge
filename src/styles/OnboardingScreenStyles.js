import {StyleSheet} from 'react-native';
import {colors, metrics} from '../constants/index';

const OnboardingScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: metrics.size1,
    justifyContent: 'flex-end',
    alignContent: 'space-between'
  },
  background: {
    flex: metrics.size1,
  },
  cloudText: {
    fontWeight: 'bold',
    fontSize: metrics.size24,
    color: colors.mariner,
    lineHeight: metrics.size32
  },
  rectangle: {
    width: metrics.size48,
    height: metrics.size48,
    justifyContent: 'center',
  },
  rectangleContainer: {
    flex: metrics.size1,
    alignItems: 'flex-end',
    marginRight: metrics.size53,
  },
  textContainer: {
    flex: metrics.size10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: metrics.size19,
  },
});

export default OnboardingScreenStyles;
