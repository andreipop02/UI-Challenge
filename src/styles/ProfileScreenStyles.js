import {StyleSheet} from 'react-native';
import {colors, metrics} from '../constants/index';

const ProfileScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: metrics.size1,
    backgroundColor: colors.white,
  },
  path: {
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    flex: metrics.size1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: metrics.size25,
    marginTop: metrics.size45,
  },
  titleText: {
    fontSize: metrics.size34,
    color: colors.ceruleanBlue,
    fontWeight: 'bold',
  },
  editIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDetailsContainer: {
    flex: metrics.size2,
    marginLeft: metrics.size25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPhoto: {
    borderRadius: metrics.size30,
  },
  userTextContainer: {
    marginLeft: metrics.size20,
  },
  nameText: {
    fontSize: metrics.size18,
    color: colors.ceruleanBlue,
    fontWeight: 'bold',
  },
  userSubtitleText: {
    fontSize: metrics.size16,
    color: colors.shuttleGray,
    marginTop: metrics.size5,
  },
  storageContainer: {
    flex: metrics.size3,
  },
  progressBar: {
    height: metrics.size6,
    borderRadius: metrics.size5,
    marginHorizontal: metrics.size25,
    backgroundColor: colors.solitude,
    marginTop: metrics.size9,
  },
  doneProgress: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.brinkPink,
    width: '67.5%',
    borderRadius: metrics.size5,
  },
  progressTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: metrics.size25,
  },
  progressMainText: {
    fontSize: metrics.size24,
    color: colors.ceruleanBlue,
    fontWeight: 'bold',
  },
  progressSecondText: {
    fontSize: metrics.size18,
    color: colors.malibu,
    marginLeft: metrics.size6,
    fontWeight: 'bold',
    marginTop: metrics.size3,
  },
  increaseTouchable: {
    backgroundColor: colors.brinkPink,
    borderRadius: metrics.size22,
    justifyContent: 'center',
    alignItems: 'center',
    flex: metrics.size0_4,
    marginHorizontal: metrics.size25,
    marginTop: metrics.size20,
  },
  increaseSpaceText: {
    fontSize: metrics.size16,
    color: colors.white,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: metrics.size5,
    marginHorizontal: metrics.size25,
    marginBottom: metrics.size13,
    marginTop: metrics.size40Negative,
  },
  storageManagementContainer: {
    flex: metrics.size3,
    borderRadius: metrics.size7,
    backgroundColor: colors.whiteLilac,
    marginBottom: metrics.size10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  storageText: {
    marginLeft: metrics.size16,
    fontSize: metrics.size16,
    color: colors.charade,
  },
  rightIcon: {
    marginRight: metrics.size16,
  },
  devicesContainer: {
    flex: metrics.size4,
    borderRadius: metrics.size7,
    backgroundColor: colors.whiteLilac,
    marginBottom: metrics.size10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  devicesMainText: {
    marginLeft: metrics.size16,
    fontSize: metrics.size16,
    color: colors.charade,
  },
  devicesSecondText: {
    marginLeft: metrics.size16,
    fontSize: metrics.size14,
    color: colors.shuttleGray,
  },
  cameraUploadsContainer: {
    flex: metrics.size3,
    borderRadius: metrics.size7,
    backgroundColor: colors.whiteLilac,
    marginBottom: metrics.size10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cameraText: {
    marginLeft: metrics.size16,
    fontSize: metrics.size16,
    color: colors.charade,
  },
  useDataContainer: {
    flex: metrics.size3,
    borderRadius: metrics.size7,
    backgroundColor: colors.whiteLilac,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  useDataText: {
    marginLeft: metrics.size16,
    fontSize: metrics.size16,
    color: colors.charade,
  },
  switch: {
    transform: [{scaleX: 1.1}, {scaleY: 1.1}],
  },
  switchEnabledContainer: {
    height: metrics.size30,
    width: metrics.size53,
    marginRight: metrics.size16,
    backgroundColor: colors.dodgerBlue,
    borderRadius: metrics.size16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchDisabledContainer: {
    height: metrics.size30,
    width: metrics.size53,
    marginRight: metrics.size16,
    backgroundColor: colors.gullGray,
    borderRadius: metrics.size16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreenStyles;
